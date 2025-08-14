import React from 'react';
import { Facebook, Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="px-4 divide-y bg-base-200 text-base-content border-t border-base-300">
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        {/* Brand Section */}
        <div className="lg:w-1/3">
          <a href="#" className="flex justify-center space-x-3 lg:justify-start">
            <div className="text-xl font-bold flex items-center text-primary">
              <span className="text-3xl">&lt;</span>
              Jamil
              <span className="text-3xl">/&gt;</span>
            </div>
          </a>
          <p className="mt-2 text-sm text-center lg:text-left">
            Mern Stack Developer
          </p>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase text-primary">Quick Links</h3>
            <ul className="space-y-1">
              {navLinks.slice(0, 4).map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="link link-hover"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase text-primary">More</h3>
            <ul className="space-y-1">
              {navLinks.slice(4).map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="link link-hover"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h3 className="uppercase text-primary">Contact</h3>
            <ul className="space-y-1">
              <li>
                <a
                  href="mailto:jamiluddinjishan@gmail.com"
                  className="flex items-center link link-hover"
                >
                  <Mail className="w-4 h-4 mr-2" /> Email
                </a>
              </li>
              <li>
                <a
                  href="tel:+8801878142110"
                  className="flex items-center link link-hover"
                >
                  <Phone className="w-4 h-4 mr-2" /> Phone
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-3">
            <div className="uppercase text-primary">Social media</div>
            <div className="flex justify-start space-x-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-1 link link-hover"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-1 link link-hover"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-1 link link-hover"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 text-sm text-center">
        © {new Date().getFullYear()} Md Jamil Uddin. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
