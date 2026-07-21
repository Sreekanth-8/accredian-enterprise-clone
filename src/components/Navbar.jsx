import { FaChevronDown } from "react-icons/fa";

const navItems = [
  { name: "Home", link: "#home", dropdown: false },
  { name: "Companies", link: "#companies", dropdown: false },
  { name: "Impact", link: "#stats", dropdown: false },
  { name: "Features", link: "#features", dropdown: false },
  { name: "Domains", link: "#domains", dropdown: false },
  { name: "FAQ", link: "#faq", dropdown: false },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold text-blue-600"
        >
          Accredian
        </a>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.link}
                className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition"
              >
                {item.name}

                {item.dropdown && (
                  <FaChevronDown className="text-xs mt-1" />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <a
          href="#contact"
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Contact Us
        </a>

      </nav>
    </header>
  );
}