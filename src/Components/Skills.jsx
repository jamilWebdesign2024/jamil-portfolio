import React from "react";
import { motion } from "framer-motion";

import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaGithub, FaFigma } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import {
  SiVercel,
  SiDaisyui,
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiPostman,
  SiReactquery,
  SiReactrouter,
  SiAdobephotoshop,
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandNodejs } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import { PiMicrosoftPowerpointLogoBold } from "react-icons/pi";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-600" />, category: "frontend" },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" />, category: "frontend" },
  { name: "JavaScript", icon: <DiJavascript className="text-yellow-400" />, category: "frontend" },
  { name: "React.js", icon: <FaReact className="text-cyan-500" />, category: "frontend" },
  { name: "Tailwind CSS", icon: <RiTailwindCssFill className="text-teal-400" />, category: "frontend" },
  { name: "React Query", icon: <SiReactquery className="text-red-600" />, category: "frontend" },
  { name: "React Router", icon: <SiReactrouter className="text-pink-700" />, category: "frontend" },
  { name: "ShadCN UI", icon: <SiDaisyui className="text-pink-500" />, category: "frontend" },
  { name: "Figma", icon: <FaFigma className="text-cyan-500" />, category: "Frontend" },
  { name: "Node.js", icon: <TbBrandNodejs className="text-green-600" />, category: "backend" },
  { name: "Express.js", icon: <SiExpress className="text-gray-700" />, category: "backend" },
  { name: "MongoDB", icon: <SiMongodb className="text-green-700" />, category: "backend" },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500" />, category: "backend" },
  { name: "Vercel", icon: <SiVercel className="text-black" />, category: "backend" },
  { name: "Git", icon: <FaGitAlt className="text-orange-600" />, category: "tools" },
  { name: "GitHub", icon: <FaGithub className="text-blue-800" />, category: "tools" },
  { name: "VS Code", icon: <VscVscode className="text-blue-700" />, category: "tools" },
  { name: "Postman", icon: <SiPostman className="text-orange-500" />, category: "tools" },
  { name: "PowerPoint", icon: <PiMicrosoftPowerpointLogoBold className="text-pink-800" />, category: "tools" },
  { name: "Photoshop", icon: <SiAdobephotoshop className="text-blue-600" />, category: "tools" },
];

const categoryDescriptions = {
  frontend: "Technologies for building interactive user interfaces",
  backend: "Server-side technologies, databases, and deployment tools",
  tools: "Design, documentation, testing, and productivity tools",
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const SkillsSection = () => {
  const groupedSkills = skills.reduce((acc, skill) => {
    const categoryKey = skill.category.toLowerCase();
    if (!acc[categoryKey]) acc[categoryKey] = [];
    acc[categoryKey].push(skill);
    return acc;
  }, {});

  const categories = ["frontend", "backend", "tools"].filter((cat) => groupedSkills[cat]);

  return (
    <div className="min-h-screen bg-base-300 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            My <span className="text-accent">Skills</span>
          </h2>
          <p className="text-lg sm:text-xl text-base-content/70 max-w-2xl mx-auto mb-8">
            Technologies and tools I use to bring ideas to life
          </p>
          <div className="divider divider-primary w-24 mx-auto"></div>
        </div>

        {categories.map((category) => (
          <div key={category} className="mb-16">
            <h3 className="text-2xl font-bold mb-2 text-primary flex items-center gap-3">
              <span className="w-4 h-4 bg-secondary rounded-full"></span>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </h3>
            <p className="text-base-content/70 mb-6 max-w-xl">{categoryDescriptions[category]}</p>

            <motion.div
              className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {groupedSkills[category].map((skill) => (
                <motion.div
                  key={skill.name}
                  className="card bg-base-200 hover:bg-base-100 shadow-lg hover:shadow-xl cursor-pointer transition-all duration-300"
                  variants={cardVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="card-body items-center text-center p-3 sm:p-4">
                    <div className="text-3xl sm:text-4xl mb-2">{skill.icon}</div>
                    <h3 className="font-bold text-xs sm:text-sm">{skill.name}</h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
