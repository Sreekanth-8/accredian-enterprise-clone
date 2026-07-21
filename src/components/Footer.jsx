export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        <div>
          <h2 className="text-2xl font-bold text-white">
            Accredian
          </h2>
          <p className="mt-4">
            Empowering enterprises through industry-focused learning
            solutions.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2">
            <li>Enterprise</li>
            <li>Programs</li>
            <li>Resources</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">
            Contact
          </h3>

          <p>Email: enterprise@accredian.com</p>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
        © 2026 Accredian Enterprise Clone. Developed using Next.js & Tailwind CSS.
      </div>
    </footer>
  );
}