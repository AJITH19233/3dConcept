import { useState } from "react";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <nav className="flex justify-between items-center py-4 px-8 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          3D<span className="text-amber-600">Concept</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li><a href="#home" className="hover:text-amber-600">Home</a></li>
          <li><a href="#about" className="hover:text-amber-600">About</a></li>
          <li><a href="#service" className="hover:text-amber-600">Services</a></li>
          <li><a href="#portfolio" className="hover:text-amber-600">Portfolio</a></li>
          <li><a href="#contact" className="hover:text-amber-600">Contact</a></li>
        </ul>

        {/* Call to Action Button (Desktop) */}
        <a
          href="#contact"
          className="hidden md:inline-block bg-amber-600 text-white px-5 py-2 rounded-lg shadow hover:bg-amber-700 transition"
        >
          Get a Quote
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col items-center space-y-4 py-6 text-gray-700 font-medium">
            <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
            <li><a href="#services" onClick={() => setIsOpen(false)}>Services</a></li>
            <li><a href="#portfolio" onClick={() => setIsOpen(false)}>Portfolio</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
            <li>
              <a
                href="#contact"
                className="bg-amber-600 text-white px-5 py-2 rounded-lg shadow hover:bg-amber-700 transition"
                onClick={() => setIsOpen(false)}
              >
                Get a Quote
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
