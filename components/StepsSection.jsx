export default function StepsSection({ data }) {
  return (
    <section className="py-16 bg-blue-50 text-center">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">
        কিভাবে জমির মালিক হবেন
      </h2>
      <div className="flex flex-col md:flex-row justify-center gap-8 max-w-6xl mx-auto">
        {data.map((s, i) => (
          <div key={i} className="bg-white rounded-lg shadow p-6 flex-1">
            <p className="text-orange-500 font-semibold mb-2">{s.step}</p>
            <h3 className="text-xl font-bold mb-3">{s.title}</h3>
            <p className="text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
