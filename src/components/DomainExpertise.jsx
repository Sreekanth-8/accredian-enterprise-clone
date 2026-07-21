import domains from "@/data/domainExpertise";

export default function DomainExpertise() {
  return (
    <section id="domains" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center">
          Domain Expertise
        </h2>

        <p className="text-center text-gray-600 mt-3 mb-12">
          Industry-focused learning programs across the most in-demand technologies.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {domains.map((domain) => (
            <div
              key={domain.id}
              className="border rounded-xl p-6 hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-3">
                {domain.title}
              </h3>

              <p className="text-gray-600">
                {domain.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}