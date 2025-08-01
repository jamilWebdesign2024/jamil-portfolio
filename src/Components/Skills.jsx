import React from "react";
import { motion } from "framer-motion";
import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaFigma,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiExpress,
  SiTailwindcss,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiRefinedgithub,
} from "react-icons/si";
import { TbChartAreaLine } from "react-icons/tb";

const Skills = () => {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-cyan-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "DaisyUI", icon: <div className="text-purple-500">DaisyUI</div> },
    { name: "Shadcn", icon: <div className="text-black dark:text-white">UI</div> },
    { name: "MembaUI", icon: <div className="text-blue-600">UI</div> },
    { name: "Axios", icon: <div className="text-purple-600">Axios</div> },
    { name: "TanStack Query", icon: <div className="text-red-500">RQ</div> },
    { name: "Charts", icon: <TbChartAreaLine className="text-green-500" /> },
    { name: "Figma", icon: <FaFigma className="text-purple-500" /> },
    { name: "Pixo", icon: <div className="text-blue-500">Px</div> },
    { name: "VS Code", icon: <div className="text-blue-500">VS</div> },
    { name: "Vite", icon: <div className="text-yellow-500">Vite</div> },
    { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
    { name: "Github", icon: <SiRefinedgithub  className="text-orange-600" /> },
    { name: "Photoshop", icon: <SiAdobephotoshop className="text-blue-800" /> },
    { name: "Illustrator", icon: <SiAdobeillustrator className="text-orange-600" /> },
    { name: "PDF", icon: <div className="text-red-500">PDF</div> },
  ];

  return (
    <section id="skills" className="py-16 px-4 sm:px-8 lg:px-16 bg-[var(--primary-bg)]">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.div
            className="px-6 py-2 rounded-full mb-4 bg-gradient-to-r from-[var(--accent-color)] to-blue-400"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-sm font-semibold uppercase text-white ">
              Technical Skills
            </span>
          </motion.div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--heading-color)]">
            My Professional Toolkit
          </h2>
        </div>

        {/* Dual Marquee Container */}
        <div className="space-y-8">
          {/* Top Marquee (left to right) */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6 w-max"
              animate={{
                x: ["0%", "-100%"],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              {[...skills, ...skills].map((skill, index) => (
                <div key={`top-${index}`} className="skill-border mx-2">
                  <motion.div
                    className="flex flex-col items-center justify-center p-4 min-w-[100px] h-[100px]"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 0 15px rgba(var(--accent-color-rgb), 0.3)"
                    }}
                  >
                    <div className="text-3xl mb-2">{skill.icon}</div>
                    <span className="text-xs font-medium">{skill.name}</span>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Bottom Marquee (right to left) */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6 w-max"
              animate={{
                x: ["-100%", "0%"],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              {[...skills].reverse().map((skill, index) => (
                <div key={`bottom-${index}`} className="skill-border mx-2">
                  <motion.div
                    className="flex flex-col items-center justify-center p-4 min-w-[100px] h-[100px]"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 0 15px rgba(var(--accent-color-rgb), 0.3)"
                    }}
                  >
                    <div className="text-3xl mb-2">{skill.icon}</div>
                    <span className="text-xs font-medium">{skill.name}</span>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Mobile Grid */}
        <div className="mt-12 md:hidden grid grid-cols-3 sm:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div key={`mobile-${index}`} className="skill-border">
              <motion.div
                className="flex flex-col items-center p-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="text-2xl mb-1">{skill.icon}</div>
                <span className="text-xs text-center">{skill.name}</span>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;