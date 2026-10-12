-- Run once in the Supabase SQL editor, before inviting clients.
create extension if not exists pgcrypto;

create table public.portal_admins (
  user_id uuid primary key references auth.users(id) on delete cascade
);
alter table public.portal_admins enable row level security;
revoke all on public.portal_admins from anon, authenticated;

create function public.is_portal_admin() returns boolean
language sql stable security definer set search_path = '' as $$
  select exists(select 1 from public.portal_admins where user_id = (select auth.uid()));
$$;
revoke all on function public.is_portal_admin() from public;
grant execute on function public.is_portal_admin() to authenticated;

create table public.portal_clients (
  id uuid primary key default gen_random_uuid(),
  auth_user_id uuid unique references auth.users(id) on delete set null,
  full_name text not null check (length(full_name) between 2 and 120),
  email text not null unique check (email = lower(email)),
  phone text not null default '',
  address text not null default '',
  country text not null default 'Bangladesh',
  occupation text not null default '',
  emergency_contact text not null default '',
  status text not null default 'active' check (status in ('active', 'inactive')),
  created_at timestamptz not null default now()
);

create table public.portal_villas (
  id uuid primary key default gen_random_uuid(),
  client_id uuid not null references public.portal_clients(id),
  villa_number text not null unique,
  villa_type text not null default 'Luxury Villa' check (villa_type in ('Luxury Villa','Apartment','Condominium','Residential Plot')),
  block text not null default '',
  plot_size text not null default '',
  stage text not null default 'Reserved' check (stage in ('Reserved','Site preparation','Foundation','Structure','Finishing','Ready for handover','Handed over')),
  progress integer not null default 0 check (progress between 0 and 100),
  handover_date date,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index portal_villas_client_idx on public.portal_villas(client_id);

create table public.portal_updates (
  id uuid primary key default gen_random_uuid(),
  villa_id uuid not null references public.portal_villas(id),
  title text not null check (length(title) between 2 and 160),
  body text not null check (length(body) between 2 and 5000),
  published boolean not null default false,
  created_at timestamptz not null default now()
);
create index portal_updates_villa_idx on public.portal_updates(villa_id, created_at desc);

create table public.portal_media (
  id uuid primary key default gen_random_uuid(),
  update_id uuid not null references public.portal_updates(id),
  public_id text not null unique,
  resource_type text not null check (resource_type in ('image','video')),
  format text,
  caption text not null default '',
  bytes bigint,
  ready boolean not null default false,
  created_at timestamptz not null default now()
);
create index portal_media_update_idx on public.portal_media(update_id);

create function public.can_view_portal_villa(target uuid) returns boolean
language sql stable security definer set search_path = '' as $$
  select public.is_portal_admin() or exists (
    select 1 from public.portal_villas v join public.portal_clients c on c.id = v.client_id
    where v.id = target and c.auth_user_id = (select auth.uid()) and c.status = 'active'
  );
$$;
revoke all on function public.can_view_portal_villa(uuid) from public;
grant execute on function public.can_view_portal_villa(uuid) to authenticated;

alter table public.portal_clients enable row level security;
alter table public.portal_villas enable row level security;
alter table public.portal_updates enable row level security;
alter table public.portal_media enable row level security;

create policy clients_admin on public.portal_clients for all to authenticated using (public.is_portal_admin()) with check (public.is_portal_admin());
create policy clients_owner on public.portal_clients for select to authenticated using (auth_user_id = (select auth.uid()) and status = 'active');
create policy villas_admin on public.portal_villas for all to authenticated using (public.is_portal_admin()) with check (public.is_portal_admin());
create policy villas_owner on public.portal_villas for select to authenticated using (public.can_view_portal_villa(id));
create policy updates_admin on public.portal_updates for all to authenticated using (public.is_portal_admin()) with check (public.is_portal_admin());
create policy updates_owner on public.portal_updates for select to authenticated using (published and public.can_view_portal_villa(villa_id));
create policy media_admin on public.portal_media for all to authenticated using (public.is_portal_admin()) with check (public.is_portal_admin());
create policy media_owner on public.portal_media for select to authenticated using (
  ready and exists(select 1 from public.portal_updates u where u.id = update_id and u.published and public.can_view_portal_villa(u.villa_id))
);
revoke all on public.portal_clients, public.portal_villas, public.portal_updates, public.portal_media from anon, authenticated;
grant select, insert, update on public.portal_clients, public.portal_villas, public.portal_updates, public.portal_media to authenticated;
-- Only the server can link identities and mark verified Cloudinary uploads ready.
revoke insert, update on public.portal_clients, public.portal_media from authenticated;
grant insert(full_name,email,phone,address,country,occupation,emergency_contact,status), update(full_name,phone,address,country,occupation,emergency_contact,status) on public.portal_clients to authenticated;

create table public.portal_audit (
  id bigint generated always as identity primary key,
  actor uuid,
  entity text not null,
  entity_id uuid not null,
  action text not null,
  created_at timestamptz not null default now()
);
alter table public.portal_audit enable row level security;
revoke all on public.portal_audit from anon, authenticated;
grant select on public.portal_audit to authenticated;
create policy audit_admin on public.portal_audit for select to authenticated using (public.is_portal_admin());
create function public.audit_portal_change() returns trigger language plpgsql security definer set search_path = '' as $$
begin
  insert into public.portal_audit(actor,entity,entity_id,action) values (auth.uid(),TG_TABLE_NAME,NEW.id,TG_OP);
  return NEW;
end;
$$;
create trigger audit_clients after insert or update on public.portal_clients for each row execute function public.audit_portal_change();
create trigger audit_villas after insert or update on public.portal_villas for each row execute function public.audit_portal_change();
create trigger audit_updates after insert or update on public.portal_updates for each row execute function public.audit_portal_change();
create trigger audit_media after insert or update on public.portal_media for each row execute function public.audit_portal_change();

-- Supabase invitation creates the identity; bind it to the pre-created client.
create function public.link_portal_invitation() returns trigger language plpgsql security definer set search_path = '' as $$
begin
  if NEW.invited_at is not null then
    update public.portal_clients set auth_user_id = NEW.id where email = lower(NEW.email) and auth_user_id is null;
  end if;
  return NEW;
end;
$$;
create trigger portal_invited_user after insert on auth.users for each row execute function public.link_portal_invitation();
