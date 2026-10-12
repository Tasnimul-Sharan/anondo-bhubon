import { useEffect, useRef, useState } from "react";
import { FiImage, FiPlay, FiRefreshCw } from "react-icons/fi";
import { portalRequest } from "@/lib/portal/browser";
import styles from "./Portal.module.css";

export function MediaTile({ item, onOpen }) {
  const ref = useRef(null);
  const [url, setUrl] = useState(item.demoUrl || "");
  useEffect(() => {
    if (item.demoUrl || item.resource_type === "video") return;
    let alive = true;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        observer.disconnect();
        portalRequest(`media/${item.id}`)
          .then((result) => {
            if (alive) setUrl(result.url);
          })
          .catch(() => {});
      },
      { rootMargin: "100px" },
    );
    observer.observe(ref.current);
    return () => {
      alive = false;
      observer.disconnect();
    };
  }, [item.id, item.demoUrl, item.resource_type]);
  return (
    <button
      ref={ref}
      type="button"
      className={styles.mediaTile}
      onClick={() => onOpen(item)}
      aria-label={`View ${item.caption || item.resource_type}`}
    >
      {url && item.resource_type === "image" ? (
        <img
          src={url}
          alt={item.caption || "Property progress photograph"}
          loading="lazy"
        />
      ) : item.resource_type === "video" ? (
        <FiPlay />
      ) : (
        <FiImage />
      )}
      <span>
        {item.caption ||
          (item.resource_type === "video" ? "Site video" : "Site photograph")}
      </span>
    </button>
  );
}

export function MediaViewer({ item }) {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const [retry, setRetry] = useState(0);
  useEffect(() => {
    let alive = true;
    setError("");
    setUrl("");
    if (item.demoUrl) {
      setUrl(item.demoUrl);
      return;
    }
    portalRequest(`media/${item.id}`)
      .then((result) => {
        if (alive) setUrl(result.url);
      })
      .catch((e) => {
        if (alive) setError(e.message);
      });
    return () => {
      alive = false;
    };
  }, [item.id, item.demoUrl, retry]);
  return (
    <div className={styles.viewer}>
      {error ? (
        <div className={styles.empty}>
          <p role="alert">{error}</p>
          <button
            className={styles.secondaryButton}
            onClick={() => setRetry((v) => v + 1)}
          >
            <FiRefreshCw /> Reload media
          </button>
        </div>
      ) : !url ? (
        <p role="status">Loading media...</p>
      ) : item.resource_type === "video" ? (
        <video
          src={url}
          controls
          playsInline
          preload="metadata"
          onError={() =>
            setError(
              "The video link may have expired. Reload the video to continue.",
            )
          }
        />
      ) : (
        <img
          src={url}
          alt={item.caption || "Property progress"}
          onError={() =>
            setError("The photo could not be loaded. Please try again.")
          }
        />
      )}
      <p>{item.caption}</p>
    </div>
  );
}
