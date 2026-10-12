import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  FiArrowLeft,
  FiArrowRight,
  FiCheckCircle,
  FiChevronLeft,
  FiChevronRight,
  FiEdit2,
  FiGrid,
  FiHome,
  FiImage,
  FiLogOut,
  FiMail,
  FiPlus,
  FiSearch,
  FiShield,
  FiUploadCloud,
  FiUser,
  FiUsers,
} from "react-icons/fi";
import {
  portalAuth,
  portalConfigured,
  portalRequest,
} from "@/lib/portal/browser";
import { demoData, villaRender } from "@/lib/portal/demo";
import { PAGE_SIZE, VILLA_STAGES } from "@/lib/portal/constants";
import { createClientSchema } from "@/lib/portal/validation";
import PortalDialog from "./PortalDialog";
import PortalForm, { UploadForm } from "./PortalForms";
import { MediaTile, MediaViewer } from "./PortalMedia";
import styles from "./Portal.module.css";

const date = (value) =>
  value
    ? new Date(
        value.length === 10 ? `${value}T12:00:00` : value,
      ).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
        timeZone: "Asia/Dhaka",
      })
    : "To be confirmed";
const emptyData = {
  clients: [],
  villas: [],
  updates: [],
  total: 0,
  summary: {},
};
const initials = (name) =>
  (name || "Anondo Bhubon")
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("");

