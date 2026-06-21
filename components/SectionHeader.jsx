export default function SectionHeader({ subtitle, title, details }) {
  return (
    <div className="text-center mb-12">
      {subtitle && (
        <span className="bg-primary/20 text-primary rounded-full text-xs font-semibold px-4 py-2 uppercase tracking-wide inline-block mb-2">
          {subtitle}
        </span>
      )}

      {title && (
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-3">
          {title}
        </h2>
      )}

      {details && (
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          {details}
        </p>
      )}
    </div>
  );
}
