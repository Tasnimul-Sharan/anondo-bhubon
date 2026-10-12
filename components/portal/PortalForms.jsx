import { cloneElement, useEffect, useId, useState } from "react";
import { FiCheck, FiUploadCloud } from "react-icons/fi";
import {
  VILLA_STAGES,
  PROPERTY_TYPES,
  MAX_IMAGE_BYTES,
  MAX_VIDEO_BYTES,
} from "@/lib/portal/constants";
import { portalRequest } from "@/lib/portal/browser";
import styles from "./Portal.module.css";

export function Field({ label, children, ...props }) {
  const id = useId();
  return (
    <div className={styles.field}>
      <label htmlFor={id}>{label}</label>
      {children ? (
        typeof children === "function" ? (
          children(id)
        ) : (
          cloneElement(children, { id })
        )
      ) : (
        <input id={id} {...props} />
      )}
    </div>
  );
}

export default function PortalForm({
  kind,
  item,
  clientId,
  villaId,
  onSave,
  onClose,
  clients,
  searchClients,
}) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [matches, setMatches] = useState(clients || []);
  const [search, setSearch] = useState("");
  useEffect(() => {
    if (kind !== "villa" || !searchClients) return;
    let alive = true;
    const timer = setTimeout(() => {
      searchClients(search)
        .then((rows) => {
          if (alive) setMatches(rows);
        })
        .catch(() => {
          if (alive) setError("Could not search clients. Please try again.");
        });
    }, 300);
    return () => {
      alive = false;
      clearTimeout(timer);
    };
  }, [search, kind, searchClients]);
  async function submit(event) {
    event.preventDefault();
    if (busy) return;
    const values = Object.fromEntries(new FormData(event.currentTarget));
    setBusy(true);
    setError("");
    try {
      if (kind === "villa") {
        values.progress = Number(values.progress);
        values.handover_date = values.handover_date || null;
      }
      if (kind === "update") {
        values.villa_id = villaId || item.villa_id;
        values.published = item?.published || false;
      }
      await onSave(values);
      onClose();
    } catch (e) {
      setError(e.message);
    } finally {
      setBusy(false);
    }
  }
  return (
    <form className={styles.form} onSubmit={submit}>
      <fieldset disabled={busy}>
        {kind === "client" && (
          <div className={styles.formGrid}>
            <Field
              label={item ? "Client ID" : "Client ID (optional)"}
              name={item ? undefined : "client_code"}
              readOnly={Boolean(item)}
              defaultValue={item?.client_code}
              placeholder="Auto-generated if left blank"
              minLength={3}
              maxLength={32}
              pattern="[A-Za-z0-9][A-Za-z0-9\-]{2,31}"
              title="3-32 letters, numbers or hyphens, starting with a letter or number"
              autoComplete="off"
            />
            <Field
              label="Full name"
              name="full_name"
              required
              minLength={2}
              maxLength={120}
              defaultValue={item?.full_name}
              autoComplete="name"
            />
            <Field
              label="Email address"
              name={item ? undefined : "email"}
              type="email"
              required
              readOnly={Boolean(item)}
              maxLength={254}
              defaultValue={item?.email}
              autoComplete="email"
            />
            <Field
              label="Phone number"
              name="phone"
              type="tel"
              maxLength={40}
              defaultValue={item?.phone}
              autoComplete="tel"
            />
            <Field
              label="Country"
              name="country"
              required
              minLength={2}
              maxLength={100}
              defaultValue={item?.country || "Bangladesh"}
              autoComplete="country-name"
            />
            <Field
              label="Occupation"
              name="occupation"
              maxLength={120}
              defaultValue={item?.occupation}
            />
            <Field
              label="Emergency contact"
              name="emergency_contact"
              maxLength={200}
              defaultValue={item?.emergency_contact}
            />
            <Field label="Address">
              <textarea
                name="address"
                rows={3}
                maxLength={500}
                defaultValue={item?.address}
                autoComplete="street-address"
              />
            </Field>
            <Field label="Account status">
              <select name="status" defaultValue={item?.status || "active"}>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </Field>
          </div>
        )}
        {kind === "villa" && (
          <div className={styles.formGrid}>
            {!clientId && !item?.client_id && (
              <Field
                label="Find client"
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by client ID, name or email"
              />
            )}
            {clientId || item?.client_id ? (
              <input
                type="hidden"
                name="client_id"
                value={clientId || item.client_id}
              />
            ) : (
              <Field label="Assign to client">
                <select name="client_id" required defaultValue="">
                  <option value="" disabled>
                    Select a client
                  </option>
                  {matches.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.client_code} - {c.full_name} ({c.email})
                    </option>
                  ))}
                </select>
              </Field>
            )}
            <Field
              label="Property number"
              name="villa_number"
              required
              maxLength={60}
              defaultValue={item?.villa_number}
              placeholder="A-012"
            />
            <Field label="Property type">
              <select
                name="villa_type"
                defaultValue={item?.villa_type || "Luxury Villa"}
              >
                {PROPERTY_TYPES.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </Field>
            <Field
              label="Block / avenue"
              name="block"
              maxLength={60}
              defaultValue={item?.block}
            />
            <Field
              label="Plot size"
              name="plot_size"
              maxLength={80}
              defaultValue={item?.plot_size}
              placeholder="10 Katha"
            />
            <Field label="Construction stage">
              <select name="stage" defaultValue={item?.stage || "Reserved"}>
                {VILLA_STAGES.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </Field>
            <Field
              label="Progress (%)"
              name="progress"
              type="number"
              required
              min={0}
              max={100}
              step={1}
              defaultValue={item?.progress || 0}
            />
            <Field
              label="Estimated handover"
              name="handover_date"
              type="date"
              defaultValue={item?.handover_date || ""}
            />
          </div>
        )}
        {kind === "update" && (
          <>
            <Field
              label="Update title"
              name="title"
              required
              minLength={2}
              maxLength={160}
              defaultValue={item?.title}
            />
            <Field label="Progress report">
              <textarea
                name="body"
                required
                minLength={2}
                maxLength={5000}
                rows={6}
                defaultValue={item?.body}
              />
            </Field>
          </>
        )}
        {error && (
          <p className={styles.error} role="alert">
            {error}
          </p>
        )}
        <div className={styles.formActions}>
          <button
            type="button"
            className={styles.secondaryButton}
            onClick={onClose}
          >
            Cancel
          </button>
          <button type="submit" className={styles.primaryButton}>
            <FiCheck />
            {busy
              ? "Saving..."
              : kind === "update" && !item
                ? "Save draft"
                : "Save changes"}
          </button>
        </div>
      </fieldset>
    </form>
  );
}

