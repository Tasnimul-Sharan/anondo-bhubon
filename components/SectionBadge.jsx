export default function SectionBadge({ children, className = "" }) {
  return (
    <span
      className={`mb-4 inline-flex rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-primary ${className}`}
    >
      {children}
    </span>
  );
}
