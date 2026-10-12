-- Run after 202609150001_owner_portal.sql, including for existing installations.
begin;

alter table public.portal_clients add column client_code text;
alter table public.portal_clients add constraint portal_clients_client_code_key unique (client_code);
create sequence public.portal_client_code_seq;
revoke all on sequence public.portal_client_code_seq from public, anon, authenticated;

create function public.assign_portal_client_code() returns trigger
language plpgsql security definer set search_path = '' as $$
declare
  serial_value text;
begin
  if TG_OP = 'UPDATE' and OLD.client_code is not null then
    if NEW.client_code is distinct from OLD.client_code then
      raise exception 'Client ID cannot be changed after creation.';
    end if;
    return NEW;
  end if;

  -- Serialize manual and automatic allocations; the unique constraint is final enforcement.
  perform pg_catalog.pg_advisory_xact_lock(20260916, 1);
  NEW.client_code := nullif(upper(btrim(NEW.client_code)), '');
  if NEW.client_code is null then
    loop
      serial_value := nextval('public.portal_client_code_seq'::regclass)::text;
      NEW.client_code := 'AB-' || lpad(serial_value, greatest(6, length(serial_value)), '0');
      exit when not exists (
        select 1 from public.portal_clients where client_code = NEW.client_code
      );
    end loop;
  end if;
  return NEW;
end;
$$;
revoke all on function public.assign_portal_client_code() from public, anon, authenticated;
create trigger assign_client_code before insert or update of client_code
on public.portal_clients for each row execute function public.assign_portal_client_code();

update public.portal_clients set client_code = null where client_code is null;
alter table public.portal_clients alter column client_code set not null;
alter table public.portal_clients add constraint portal_clients_client_code_format
  check (client_code ~ '^[A-Z0-9][A-Z0-9-]{2,31}$');
grant insert(client_code) on public.portal_clients to authenticated;

commit;
