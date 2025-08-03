import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiExternalLink, FiGithub, FiCode, FiLayers, FiDatabase, FiCpu, FiShield, FiCreditCard } from 'react-icons/fi';
import { TbBrandReact, TbBrandFirebase, TbBrandMongodb, TbBrandNodejs, TbBrandTailwind } from 'react-icons/tb';

const projects = [
  {
    id: 1,
    name: 'Study Sphere',
    description: 'A collaborative learning platform with resource sharing, progress tracking, and student communication features.',
    liveLink: 'https://study-sphere-fb1d4.web.app',
    githubLink: 'https://github.com/jamilWebdesign2024/studys-phere-client',
    image: 'https://i.postimg.cc/8PSvctK0/Screenshot-7.jpg',
    tags: ['React', 'Firebase', 'MongoDB', 'Express', 'Tailwind', 'Stripe', 'JWT'],
    icons: [<TbBrandReact />, <TbBrandFirebase />, <TbBrandMongodb />, <FiDatabase />, <TbBrandTailwind />, <FiCreditCard />, <FiShield />]
  },
  {
    id: 2,
    name: 'Athletic Club',
    description: 'Fitness club management system with class schedules, trainer profiles, and membership processing.',
    liveLink: 'https://athletic-club-c3623.web.app',
    githubLink: 'https://github.com/jamilWebdesign2024/athletic-club',
    image: 'https://i.postimg.cc/kgMtFDdN/Screenshot-6.jpg',
    tags: ['React', 'Firebase', 'Node.js', 'MongoDB', 'Tailwind'],
    icons: [<TbBrandReact />, <TbBrandFirebase />, <TbBrandNodejs />, <TbBrandMongodb />, <TbBrandTailwind />]
  },
  {
    id: 3,
    name: 'Plant Care Tracker',
    description: 'Plant management application with watering reminders and environmental requirement tracking.',
    liveLink: 'https://plant-care-tracker-541d1.web.app',
    githubLink: 'https://github.com/jamilWebdesign2024/plant-care-tracker-client',
    image: 'https://i.postimg.cc/sgnGnyVk/Screenshot-5.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind'],
    icons: [<TbBrandReact />, <TbBrandNodejs />, <TbBrandMongodb />, <FiLayers />, <TbBrandTailwind />]
  },
];

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"]
  });
  
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden rounded-2xl shadow-2xl group ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Enhanced Animated Gradient Border */}
      <motion.div
        className="absolute inset-0 rounded-2xl p-[1.5px]"
        style={{
          background: 'linear-gradient(45deg, #3B82F6, #8B5CF6, #EC4899, #3B82F6)',
          backgroundSize: '300% 300%'
        }}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%']
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'linear'
        }}
      >
        <div className="absolute inset-0 rounded-2xl bg-white dark:bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90" />
      </motion.div>

      {/* Inner Content */}
      <div className="relative z-10 flex flex-col md:flex-row h-full bg-white/90 dark:bg-gray-900/90 rounded-2xl overflow-hidden backdrop-blur-sm">
        {/* Image Section */}
        <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
            animate={{
              x: isHovered ? [0, 100, 0] : 0,
              y: isHovered ? [0, -50, 0] : 0,
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          <motion.img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover"
            animate={{
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Content Section */}
        <div className="md:w-1/2 p-6 md:p-8">
          <div className="flex flex-col h-full justify-between">
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <motion.span
                    key={i}
                    className="flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 dark:text-blue-400 border border-blue-200/50 dark:border-blue-800/50"
                    whileHover={{ scale: 1.05 }}
                  >
                    {project.icons[i]}
                    {tag}
                  </motion.span>
                ))}
              </div>
              
              <motion.h3 
                className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3"
                whileHover={{ x: 5 }}
              >
                {project.name}
              </motion.h3>
              
              <motion.p 
                className="text-gray-600 dark:text-gray-300 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {project.description}
              </motion.p>
            </div>

            <div className="flex flex-wrap gap-3">
              <motion.a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiExternalLink className="w-4 h-4" />
                Live Demo
              </motion.a>
              <motion.a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 shadow hover:shadow-md"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiGithub className="w-4 h-4" />
                Source Code
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2 inline-block"
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            PORTFOLIO SHOWCASE
          </motion.span>
          
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Explore my professional work showcasing innovative solutions and technical expertise.
          </motion.p>
        </motion.div>

        <div className="space-y-12 md:space-y-16 lg:space-y-20">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
          <motion.div
            className="absolute top-20 left-10 w-40 h-40 bg-blue-400/10 rounded-full filter blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-60 h-60 bg-purple-400/10 rounded-full filter blur-3xl"
            animate={{
              x: [0, -100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;

// https://i.postimg.cc/fLRmvKSv/1677507599579-removebg-preview.png
// https://i.postimg.cc/MHQ7cmLK/abdur-rakib.webp
// Abdur Rakib is the Chief Operating Officer at Programming Hero and Phitron.io.
// He leads strategic operations, helping thousands of students land global tech jobs.
// With a strong tech background, he’s passionate about scalable and impactful education.

// Jhankar Mahbub is a dynamic educator and coder who transitioned from engineering at BUET to software in the U.S., then founded Programming Hero, now one of Bangladesh’s top platforms for fun, effective coding education—alongside being a bestselling Bengali author and inspirational speaker.








