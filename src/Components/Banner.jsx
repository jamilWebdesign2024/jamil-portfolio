import React, { useState, useEffect } from 'react';
import { FaGithub, FaTwitter, FaLinkedin, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import Typewriter from 'typewriter-effect';
import image from '../assets/photo.png';

const Banner = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section
      id="banner"
      className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-36
        bg-base-300 text-base-content"
    >
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 xl:gap-24">

          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 bg-accent/10 text-accent">
              <span className="w-2 h-2 rounded-full mr-2 animate-pulse bg-accent"></span>
              Available for new projects
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Hello, I'm <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-pulse">Md. Jamil Uddin</span>
            </h1>

            <div className="h-12 sm:h-16 mb-6 flex items-center justify-center lg:justify-start">
              {isMounted && (
                <Typewriter
                  options={{
                    strings: [
                      '<span class="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-semibold">Full Stack Developer</span>',
                      '<span class="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-semibold">Problem Solver</span>',
                      '<span class="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-semibold">MERN Stack Specialist</span>',
                      '<span class="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-semibold">Tech Enthusiast</span>',
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 30,
                    delay: 50,
                    wrapperClassName: 'text-2xl sm:text-3xl',
                    cursorClassName: 'Typewriter__cursor text-accent'
                  }}
                />
              )}
            </div>

            <p className="text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              MERN Stack Developer with 1+ years of experience building scalable web applications.
              I specialize in creating efficient, responsive, and user-friendly interfaces.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10">
              {[['React.js', FaReact], ['Node.js', FaNodeJs], ['MongoDB', FaDatabase]].map(([name, Icon], i) => (
                <div
                  key={i}
                  className="flex items-center px-4 py-2 rounded-full shadow-sm transition-all hover:shadow-md bg-base-200 border border-base-300"
                >
                  <Icon className="text-lg mr-2 text-accent" />
                  <span className="text-sm font-medium">{name}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#contact"
                className="btn bg-gradient-to-r from-primary to-secondary text-white flex items-center hover:brightness-110 transition"
              >
                Contact Me <FiArrowRight className="ml-2" />
              </a>

              <div className="flex items-center space-x-4 text-lg">
                <a href="#" className="hover:text-accent"><FaGithub /></a>
                <a href="#" className="hover:text-accent"><FaTwitter /></a>
                <a href="#" className="hover:text-accent"><FaLinkedin /></a>
              </div>
            </div>
          </div>

          {/* Image section */}
          <div className="relative w-full max-w-md lg:max-w-lg flex-shrink-0">
            <div className="relative w-72 h-72 lg:w-96 lg:h-96 mx-auto">
              {/* subtle pulse gradient bg behind image */}
              <div className="absolute inset-0 rounded-full animate-smooth-pulse bg-gradient-to-r from-primary via-secondary to-accent opacity-50 blur-md z-0"></div>

              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-accent shadow-xl z-10">
                <div className="absolute inset-0 rounded-full bg-accent/10"></div>
                <img src={image} alt="Md. Jamil Uddin" className="relative w-full h-full object-cover" />
              </div>

              <div className="absolute -bottom-4 -right-4 p-3 shadow-lg flex items-center z-20 overflow-hidden group btn bg-gradient-to-r from-primary to-secondary text-white over:brightness-110 transition border-none">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="text-2xl font-bold mr-2">1+</div>
                <div className="text-sm font-medium">Years Experience</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;
