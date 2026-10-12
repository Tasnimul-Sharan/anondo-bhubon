# Anondo Bhubon Client Portal

## Included

- `/login`: shared administrator/client login, password recovery and account activation.
- `/admin`: paginated client directory, profile editing, account access invitations, property assignment, construction milestones, draft/published updates and private photos/videos.
- `/portal`: the signed-in client's own profile, property progress and published media.
- `/portal/reset-password`: invited clients choose their password; existing clients recover access.
- Client IDs: leave blank for `AB-000001`-style automatic allocation, or enter a unique 3-32 character ID using letters, numbers and hyphens. IDs are normalized to uppercase and fixed after creation. They are references, not login credentials.
- Property types: Luxury Villa, Apartment, Condominium and Residential Plot. The internal `portal_villas` table stores all property types; UI labels use Properties.

Payments, documents, public registration and administrative MFA are not included. No real accounts, credentials or default passwords are bundled.

## Preview Before Connecting Services

Run `npm run dev -- --port 3001`, then open:

- http://localhost:3001/login
- http://localhost:3001/admin?preview=1
- http://localhost:3001/portal?preview=1

Previews use fictional sample records held in page memory. Changes reset on refresh and are not shared between the admin/client preview pages. Sample pictures are labeled architectural references, not actual construction evidence. Invitations and uploads make no external requests in preview. Preview is disabled in production even with `?preview=1`.

## 1. Supabase

Use a **separate Supabase project for Anondo Bhubon**, not the Rosemont project. Do not reuse Rosemont's user records or service credentials.

Run these SQL files in order, once each, in the new project's SQL editor:

1. `supabase/migrations/202609150001_owner_portal.sql`
2. `supabase/migrations/202609160001_client_codes.sql`

The second migration backfills IDs for any profiles already created. Do not rerun the first migration against an existing installation.

Disable public signup, enable email/password authentication, configure your SMTP sender and verify the sending domain. Set the authentication Site URL to the production domain. Allow only the exact production `/portal/reset-password` URL and the required localhost equivalent for testing. Set minimum password length to 12 characters.

Create the first administrator through Supabase Authentication, copy that user's UUID and run:

```sql
insert into public.portal_admins(user_id)
values ('REPLACE_WITH_ADMIN_AUTH_USER_UUID');
```

Only trusted database operators can grant this role. User metadata cannot grant administrative access. Clients are invited through the admin dashboard; the invitation trigger links their identity to their pre-created email/profile.

## 2. Cloudinary

Create an Image and Video API account and configure its cloud name, API key and API secret on the server. Uploads use signed, non-overwriting, authenticated assets under `anondo-bhubon-private/`. Do not change their delivery type to public to solve a viewing issue.

Supported uploads: JPG, PNG and WebP up to 10 MB; MP4, WebM and MOV up to 50 MB. MP4 is preferable for broad playback support. Up to eight files can be selected per upload. The server verifies uploaded asset metadata before marking media ready.

The API first checks the viewer's Supabase JWT and row-level access, then creates a five-minute private media URL. A recipient can use a copied URL until it expires; already downloaded media cannot be revoked. This is access control, not DRM. Private-download delivery is not a high-volume CDN streaming solution. Validate playback, seeking, expiry and delivery costs with the configured account before launch.

If upload verification fails, inspect the pending record and Cloudinary asset before retrying. A trusted operator should periodically clean up incomplete uploads.

## 3. Environment

Variable names are in `config/portal.env.example`. Add values to the existing `.env.local` without replacing unrelated settings. Do not put secrets in chat or source control.

Browser-visible: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` (the project's anon or publishable key).

Server-only: `SUPABASE_SERVICE_ROLE_KEY`, `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`, `PORTAL_SITE_URL`.

Set `PORTAL_SITE_URL=https://www.anondobhubon.com` for production and set matching Supabase redirect URLs. Rebuild after changing public environment variables. Never expose the service-role or Cloudinary secret keys through `NEXT_PUBLIC_*` variables.

## 4. Daily Workflow

1. Sign in as administrator, add a client and verify the email address. Leave Client ID blank or enter a unique reference.
2. Send the invitation using the mail action. For an already-linked account this requests an account-access email. Existing unrelated Auth accounts need trusted manual reconciliation.
3. Open the client's Properties action. Add the property type, number, block, size, progress, construction stage and estimated handover.
4. Open View progress, create an update, attach photos/videos and publish when ready. Drafts and pending media are hidden from clients.
5. Clients set a password from the invitation and sign in to see only their own data. Deactivating the profile revokes its data access.

Profile identity email, client ID and property assignment are not editable in the forms after creation. Ownership transfers require a verified administrative procedure.

## Security and Capacity

Database RLS enforces owner isolation, active account status and publication rules. Administrative API writes require a validated session and database admin membership. Client data uses `no-store` responses, noindex metadata and frame protection. The public site layout, analytics and translation UI do not mount on portal pages.

Client lists and API results are paginated at 20 records. Embedded PostgreSQL tests exercise over 1,500 client records. This is not a concurrency/load test or a guarantee for 1,500 simultaneous users. Plan production email, backups, hosting and media bandwidth for actual usage; check providers' current plans before selecting a free tier. Videos can exceed a free allowance even with modest viewing.

## Verification

```sh
npm run test:portal
npm run build
```

Browser tests use Playwright and a running development server. Install a browser with `npx playwright install chromium`, or set `PORTAL_BROWSER_CHANNEL=chrome` to use installed Chrome. Set `PORTAL_TEST_URL=http://localhost:3001` before `npm run test:portal:browser`. Screenshots are written under `.next/portal-qa`. The tests use only fictional preview data and never send invitations or upload to Cloudinary.

Before production, verify real admin/client logins, invitation and reset emails, two-client isolation, active/inactive profiles, image/video uploads, playback and expired URLs. Test that client A cannot query client B's IDs through Supabase directly. Disable public signup, verify SMTP, confirm environment isolation from Rosemont, and configure backups and usage alerts. Do not deploy the development server.

Live Supabase, SMTP and Cloudinary verification requires the accounts and credentials. Until then the portal is setup-ready, not a connected production system.

### Dependency audit at implementation

The 12 October 2026 `npm audit` reported 34 dependency vulnerabilities (including 2 critical). Existing framework and supporting packages, including Next.js, need a reviewed security update before production rollout. This portal change does not perform a broad dependency upgrade or run `npm audit fix --force`. Rerun the audit after updates and repeat the full build and tests.
