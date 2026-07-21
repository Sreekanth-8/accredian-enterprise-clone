import stats from "@/data/stats";

export default function Stats() {
  return (
    <section id="stats" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-12">
          Our Impact
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {stats.map((item) => (
            <div
              key={item.id}
              className="text-center p-8 rounded-xl shadow-md"
            >
              <h3 className="text-4xl font-bold text-blue-600">
                {item.number}
              </h3>

              <p className="mt-3 text-gray-600">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}