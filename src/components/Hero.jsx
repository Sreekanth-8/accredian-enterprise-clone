import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <div>
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
              Enterprise Learning Solutions
            </span>

            <h1 className="mt-6 text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
              Build Future-Ready Teams
            </h1>

            <p className="mt-6 text-lg text-gray-600">
              Upskill your workforce with industry-leading learning
              programs designed for enterprises.
            </p>

            <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-lg transition">
              Explore Programs
            </button>
          </div>

          {/* Right Side */}
          <div className="flex justify-center items-center">
           <Image
             src="/images/hero.svg"
             alt="Hero Illustration"
             width={500}
             height={500}
             className="w-full max-w-md lg:max-w-lg"
             priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}