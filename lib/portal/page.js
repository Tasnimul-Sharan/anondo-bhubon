export function portalPageProps({ res, query }) {
  res.setHeader("Cache-Control", "private, no-store, max-age=0");
  res.setHeader("X-Robots-Tag", "noindex, nofollow, noarchive");
  res.setHeader("Referrer-Policy", "no-referrer");
  res.setHeader("X-Frame-Options", "DENY");
  const allowPreview = process.env.NODE_ENV === "development";
  return {
    props: { allowPreview, preview: allowPreview && query.preview === "1" },
  };
}
