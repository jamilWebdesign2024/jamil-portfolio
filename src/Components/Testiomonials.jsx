import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Quotes = () => {
  return (
    <div className="bg-gray-950 text-white min-h-screen p-8 lg:p-12 font-sans">
      <Testimonials />
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Jhankar Mahbub",
      title: "CEO, Programming Hero & Phitron.io",
      quote: "As a dynamic educator and coder who transitioned from engineering at BUET to software in the U.S., then founded Programming Hero, now one of Bangladesh's top platforms for fun, effective coding education—alongside being a bestselling Bengali author and inspirational speaker.",
      image: "https://i.postimg.cc/DyPqvxDf/Untitled-16-17-1.png",
      alt: "Jhankar Mahbub portrait",
      hasTransparentBg: true,
    },
    {
      id: 2,
      name: "Abdur Rakib",
      title: "COO, Programming Hero & Phitron.io",
      quote: "Abdur Rakib is the Chief Operating Officer at Programming Hero and Phitron.io. He leads strategic operations, helping thousands of students land global tech jobs. With a strong tech background, he's passionate about scalable and impactful education.",
      image: "https://i.postimg.cc/MHQ7cmLK/abdur-rakib.webp",
      alt: "Abdur Rakib portrait",
      hasTransparentBg: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 10,
      },
    },
    hover: {
      y: -10,
      boxShadow: "0 25px 50px -12px rgba(16, 185, 129, 0.25)",
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Enhanced Section Title with better gradient */}
      <div className="text-center mb-16">
        <motion.h2 
          className="text-4xl sm:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Success Stories
        </motion.h2>
        <motion.p 
          className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hear what our mentors and students have to say about their journey.
        </motion.p>
      </div>

      {/* Enhanced Testimonial Cards with better hover effects */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {testimonials.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            className="
              relative group bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl shadow-2xl 
              flex flex-col items-center text-center
              border border-gray-700 hover:border-teal-500/50
              transition-all duration-500 ease-in-out
              overflow-hidden
            "
            variants={cardVariants}
            whileHover="hover"
          >
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Author's Image with ring animation */}
            <div className="relative mb-6">
              <div className="
                absolute inset-0 rounded-full 
                border-4 border-transparent
                group-hover:border-teal-500/30
                transition-all duration-700 ease-in-out
                group-hover:animate-pulse
                -z-10
              "></div>
              <img
                className={`
                  h-24 w-24 sm:h-28 sm:w-28 rounded-full object-cover
                  ${testimonial.hasTransparentBg ? 'bg-gray-700 p-1' : ''}
                  border-4 border-gray-700 shadow-lg
                  transition-all duration-300 transform group-hover:scale-110
                  group-hover:border-cyan-500/50
                `}
                src={testimonial.image}
                alt={testimonial.alt}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placehold.co/120x120/1f2937/d1d5db?text=Image+Error";
                }}
              />
            </div>
            
            {/* Author's Info */}
            <h3 className="text-xl sm:text-2xl font-bold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-500">
              {testimonial.name}
            </h3>
            <p className="text-sm sm:text-base font-medium text-gray-400 mb-6">
              {testimonial.title}
            </p>

            {/* Quote with enhanced styling */}
            <div className="relative">
              <Quote className="absolute top-0 left-0 -mt-4 -ml-4 text-cyan-500 opacity-20 sm:opacity-40 h-8 w-8" />
              <p className="text-gray-300 text-base sm:text-lg font-medium leading-relaxed italic relative z-10">
                "{testimonial.quote}"
              </p>
              <Quote className="absolute bottom-0 right-0 -mb-4 -mr-4 text-cyan-500 opacity-20 sm:opacity-40 h-8 w-8 transform rotate-180" />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Optional decorative elements */}
      <div className="absolute left-0 right-0 -bottom-20 h-40 bg-gradient-to-t from-gray-950 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default Quotes;