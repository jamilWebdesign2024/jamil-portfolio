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
      "https://drive.google.com/file/d/1o7Lc65RNL2nOkg4M2kHBv7OmMl1aPfCj/view?usp=sharing",
      "_blank"
    );
  };

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setNavOpen(false);
  };

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="p-4 shadow-lg fixed w-full z-50 bg-base-300 text-base-content backdrop-blur-sm h-16 flex items-center">
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
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="hover:text-primary transition-colors duration-300 cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          <ThemeToggle />
          <button
            onClick={handleDownloadCV}
            className="btn bg-gradient-to-r from-primary to-secondary text-white border-0 flex items-center space-x-2"
          >
            <AiOutlineDownload className="text-lg" />
            <span>Download CV</span>
          </button>
        </div>

        {/* Mobile Hamburger */}
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

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-72 h-full bg-base-200 text-base-content z-50 transform ${navOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out flex flex-col justify-between p-6 md:hidden`}
      >
        <div>
          <div className="flex justify-end mb-8">
            <button
              onClick={handleNavToggle}
              className="text-3xl focus:outline-none"
              aria-label="Close menu"
            >
              <AiOutlineClose />
            </button>
          </div>
          <ul className="space-y-6 text-lg">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="block hover:text-primary transition-colors duration-300 cursor-pointer"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Resume Button */}
        <div className="mt-8">
          <button
            onClick={handleDownloadCV}
            className="w-full py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-medium flex items-center justify-center space-x-2"
          >
            <AiOutlineDownload className="text-xl" />
            <span>Resume</span>
          </button>
        </div>
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
