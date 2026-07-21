import Image from "next/image";

const companies = [
  { name: "Google", logo: "/images/logos/google.png", size: 150 },
  { name: "Microsoft", logo: "/images/logos/microsoft.png", size: 220 },
  { name: "Amazon", logo: "/images/logos/amazon.png", size: 150 },
  { name: "IBM", logo: "/images/logos/ibm.png", size: 150 },
  { name: "Infosys", logo: "/images/logos/infosys.png", size: 150 },
  { name: "TCS", logo: "/images/logos/tcs.png", size: 220 },
];

export default function TrustedCompanies() {
  return (
    <section id="companies" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center text-gray-900">
          Trusted by Leading Companies
        </h2>

        <p className="text-center text-gray-600 mt-3 mb-12">
          Organizations across industries choose Accredian to upskill their workforce.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {companies.map((company) => (
            <div
              key={company.name}
              className="flex justify-center items-center h-28 border rounded-xl shadow-sm hover:shadow-lg transition duration-300"
            >
              <Image
                src={company.logo}
                alt={company.name}
                width={company.size}
                height={80}
                className="object-contain max-h-16 w-auto"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}   