export default function OwnerPortal({ role, preview }) {
  const admin = role === "admin";
  const router = useRouter();
  const [tab, setTab] = useState("overview");
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [data, setData] = useState(emptyData);
  const [sample, setSample] = useState(demoData);
  const [authorized, setAuthorized] = useState(preview);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [modal, setModal] = useState(null);
  const [client, setClient] = useState(null);
  const [villa, setVilla] = useState(null);
  const [pending, setPending] = useState("");
  const generation = useRef(0);
  const nextPreviewClientCode = useRef(4);

  useEffect(() => {
    if (preview) return;
    if (!portalConfigured()) {
      router.replace("/login");
      return;
    }
    let active = true;
    portalRequest("session")
      .then((result) => {
        if (!active) return;
        if (result.role !== role)
          router.replace(result.role === "admin" ? "/admin" : "/portal");
        else setAuthorized(true);
      })
      .catch(() => {
        if (active) router.replace("/login");
      });
    const {
      data: { subscription },
    } = portalAuth().auth.onAuthStateChange((event) => {
      if (event === "SIGNED_OUT") {
        generation.current++;
        setData(emptyData);
        setAuthorized(false);
        router.replace("/login");
      }
    });
    return () => {
      active = false;
      subscription.unsubscribe();
    };
  }, [preview, role, router]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearch(query);
      setPage(1);
    }, 300);
    return () => clearTimeout(timer);
  }, [query]);

  const load = useCallback(async () => {
    if (!authorized) return;
    const request = ++generation.current;
    setLoading(true);
    setError("");
    try {
      let next;
      if (preview) {
        const ownerClients = admin
          ? sample.clients
          : sample.clients.filter(
              (c) => c.id === "demo-client-1" && c.status === "active",
            );
        const ownerIds = ownerClients.map((c) => c.id);
        const allVillas = sample.villas.filter((v) =>
          ownerIds.includes(v.client_id),
        );
        const ownerVillaIds = allVillas.map((v) => v.id);
        const allUpdates = sample.updates.filter(
          (u) => ownerVillaIds.includes(u.villa_id) && (admin || u.published),
        );
        const clients = ownerClients.filter((c) =>
          `${c.client_code} ${c.full_name} ${c.email}`
            .toLowerCase()
            .includes(search.toLowerCase()),
        );
        const villas = allVillas
          .filter((v) => !client || v.client_id === client.id)
          .map((v) => ({
            ...v,
            client: {
              full_name: sample.clients.find((c) => c.id === v.client_id)
                ?.full_name,
            },
          }));
        const updates = allUpdates
          .filter((u) => !villa || u.villa_id === villa.id)
          .map((u) => ({
            ...u,
            villa: {
              villa_number: sample.villas.find((v) => v.id === u.villa_id)
                ?.villa_number,
            },
          }));
        const rows =
          tab === "clients" ? clients : tab === "updates" ? updates : villas;
        const slice = (list) =>
          list.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
        next = {
          clients: slice(clients),
          villas: slice(villas),
          updates: slice(updates),
          total: rows.length,
          summary: {
            clients: ownerClients.length,
            villas: allVillas.length,
            updates: allUpdates.filter((u) => u.published).length,
            media: allUpdates.flatMap((u) => u.media).length,
          },
        };
      } else {
        const [cs, vs, us, summary] = await Promise.all([
          portalRequest(
            `clients?page=${tab === "clients" ? page : 1}&q=${encodeURIComponent(tab === "clients" ? search : "")}`,
          ),
          portalRequest(
            `villas?page=${tab === "villas" ? page : 1}${client ? `&client_id=${client.id}` : ""}`,
          ),
          portalRequest(
            `updates?page=${tab === "updates" ? page : 1}${villa ? `&villa_id=${villa.id}` : ""}`,
          ),
          portalRequest("summary"),
        ]);
        next = {
          clients: cs.rows,
          villas: vs.rows,
          updates: us.rows,
          total:
            tab === "clients"
              ? cs.total
              : tab === "updates"
                ? us.total
                : vs.total,
          summary,
        };
      }
      if (request === generation.current) setData(next);
    } catch (e) {
      if (request === generation.current) setError(e.message);
    } finally {
      if (request === generation.current) setLoading(false);
    }
  }, [admin, authorized, client, page, preview, sample, search, tab, villa]);
  useEffect(() => {
    load();
    return () => {
      generation.current++;
    };
  }, [load]);

  const searchClients = useCallback(
    async (term) =>
      preview
        ? sample.clients.filter((c) =>
            `${c.client_code} ${c.full_name} ${c.email}`
              .toLowerCase()
              .includes(term.toLowerCase()),
          )
        : (await portalRequest(`clients?q=${encodeURIComponent(term)}`)).rows,
    [preview, sample.clients],
  );

  function navigate(nextTab) {
    setTab(nextTab);
    setPage(1);
    setClient(null);
    setVilla(null);
    setQuery("");
  }
  function viewVillas(c) {
    setClient(c);
    setVilla(null);
    setTab("villas");
    setPage(1);
  }
  function viewUpdates(v) {
    setVilla(v);
    setClient(null);
    setTab("updates");
    setPage(1);
  }
  async function save(kind, values, item) {
    const collection = {
      client: "clients",
      villa: "villas",
      update: "updates",
    }[kind];
    if (preview) {
      if (kind === "client" && !item) {
        const parsed = createClientSchema.safeParse(values);
        if (!parsed.success) throw new Error(parsed.error.issues[0].message);
        values = parsed.data;
        if (!values.client_code) {
          do {
            values.client_code = `AB-${String(nextPreviewClientCode.current++).padStart(6, "0")}`;
          } while (sample.clients.some((c) => c.client_code === values.client_code));
        }
        if (sample.clients.some((c) => c.client_code === values.client_code))
          throw new Error("This client ID already exists. Please use a different ID.");
      }
      if (
        !item &&
        kind === "client" &&
        sample.clients.some(
          (c) => c.email.toLowerCase() === values.email.toLowerCase(),
        )
      )
        throw new Error("This email already exists.");
      if (
        kind === "villa" &&
        sample.villas.some(
          (v) => v.villa_number === values.villa_number && v.id !== item?.id,
        )
      )
        throw new Error("This property number already exists.");
      const row = {
        id: `demo-${crypto.randomUUID()}`,
        created_at: new Date().toISOString(),
        media: [],
        ...item,
        ...values,
        updated_at: new Date().toISOString(),
      };
      setSample((current) => ({
        ...current,
        [collection]: item
          ? current[collection].map((r) => (r.id === item.id ? row : r))
          : [row, ...current[collection]],
      }));
    } else {
      await portalRequest(`${collection}${item ? `/${item.id}` : ""}`, {
        method: item ? "PATCH" : "POST",
        body: JSON.stringify(values),
      });
      await load();
    }
    setNotice(
      preview
        ? "Preview updated. Sample changes reset when this page is refreshed."
        : kind === "update" && !item
          ? "Draft saved. Add photos or videos, then publish when ready."
          : "Changes saved successfully.",
    );
  }
  async function invite(c) {
    if (pending) return;
    setPending(c.id);
    setError("");
    try {
      if (preview)
        setNotice(
          "Email invitations become available after Supabase and SMTP are connected. No email has been sent.",
        );
      else {
        const result = await portalRequest(`clients/${c.id}/invite`, {
          method: "POST",
          body: "{}",
        });
        setNotice(result.message);
        await load();
      }
    } catch (e) {
      setError(e.message);
    } finally {
      setPending("");
    }
  }
  async function togglePublish(update) {
    if (pending) return;
    setPending(update.id);
    try {
      await save(
        "update",
        {
          villa_id: update.villa_id,
          title: update.title,
          body: update.body,
          published: !update.published,
        },
        update,
      );
    } catch (e) {
      setError(e.message);
    } finally {
      setPending("");
    }
  }
  async function logout() {
    if (preview) {
      router.push("/login");
      return;
    }
    const { error: signOutError } = await portalAuth().auth.signOut();
    if (signOutError) setError("Unable to sign out. Please try again.");
    else {
      setData(emptyData);
      router.replace("/login");
    }
  }

  const profile = data.clients[0];
  const tabs = useMemo(
    () => [
      { id: "overview", label: "Overview", icon: FiGrid },
      ...(admin ? [{ id: "clients", label: "Clients", icon: FiUsers }] : []),
      { id: "villas", label: admin ? "Properties" : "My properties", icon: FiHome },
      { id: "updates", label: "Progress & media", icon: FiImage },
      ...(!admin ? [{ id: "profile", label: "My profile", icon: FiUser }] : []),
    ],
    [admin],
  );
  const title =
    tab === "overview"
      ? admin
        ? "Township overview"
        : `Welcome${profile ? `, ${profile.full_name.split(" ")[0]}` : ""}`
      : tab === "clients"
        ? "Client directory"
        : tab === "villas"
          ? client
            ? `${client.full_name}'s properties`
            : admin
              ? "Property register"
              : "Your properties"
          : tab === "profile"
            ? "Your profile"
            : villa
              ? `Property ${villa.villa_number} updates`
              : "Progress & media";

  function villaCard(v) {
    return (
      <article className={styles.villaCard} key={v.id}>
        <div className={styles.villaImage}>
          <Image
            src={villaRender(v.villa_type)}
            alt={`${v.villa_type} architectural reference`}
            fill
            sizes="(max-width: 700px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <span>Architectural reference</span>
        </div>
        <div className={styles.villaBody}>
          <div className={styles.row}>
            <span className={styles.eyebrow}>{v.villa_type}</span>
            <span className={styles.badge}>{v.stage}</span>
          </div>
          <h3>Property {v.villa_number}</h3>
          <p className={styles.muted}>
            {[v.block, v.plot_size].filter(Boolean).join(" / ") ||
              "Details pending"}
          </p>
          {admin && (
            <p className={styles.ownerLine}>
              <FiUser />
              {v.client?.full_name || "Assigned client"}
            </p>
          )}
          <div className={styles.progressLabel}>
            <span>Construction progress</span>
            <strong>{v.progress}%</strong>
          </div>
          <progress
            className={styles.progress}
            max="100"
            value={v.progress}
            aria-label={`Property ${v.villa_number} completion`}
          />
          <div className={styles.handover}>
            <span>Estimated handover</span>
            <strong>{date(v.handover_date)}</strong>
          </div>
          <div className={styles.cardActions}>
            <button
              className={styles.textButton}
              onClick={() => viewUpdates(v)}
            >
              View progress <FiArrowRight />
            </button>
            {admin && (
              <button
                className={styles.iconButton}
                onClick={() => setModal({ kind: "villa", item: v })}
                title="Edit property"
                aria-label={`Edit property ${v.villa_number}`}
              >
                <FiEdit2 />
              </button>
            )}
          </div>
        </div>
      </article>
    );
  }

  function updateCard(u) {
    const media = u.media?.filter((m) => m.ready) || [];
    return (
      <article className={styles.update} key={u.id}>
        <div className={styles.updateMarker}>
          <FiCheckCircle />
        </div>
        <div className={styles.updateContent}>
          <div className={styles.row}>
            <div className={styles.updateMeta}>
              <span>Property {u.villa?.villa_number || villa?.villa_number}</span>
              <time dateTime={u.created_at}>{date(u.created_at)}</time>
            </div>
            {admin && (
              <span className={u.published ? styles.greenBadge : styles.badge}>
                {u.published ? "Published" : "Draft"}
              </span>
            )}
          </div>
          <h3>{u.title}</h3>
          <p className={styles.updateText}>{u.body}</p>
          {media.length > 0 && (
            <div className={styles.mediaGrid}>
              {media.map((m) => (
                <MediaTile
                  key={m.id}
                  item={m}
                  onOpen={(item) => setModal({ kind: "media", item })}
                />
              ))}
            </div>
          )}
          {admin && (
            <div className={styles.updateActions}>
              <button
                className={styles.secondaryButton}
                onClick={() => setModal({ kind: "upload", item: u })}
              >
                <FiUploadCloud /> Add media
              </button>
              <button
                className={styles.iconButton}
                onClick={() => setModal({ kind: "update", item: u })}
                aria-label={`Edit ${u.title}`}
                title="Edit update"
              >
                <FiEdit2 />
              </button>
              <button
                disabled={Boolean(pending)}
                className={styles.textButton}
                onClick={() => togglePublish(u)}
              >
                {pending === u.id
                  ? "Saving..."
                  : u.published
                    ? "Move to draft"
                    : "Publish update"}
                <FiArrowRight />
              </button>
            </div>
          )}
        </div>
      </article>
    );
  }

  return (
    <div className={styles.portal}>
      <Head>
        <title>
          {`${admin ? "Admin Dashboard" : "Client Dashboard"} | Anondo Bhubon`}
        </title>
        <meta name="robots" content="noindex,nofollow,noarchive" />
        <meta name="referrer" content="no-referrer" />
      </Head>
      <aside className={styles.sidebar}>
        <Link href="/" className={styles.brand} aria-label="Anondo Bhubon home">
          <Image
            src="/anondo-bhubon-updated-logo.png"
            alt="Anondo Bhubon"
            fill
            sizes="(max-width: 640px) 240px, 300px"
            priority
            className={styles.brandLogo}
          />
        </Link>
        <div className={styles.workspaceLabel}>
          {admin ? "Township management" : "Private owner access"}
        </div>
        <nav aria-label="Portal navigation" className={styles.nav}>
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => navigate(t.id)}
              className={tab === t.id ? styles.navActive : ""}
              aria-current={tab === t.id ? "page" : undefined}
            >
              <t.icon />
              {t.label}
              {t.id === "clients" && <span>{data.summary.clients || 0}</span>}
            </button>
          ))}
        </nav>
        <div className={styles.sidebarBottom}>
          <Link href="/contact">
            <FiMail />
            Contact project team
          </Link>
          <Link href="/">
            <FiArrowLeft />
            Back to website
          </Link>
          <div className={styles.account}>
            <span className={styles.avatar}>
              {admin ? "AD" : initials(profile?.full_name)}
            </span>
            <div>
              <strong>
                {admin ? "Administrator" : profile?.full_name || "Property owner"}
              </strong>
              <small>{admin ? "Township operations" : "Owner account"}</small>
            </div>
            <button
              type="button"
              className={styles.iconButton}
              onClick={logout}
              title="Sign out"
              aria-label="Sign out"
            >
              <FiLogOut />
            </button>
          </div>
        </div>
      </aside>
      <div className={styles.main}>
        <header className={styles.topbar}>
          <span>
            <FiShield />
            {admin ? "Administration" : "Owner portal"}
          </span>
          <span className={styles.topbarRight}>
            Anondo Bhubon{" "}
            <span className={styles.avatarSmall}>
              {admin ? "AD" : initials(profile?.full_name)}
            </span>
          </span>
        </header>
        {preview && (
          <div className={styles.previewBanner}>
            <span>
              Sample preview. No live client records. Changes are temporary.
            </span>
            <Link href={admin ? "/portal?preview=1" : "/admin?preview=1"}>
              View {admin ? "client" : "admin"} portal <FiArrowRight />
            </Link>
          </div>
        )}
        <main className={styles.content}>
          <div className={styles.pageHeading}>
            <div>
              <p className={styles.eyebrow}>
                {admin ? "Township operations" : "Your place at Anondo Bhubon"}
              </p>
              <h1>{title}</h1>
              <p className={styles.muted}>
                {tab === "overview"
                  ? admin
                    ? "A clear view of your clients, residences and project communications."
                    : "Follow the progress of your home, with every update in one place."
                  : tab === "clients"
                    ? "Owner profiles, account access and assigned residences."
                    : tab === "updates"
                      ? "Site reports, photographs and videos from the project team."
                      : ""}
              </p>
            </div>
            {admin && tab !== "updates" && (
              <button
                className={styles.primaryButton}
                onClick={() =>
                  setModal({
                    kind: tab === "villas" ? "villa" : "client",
                    clientId: client?.id,
                  })
                }
              >
                <FiPlus />
                {tab === "villas" ? "Add property" : "Add client"}
              </button>
            )}
            {admin && tab === "updates" && villa && (
              <button
                className={styles.primaryButton}
                onClick={() => setModal({ kind: "update", villaId: villa.id })}
              >
                <FiPlus />
                New update
              </button>
            )}
          </div>
          {notice && (
            <div className={styles.notice} role="status">
              <span>{notice}</span>
              <button
                className={styles.textButton}
                onClick={() => setNotice("")}
              >
                Dismiss
              </button>
            </div>
          )}
          {error && (
            <div className={styles.error} role="alert">
              {error}
              <button className={styles.textButton} onClick={load}>
                Try again
              </button>
            </div>
          )}
          {!authorized || (loading && data === emptyData) ? (
            <div className={styles.loading} role="status">
              <span className={styles.spinner} />
              Loading your workspace...
            </div>
          ) : (
            <>
              {tab === "overview" && (
                <>
                  <div className={styles.metrics}>
                    {(admin
                      ? [
                          ["Clients", data.summary.clients, FiUsers],
                          ["Assigned properties", data.summary.villas, FiHome],
                          [
                            "Published updates",
                            data.summary.updates,
                            FiCheckCircle,
                          ],
                          ["Photos & videos", data.summary.media, FiImage],
                        ]
                      : [
                          ["My properties", data.summary.villas, FiHome],
                          [
                            "Project updates",
                            data.summary.updates,
                            FiCheckCircle,
                          ],
                          ["Photos & videos", data.summary.media, FiImage],
                        ]
                    ).map(([label, value, Icon]) => (
                      <div className={styles.metric} key={label}>
                        <div>
                          <span>{label}</span>
                          <strong>{value || 0}</strong>
                        </div>
                        <Icon />
                      </div>
                    ))}
                  </div>
                  <div className={styles.sectionHeading}>
                    <h2>
                      {admin ? "Residences at a glance" : "Your residences"}
                    </h2>
                    <button
                      className={styles.textButton}
                      onClick={() => navigate("villas")}
                    >
                      View all <FiArrowRight />
                    </button>
                  </div>
                  {data.villas.length ? (
                    <div className={styles.villaGrid}>
                      {data.villas.slice(0, 3).map(villaCard)}
                    </div>
                  ) : (
                    <Empty
                      text={
                        admin
                          ? "No properties assigned yet. Add a client to get started."
                          : "Your property assignment will appear here once the project team has confirmed it."
                      }
                    />
                  )}
                  <div className={styles.sectionHeading}>
                    <h2>Latest project updates</h2>
                    <button
                      className={styles.textButton}
                      onClick={() => navigate("updates")}
                    >
                      All updates <FiArrowRight />
                    </button>
                  </div>
                  {data.updates.length ? (
                    data.updates.slice(0, 3).map(updateCard)
                  ) : (
                    <Empty text="No project updates available yet." />
                  )}
                </>
              )}
              {tab === "clients" && (
                <>
                  <div className={styles.tableToolbar}>
                    <label className={styles.search}>
                      <FiSearch />
                      <input
                        type="search"
                        aria-label="Search clients by ID, name or email"
                        placeholder="Search client ID, name or email"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                      />
                    </label>
                    <span className={styles.muted}>{data.total} clients</span>
                  </div>
                  <div className={styles.tableWrap}>
                    <table className={styles.table}>
                      <thead>
                        <tr>
                          <th>Client</th>
                          <th>Contact</th>
                          <th>Location</th>
                          <th>Account</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.clients.map((c) => (
                          <tr key={c.id}>
                            <td>
                              <button
                                className={styles.clientName}
                                onClick={() =>
                                  setModal({ kind: "profile", item: c })
                                }
                              >
                                <span className={styles.avatar}>
                                  {initials(c.full_name)}
                                </span>
                                <span>
                                  <strong>{c.full_name}</strong>
                                  <small>Client ID: {c.client_code}</small>
                                  <small>Added {date(c.created_at)}</small>
                                </span>
                              </button>
                            </td>
                            <td>
                              <span>{c.email}</span>
                              <small>{c.phone || "No phone added"}</small>
                            </td>
                            <td>{c.country}</td>
                            <td>
                              <span
                                className={
                                  c.status === "active"
                                    ? styles.greenBadge
                                    : styles.badge
                                }
                              >
                                {c.status === "inactive"
                                  ? "Inactive"
                                  : c.auth_user_id
                                    ? "Connected"
                                    : "Not invited"}
                              </span>
                            </td>
                            <td>
                              <div className={styles.tableActions}>
                                <button
                                  className={styles.iconButton}
                                  title="View properties"
                                  aria-label={`View ${c.full_name}'s properties`}
                                  onClick={() => viewVillas(c)}
                                >
                                  <FiHome />
                                </button>
                                <button
                                  className={styles.iconButton}
                                  title="Edit client"
                                  aria-label={`Edit ${c.full_name}`}
                                  onClick={() =>
                                    setModal({ kind: "client", item: c })
                                  }
                                >
                                  <FiEdit2 />
                                </button>
                                <button
                                  disabled={
                                    Boolean(pending) || c.status !== "active"
                                  }
                                  className={styles.iconButton}
                                  title={
                                    c.auth_user_id
                                      ? "Send account access email"
                                      : "Invite client"
                                  }
                                  aria-label={`Send access email to ${c.full_name}`}
                                  onClick={() => invite(c)}
                                >
                                  <FiMail />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {!data.clients.length && (
                    <Empty text="No clients match your search." />
                  )}
                </>
              )}
              {tab === "villas" && (
                <>
                  {client && (
                    <button
                      className={styles.backButton}
                      onClick={() => navigate("clients")}
                    >
                      <FiArrowLeft /> Client directory
                    </button>
                  )}
                  {data.villas.length ? (
                    <div className={styles.villaGrid}>
                      {data.villas.map(villaCard)}
                    </div>
                  ) : (
                    <Empty text="No properties assigned yet." />
                  )}
                </>
              )}
              {tab === "updates" && (
                <>
                  {villa && (
                    <>
                      <button
                        className={styles.backButton}
                        onClick={() => navigate("villas")}
                      >
                        <FiArrowLeft /> All properties
                      </button>
                      <div className={styles.stagePanel}>
                        <div className={styles.row}>
                          <h2>Construction milestones</h2>
                          <strong>{villa.progress}% complete</strong>
                        </div>
                        <ol className={styles.stages}>
                          {VILLA_STAGES.map((stage, i) => (
                            <li
                              key={stage}
                              className={
                                i <= VILLA_STAGES.indexOf(villa.stage)
                                  ? styles.stageComplete
                                  : ""
                              }
                            >
                              <span>
                                {i < VILLA_STAGES.indexOf(villa.stage) ? (
                                  <FiCheckCircle />
                                ) : (
                                  String(i + 1).padStart(2, "0")
                                )}
                              </span>
                              {stage}
                            </li>
                          ))}
                        </ol>
                      </div>
                    </>
                  )}
                  {admin && !villa && (
                    <p className={styles.inlineHint}>
                      Select a residence in the property register to create its
                      next update.
                    </p>
                  )}
                  {data.updates.length ? (
                    data.updates.map(updateCard)
                  ) : (
                    <Empty
                      text={
                        admin
                          ? "No updates yet. Add a progress report for this property."
                          : "Your project team will publish progress reports here."
                      }
                    />
                  )}
                </>
              )}
              {tab === "profile" &&
                (profile ? (
                  <Profile client={profile} />
                ) : (
                  <Empty text="Your profile is not active. Please contact the project team." />
                ))}
              {["clients", "villas", "updates"].includes(tab) &&
                data.total > PAGE_SIZE && (
                  <div className={styles.pagination}>
                    <span>
                      Page {page} of {Math.ceil(data.total / PAGE_SIZE)}
                    </span>
                    <button
                      className={styles.iconButton}
                      aria-label="Previous page"
                      disabled={page === 1}
                      onClick={() => setPage((p) => p - 1)}
                    >
                      <FiChevronLeft />
                    </button>
                    <button
                      className={styles.iconButton}
                      aria-label="Next page"
                      disabled={page * PAGE_SIZE >= data.total}
                      onClick={() => setPage((p) => p + 1)}
                    >
                      <FiChevronRight />
                    </button>
                  </div>
                )}
            </>
          )}
          <footer className={styles.portalFooter}>
            <span>Anondo Bhubon</span>
            <Link href="/contact">
              Owner relations <FiArrowRight />
            </Link>
          </footer>
        </main>
      </div>
      {modal && (
        <PortalDialog
          title={
            modal.kind === "media"
              ? modal.item.caption || "Property media"
              : modal.kind === "upload"
                ? "Add photos & videos"
                : modal.kind === "profile"
                  ? "Client profile"
                  : `${modal.item ? "Edit" : "New"} ${modal.kind === "villa" ? "property" : modal.kind}`
          }
          onClose={() => {
            if (!pending) setModal(null);
          }}
          wide={modal.kind === "media"}
        >
          {modal.kind === "media" ? (
            <MediaViewer item={modal.item} />
          ) : modal.kind === "upload" ? (
            <UploadForm
              update={modal.item}
              demo={preview}
              onDone={async () => {
                setModal(null);
                setNotice("Media uploaded successfully.");
                await load();
              }}
            />
          ) : modal.kind === "profile" ? (
            <Profile client={modal.item} />
          ) : (
            <PortalForm
              kind={modal.kind}
              item={modal.item}
              clientId={modal.clientId}
              villaId={modal.villaId}
              clients={data.clients}
              searchClients={searchClients}
              onSave={(values) => save(modal.kind, values, modal.item)}
              onClose={() => setModal(null)}
            />
          )}
        </PortalDialog>
      )}
    </div>
  );
}

function Empty({ text }) {
  return (
    <div className={styles.empty}>
      <FiHome />
      <p>{text}</p>
    </div>
  );
}
function Profile({ client }) {
  return (
    <section className={styles.profile}>
      <div className={styles.profileHeading}>
        <span className={styles.avatar}>{initials(client.full_name)}</span>
        <div>
          <h2>{client.full_name}</h2>
          <p className={styles.muted}>Anondo Bhubon client</p>
        </div>
      </div>
      <dl className={styles.profileGrid}>
        {[
          ["Client ID", client.client_code],
          ["Email address", client.email],
          ["Phone number", client.phone],
          ["Country", client.country],
          ["Occupation", client.occupation],
          ["Address", client.address],
          ["Emergency contact", client.emergency_contact],
        ].map(([label, value]) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd>{value || "Not provided"}</dd>
          </div>
        ))}
      </dl>
      <Link className={styles.textButton} href="/contact">
        Request a profile update <FiArrowRight />
      </Link>
    </section>
  );
}
