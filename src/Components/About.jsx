import React from "react";
import { motion } from "framer-motion";
import {
  FiAward,
  FiBook,
  FiCode,
  FiUser,
  FiZap,
  FiTarget,
  FiFeather
} from "react-icons/fi";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";
import { RiFirebaseLine } from "react-icons/ri";

const About = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const techStack = [
    { icon: <FaReact size={20} />, name: "React.js" },
    { icon: <SiTailwindcss size={20} />, name: "Tailwind" },
    { icon: <FaNodeJs size={20} />, name: "Node.js" },
    { icon: <SiExpress size={20} />, name: "Express" },
    { icon: <SiMongodb size={20} />, name: "MongoDB" },
    { icon: <RiFirebaseLine size={20} />, name: "Firebase" },
  ];

  const education = [
    {
      icon: <FiBook size={16} />,
      title: "MERN Stack Development",
      institution: "Programming Hero",
      period: "2023",
      description: "Built 12+ production-ready applications with authentication and dashboard UIs."
    },
  ];
  
  const uniqueSkills = [
    "Engineering logic meets creative design",
    "Strong problem-solving skills",
    "Experience with authentication systems",
    "Quick learner in fast-paced environments"
  ];

  return (
    <section
      id="about"
      className="py-16 px-4 sm:px-6 lg:px-8 xl:px-12 relative"
      style={{
        backgroundColor: 'var(--primary-bg)',
        color: 'var(--text-color)',
        minHeight: 'auto'
      }}
    >
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-12"
        >
          <div className="flex items-center px-6 py-2 rounded-full mb-6 bg-[var(--secondary-bg)] text-[var(--accent-color)]">
            <FiUser className="mr-2" />
            <h2 className="text-xl font-semibold">ABOUT ME</h2>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8 w-full">
            {/* Profile Image - More compact */}
            <motion.div
              className="w-full lg:w-1/3 flex justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-xl overflow-hidden shadow-md border-2 border-[var(--accent-color)]">
                <img
                  src="https://placehold.co/600x600/1F2937/D1D5DB?text=MD+Nazmul+Hossan"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Content Column - Wider */}
            <motion.div 
              className="w-full lg:w-2/3"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Compact Intro Card */}
              <motion.div 
                className="bg-[var(--secondary-bg)] rounded-xl p-6 mb-6"
                variants={item}
              >
                <h3 className="text-2xl font-bold mb-4 text-[var(--heading-color)]">
                  Electronics Engineer & Developer
                </h3>
                <div className="space-y-3 text-[var(--text-color)]">
                  <p>
                    I'm <span className="font-semibold text-[var(--accent-color)]">MD Nazmul Hossan</span>, pursuing Diploma in Electronics Engineering while developing web development skills.
                  </p>
                  <p>
                    Combining hardware knowledge with software expertise to build innovative solutions.
                  </p>
                </div>
              </motion.div>

              {/* Compact Two Column Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Education */}
                <motion.div
                  className="bg-[var(--secondary-bg)] rounded-xl p-6"
                  variants={item}
                >
                  <div className="flex items-start mb-4">
                    <FiAward className="text-xl text-[var(--accent-color)] mr-3 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold text-[var(--heading-color)]">
                        {education[0].title}
                      </h4>
                      <p className="text-sm text-[var(--text-color)] opacity-80">{education[0].institution} • {education[0].period}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-color)] opacity-90">{education[0].description}</p>
                </motion.div>

                {/* Tech Stack - More compact */}
                <motion.div
                  className="bg-[var(--secondary-bg)] rounded-xl p-6"
                  variants={item}
                >
                  <h4 className="text-lg font-semibold mb-4 flex items-center text-[var(--heading-color)]">
                    <FiCode className="text-xl text-[var(--accent-color)] mr-2" /> Skills
                  </h4>
                  <div className="grid grid-cols-3 gap-3">
                    {techStack.map((tech, index) => (
                      <motion.div
                        key={index}
                        className="flex flex-col items-center p-2 rounded-lg bg-[var(--primary-bg)]"
                        whileHover={{ 
                          y: -3,
                          backgroundColor: 'var(--accent-bg)',
                          color: 'var(--accent-color)'
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="text-xl mb-1" style={{ color: 'var(--accent-color)' }}>
                          {tech.icon}
                        </div>
                        <span className="text-xs">{tech.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Compact Unique Skills */}
              <motion.div 
                className="bg-[var(--secondary-bg)] rounded-xl p-6 mb-6"
                variants={item}
              >
                <h4 className="text-lg font-semibold mb-4 flex items-center text-[var(--heading-color)]">
                  <FiZap className="text-xl text-[var(--accent-color)] mr-2" /> My Strengths
                </h4>
                <ul className="space-y-3 text-sm text-[var(--text-color)]">
                  {uniqueSkills.map((skill, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <span className="h-2 w-2 rounded-full mt-2 mr-3 bg-[var(--accent-color)]"></span>
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Compact Career Goal */}
              <motion.div 
                className="bg-[var(--secondary-bg)] rounded-xl p-6 text-center"
                variants={item}
              >
                <h4 className="text-lg font-semibold mb-3 flex items-center justify-center text-[var(--heading-color)]">
                  <FiTarget className="text-xl text-[var(--accent-color)] mr-2" /> Career Goal
                </h4>
                <p className="text-sm text-[var(--text-color)] mb-3">
                  Seeking <span className="font-semibold text-[var(--accent-color)]">internships</span> to apply my electronics and development skills.
                </p>
                <p className="text-xs italic text-[var(--text-color)] opacity-80">
                  "Bridging hardware and software worlds"
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;