import { useEffect, useRef } from "react";
import { FiX } from "react-icons/fi";
import styles from "./Portal.module.css";

export default function PortalDialog({
  title,
  onClose,
  children,
  wide = false,
}) {
  const ref = useRef(null);
  useEffect(() => {
    const dialog = ref.current;
    const previous = document.activeElement;
    dialog.showModal();
    return () => {
      dialog.close();
      previous?.focus();
    };
  }, []);
  return (
    <dialog
      ref={ref}
      aria-labelledby="portal-dialog-title"
      className={`${styles.dialog} ${wide ? styles.dialogWide : ""}`}
      onCancel={onClose}
      onClick={(e) => {
        if (e.target === ref.current) {
          const r = ref.current.getBoundingClientRect();
          if (
            e.clientX < r.left ||
            e.clientX > r.right ||
            e.clientY < r.top ||
            e.clientY > r.bottom
          )
            onClose();
        }
      }}
    >
      <div className={styles.dialogHead}>
        <h2 id="portal-dialog-title">{title}</h2>
        <button
          type="button"
          className={styles.iconButton}
          aria-label="Close dialog"
          onClick={onClose}
        >
          <FiX />
        </button>
      </div>
      {children}
    </dialog>
  );
}
