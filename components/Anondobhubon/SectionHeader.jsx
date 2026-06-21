export default function SectionHeader({
  eyebrow,
  title,
  copy,
  align = "left",
  tone = "light",
}) {
  const titleClass = `${
    align === "center" ? "section-title mx-auto" : "section-title"
  } ${tone === "dark" ? "text-white" : "text-primary"}`;

  const copyClass = `${
    align === "center" ? "section-copy mx-auto" : "section-copy"
  } ${tone === "dark" ? "text-white/70" : "text-slate-600"}`;

  return (
    <div className={align === "center" ? "mx-auto max-w-4xl text-center" : ""}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className={titleClass}>{title}</h2>
      {copy ? <p className={copyClass}>{copy}</p> : null}
    </div>
  );
}
