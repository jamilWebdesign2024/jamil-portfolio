import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Code, Rocket, GraduationCap } from 'lucide-react';

const experienceData = [
  {
    id: 1,
    icon: <Briefcase className="h-5 w-5" />,
    iconBgColor: 'bg-teal-500',
    year: '2024 - 2025',
    title: 'MERN Stack Development',
    company: 'Programming Hero',
    details: [
      'Completed 500+ hours of intensive training',
      'Built 3 full-stack applications with MongoDB, Express, React, Node.js',
      'Learned industry best practices and modern tools',
    ],
    tags: ['React', 'Node.js', 'Next.js', 'MongoDB', 'Express', 'Stripe', 'Jwt'],
  },
  {
    id: 2,
    icon: <Code className="h-5 w-5" />,
    iconBgColor: 'bg-cyan-500',
    year: '2025 - Present',
    title: 'Practical Applications',
    company: 'Personal Portfolio',
    details: [
      'Developed responsive portfolio with animations',
      'Created e-commerce demo with payment integration',
      'Built RESTful APIs with JWT authentication',
    ],
    tags: ['React.js', 'Tailwind', 'Framer Motion' ],
  },
];

const Experienced = () => {
  return (
    <div className="bg-gray-950 text-white min-h-screen p-8 lg:p-16 font-sans">
      <Experience />
    </div>
  );
};

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
  };

  return (
    <div className="max-w-5xl mx-auto">
      {/* Professional Header */}
      <motion.div 
        className="text-center mb-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center justify-center gap-4 mb-6">
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-teal-400"></div>
          <Rocket className="h-6 w-6 text-teal-400" />
          <div className="w-12 h-px bg-gradient-to-r from-teal-400 to-transparent"></div>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
          Professional Journey
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          My career progression and key milestones
        </p>
      </motion.div>

      {/* Professional Timeline */}
      <motion.div 
        className="relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Timeline Line */}
        <div className="absolute left-0 md:left-1/2 top-0 w-0.5 h-full bg-gray-800 hidden md:block">
          <motion.div 
            className="absolute top-0 left-0 w-full h-0 bg-gradient-to-b from-teal-500 to-cyan-500"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </div>

        {experienceData.map((exp, index) => (
          <motion.div
            key={exp.id}
            className={`relative flex mb-16 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
            variants={containerVariants}
          >
            {/* Timeline Dot (Mobile) */}
            <div className="absolute left-0 top-6 w-3 h-3 rounded-full bg-cyan-500 z-10 md:hidden"></div>

            {/* Timeline Card */}
            <motion.div
              className={`
                w-full md:w-[46%] bg-gray-900 border border-gray-800 rounded-xl
                shadow-[0_10px_30px_-15px_rgba(0,0,0,0.3)] overflow-hidden
                transition-all duration-300 hover:border-teal-500/30
                ${index % 2 === 0 ? 'md:mr-4' : 'md:ml-4'}
              `}
              variants={cardVariants}
              whileHover={{ y: -3 }}
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <motion.div 
                    className={`flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-lg ${exp.iconBgColor} text-white`}
                    variants={iconVariants}
                  >
                    {exp.icon}
                  </motion.div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-gray-400">{exp.year}</span>
                      {/* Timeline Dot (Desktop) */}
                      <div className="hidden md:block w-2 h-2 rounded-full bg-cyan-500"></div>
                    </div>
                    <h3 className="text-xl font-bold text-white mt-1">{exp.title}</h3>
                    <p className="text-teal-400 font-medium">{exp.company}</p>
                  </div>
                </div>

                {/* Details */}
                <ul className="space-y-3 mb-6 pl-2">
                  {exp.details.map((detail, i) => (
                    <motion.li 
                      key={i}
                      className="text-gray-300 relative pl-5 before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-cyan-400"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * i }}
                    >
                      {detail}
                    </motion.li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag, i) => (
                    <motion.span
                      key={i}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-gray-800 text-cyan-400 border border-gray-700"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * i }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Experienced;