export function UploadForm({ update, demo, onDone }) {
  const [files, setFiles] = useState([]);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const [caption, setCaption] = useState("");
  async function upload(event) {
    event.preventDefault();
    if (busy || !files.length) return;
    if (demo) {
      setMessage(
        "Uploads become available after Cloudinary is connected. No files have been uploaded.",
      );
      return;
    }
    const selected = [...files];
    if (selected.length > 8) {
      setMessage("Choose up to 8 files per upload.");
      return;
    }
    const accepted = [
      "image/jpeg",
      "image/png",
      "image/webp",
      "video/mp4",
      "video/webm",
      "video/quicktime",
    ];
    for (const file of selected) {
      if (
        !accepted.includes(file.type) ||
        file.size >
          (file.type.startsWith("image/") ? MAX_IMAGE_BYTES : MAX_VIDEO_BYTES)
      ) {
        setMessage(
          `${file.name}: use JPG, PNG, WebP (up to 10 MB) or MP4, WebM, MOV (up to 50 MB).`,
        );
        return;
      }
    }
    setBusy(true);
    let completed = 0;
    try {
      for (const file of selected) {
        setMessage(
          `Uploading ${completed + 1} of ${selected.length}: ${file.name}`,
        );
        const resource_type = file.type.startsWith("video/")
          ? "video"
          : "image";
        const signed = await portalRequest("upload", {
          method: "POST",
          body: JSON.stringify({
            update_id: update.id,
            resource_type,
            caption: caption || file.name,
          }),
        });
        const data = new FormData();
        Object.entries(signed.params).forEach(([key, value]) =>
          data.append(key, String(value)),
        );
        data.append("api_key", signed.api_key);
        data.append("signature", signed.signature);
        data.append("file", file);
        const response = await fetch(signed.url, {
          method: "POST",
          body: data,
        });
        if (!response.ok)
          throw new Error(`Could not upload ${file.name}. Please try again.`);
        await portalRequest("complete-upload", {
          method: "POST",
          body: JSON.stringify({ media_id: signed.media_id }),
        });
        completed += 1;
        setFiles((current) => current.filter((f) => f !== file));
      }
      await onDone();
    } catch (e) {
      setMessage(`${completed} file(s) uploaded. ${e.message}`);
    } finally {
      setBusy(false);
    }
  }
  return (
    <form className={styles.form} onSubmit={upload}>
      <fieldset disabled={busy}>
        <label className={styles.uploadZone}>
          <FiUploadCloud />
          <strong>Photos & videos</strong>
          <span>Photos up to 10 MB. Videos up to 50 MB.</span>
          <input
            type="file"
            multiple
            accept="image/jpeg,image/png,image/webp,video/mp4,video/webm,video/quicktime"
            onChange={(e) => setFiles(Array.from(e.target.files))}
          />
        </label>
        {files.length > 0 && (
          <ul className={styles.fileList}>
            {files.map((f) => (
              <li key={`${f.name}-${f.lastModified}`}>
                {f.name} <span>{(f.size / 1024 / 1024).toFixed(1)} MB</span>
              </li>
            ))}
          </ul>
        )}
        <Field
          label="Caption"
          maxLength={200}
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          placeholder="e.g. First-floor slab inspection"
        />
        {message && (
          <p role="status" className={styles.notice}>
            {message}
          </p>
        )}
        <div className={styles.formActions}>
          <button
            className={styles.primaryButton}
            type="submit"
            disabled={!files.length || busy}
          >
            <FiUploadCloud />
            {busy ? "Uploading..." : "Upload media"}
          </button>
        </div>
      </fieldset>
    </form>
  );
}
