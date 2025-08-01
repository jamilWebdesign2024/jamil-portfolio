import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';

const Banner = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: 'var(--primary-bg)' }}
    >
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 xl:gap-24">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Availability badge */}
            <div 
              className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6"
              style={{ 
                backgroundColor: 'rgba(var(--accent-color-rgb), 0.1)',
                color: 'var(--accent-color)'
              }}
            >
              <span 
                className="w-2 h-2 rounded-full mr-2 animate-pulse"
                style={{ backgroundColor: 'var(--accent-color)' }}
              ></span>
              Available for new projects
            </div>
            
            {/* Headline */}
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              style={{ color: 'var(--heading-color)' }}
            >
              <span className="block">Hello, I'm</span>
              <span style={{ color: 'var(--accent-color)' }}>Sagar Sharma</span>
            </h1>
            
            {/* Subheading */}
            <p 
              className="text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed"
              style={{ color: 'var(--text-color)' }}
            >
              MERN Stack & Frontend Developer with 7+ years of experience building scalable web applications. 
              I specialize in creating efficient, responsive, and user-friendly interfaces.
            </p>
            
            {/* Skills highlights */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10">
              <div 
                className="flex items-center px-4 py-2 rounded-full shadow-sm"
                style={{ 
                  backgroundColor: 'var(--secondary-bg)',
                  border: '1px solid var(--shadow-color)'
                }}
              >
                <FaReact 
                  className="text-lg mr-2" 
                  style={{ color: 'var(--accent-color)' }} 
                />
                <span className="text-sm font-medium">React.js</span>
              </div>
              <div 
                className="flex items-center px-4 py-2 rounded-full shadow-sm"
                style={{ 
                  backgroundColor: 'var(--secondary-bg)',
                  border: '1px solid var(--shadow-color)'
                }}
              >
                <FaNodeJs 
                  className="text-lg mr-2" 
                  style={{ color: 'var(--accent-color)' }} 
                />
                <span className="text-sm font-medium">Node.js</span>
              </div>
              <div 
                className="flex items-center px-4 py-2 rounded-full shadow-sm"
                style={{ 
                  backgroundColor: 'var(--secondary-bg)',
                  border: '1px solid var(--shadow-color)'
                }}
              >
                <FaDatabase 
                  className="text-lg mr-2" 
                  style={{ color: 'var(--accent-color)' }} 
                />
                <span className="text-sm font-medium">MongoDB</span>
              </div>
            </div>
            
            {/* CTA and social */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a 
                href="#contact" 
                className="flex items-center justify-center px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                style={{ 
                  backgroundColor: 'var(--accent-color)',
                  color: 'var(--link-hover)'
                }}
              >
                Contact Me <FiArrowRight className="ml-2" />
              </a>
              
              <div className="flex items-center space-x-4">
                <a 
                  href="#" 
                  className="transition-colors duration-300 hover:text-[var(--accent-color)]"
                  style={{ color: 'var(--link-color)' }}
                >
                  <FaGithub className="text-xl" />
                </a>
                <a 
                  href="#" 
                  className="transition-colors duration-300 hover:text-[var(--accent-color)]"
                  style={{ color: 'var(--link-color)' }}
                >
                  <FaTwitter className="text-xl" />
                </a>
                <a 
                  href="#" 
                  className="transition-colors duration-300 hover:text-[var(--accent-color)]"
                  style={{ color: 'var(--link-color)' }}
                >
                  <FaLinkedin className="text-xl" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Image section with enhanced gradient animation */}
          <div className="relative w-full max-w-md lg:max-w-lg flex-shrink-0">
            <div className="relative w-72 h-72 lg:w-96 lg:h-96 mx-auto">
              {/* Enhanced gradient animation */}
              <div 
                className="absolute inset-0 rounded-full animate-smooth-pulse bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 blur-xl"
                style={{
                  mask: 'radial-gradient(transparent 60%, black 75%)'
                }}
              ></div>
              
              {/* Profile image container */}
              <div 
                className="relative w-full h-full rounded-full overflow-hidden border-4 z-10"
                style={{ 
                  borderColor: 'var(--primary-bg)',
                  boxShadow: '0 10px 30px -5px rgba(var(--accent-color-rgb), 0.3)'
                }}
              >
                <div 
                  className="absolute inset-0 rounded-full"
                  style={{ 
                    background: 'linear-gradient(to bottom right, rgba(var(--accent-color-rgb), 0.1), transparent)'
                  }}
                ></div>
                <img
                  src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Sagar Sharma"
                  className="relative w-full h-full object-cover"
                />
              </div>
              
              {/* Enhanced Experience badge with gradient animation */}
              <div 
                className="absolute -bottom-4 -right-4 p-3 rounded-xl shadow-lg flex items-center z-20 overflow-hidden group"
                style={{ 
                  backgroundColor: 'var(--secondary-bg)',
                  border: '1px solid var(--shadow-color)'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div 
                  className="text-2xl font-bold mr-2 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
                >
                  7+
                </div>
                <div 
                  className="text-sm font-medium"
                  style={{ color: 'var(--text-color)' }}
                >
                  Years Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;