import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose, AiOutlineDownload } from 'react-icons/ai';
import ThemeToggle from '../Pages/ThemeToggle';


const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false); // মোবাইল মেনু স্টেট

  const handleNavToggle = () => {
    setNavOpen(!navOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`p-4 shadow-lg fixed w-full z-50`}
      style={{
        backgroundColor: 'var(--navbar-bg)',
        color: 'var(--text-color)',
        boxShadow: '0 4px 6px -1px var(--shadow-color), 0 2px 4px -2px var(--shadow-color)',
      }}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* লোগো */}
        <div
          className="text-xl font-bold flex items-center"
          style={{ color: 'var(--heading-color)' }}
        >
          <span className="text-3xl" style={{ color: 'var(--accent-color)' }}>&lt;</span>
          Jamil
          <span className="text-3xl" style={{ color: 'var(--accent-color)' }}>/&gt;</span>
        </div>

        {/* ডেস্কটপ মেনু */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="transition duration-300 ease-in-out"
              style={{ color: 'var(--link-color)' }}
              onMouseEnter={(e) => e.target.style.color = 'var(--link-hover)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--link-color)'}
            >
              {link.name}
            </a>
          ))}

          {/* থিম সুইচ */}
          <ThemeToggle />

          {/* ডাউনলোড সিভি বাটন */}
          <button
            className="font-semibold py-2 px-4 rounded-lg flex items-center space-x-2 transition duration-300 ease-in-out"
            style={{
              backgroundColor: 'var(--accent-color)',
              color: 'var(--link-hover)',
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--accent-hover)'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--accent-color)'}
          >
            <AiOutlineDownload className="text-lg" />
            <span>Download CV</span>
          </button>
        </div>

        {/* মোবাইল হ্যামবার্গার আইকন */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <button onClick={handleNavToggle} className="text-2xl focus:outline-none" style={{ color: 'var(--text-color)' }} aria-label="Open menu">
            {navOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* মোবাইল মেনু (সাইডবার) */}
      <div
        className={`md:hidden fixed top-0 left-0 w-3/4 h-full transition-transform duration-300 ease-in-out transform ${navOpen ? 'translate-x-0' : '-translate-x-full'} p-6 shadow-2xl`}
        style={{
          backgroundColor: 'var(--navbar-bg)',
          color: 'var(--text-color)',
          boxShadow: '20px 0px 50px -10px var(--shadow-color)',
        }}
      >
        <div className="flex justify-end mb-8">
          <button onClick={handleNavToggle} className="text-3xl focus:outline-none" style={{ color: 'var(--text-color)' }} aria-label="Close menu">
            <AiOutlineClose />
          </button>
        </div>
        <ul className="space-y-6 text-xl">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setNavOpen(false)} // মেনু ক্লিক করলে বন্ধ হবে
                className="block transition duration-300 ease-in-out"
                style={{ color: 'var(--link-color)' }}
                onMouseEnter={(e) => e.target.style.color = 'var(--link-hover)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--link-color)'}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="mt-8 pt-6 border-t" style={{ borderColor: 'var(--link-color)' }}>
            <button
              className="font-semibold py-3 px-6 rounded-lg w-full flex items-center justify-center space-x-2 transition duration-300 ease-in-out"
              style={{
                backgroundColor: 'var(--accent-color)',
                color: 'var(--link-hover)',
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--accent-hover)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--accent-color)'}
            >
              <AiOutlineDownload className="text-xl" />
              <span>Download CV</span>
            </button>
          </li>
        </ul>
      </div>

      {/* মোবাইল মেনু খোলা থাকলে ওভারলে */}
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
