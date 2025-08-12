import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineDownload,
} from "react-icons/ai";
import ThemeToggle from "../Pages/ThemeToggle";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleNavToggle = () => {
    setNavOpen(!navOpen);
  };

  const handleDownloadCV = () => {
    window.open(
      "https://drive.google.com/file/d/1kiQal9j7P5KoYZsGKaQEyJ5TFfVcZwyv/view?usp=drive_link",
      "_blank"
    );
  };

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="p-4 shadow-lg fixed w-full z-50 bg-base-300 text-base-content backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold flex items-center">
          <span className="text-3xl">&lt;</span>
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-pulse">
            Jamil
          </span>
          <span className="text-3xl">/&gt;</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-primary transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Download CV Button */}
          <button
            onClick={handleDownloadCV}
            className="btn bg-gradient-to-r from-primary to-secondary text-white border-0 flex items-center space-x-2"
          >
            <AiOutlineDownload className="text-lg" />
            <span>Download CV</span>
          </button>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <button
            onClick={handleNavToggle}
            className="text-2xl focus:outline-none"
            aria-label="Open menu"
          >
            {navOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Sidebar) */}
      <div
        className={`md:hidden fixed top-0 left-0 w-3/4 h-full transition-transform duration-300 ease-in-out transform ${navOpen ? "translate-x-0" : "-translate-x-full"
          } p-6 shadow-2xl bg-base-200 text-base-content`}
      >
        <div className="flex justify-end mb-8">
          <button
            onClick={handleNavToggle}
            className="text-3xl focus:outline-none"
            aria-label="Close menu"
          >
            <AiOutlineClose />
          </button>
        </div>
        <ul className="space-y-6 text-xl">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setNavOpen(false)}
                className="block hover:text-primary transition-colors duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="mt-8 pt-6 border-t border-base-content/20">
            <button
              onClick={handleDownloadCV}
              className="btn bg-gradient-to-r from-primary to-secondary text-white border-0 w-full flex items-center justify-center space-x-2"
            >
              <AiOutlineDownload className="text-xl" />
              <span>Download CV</span>
            </button>
          </li>
        </ul>
      </div>

      {/* Overlay */}
      {navOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden z-40"
          onClick={() => setNavOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
