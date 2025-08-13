import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Importing icons from react-icons
import { FaDatabase, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiExpress, SiFirebase, SiMongodb } from 'react-icons/si';
import { RiTailwindCssFill } from 'react-icons/ri';
import { AiFillCreditCard } from 'react-icons/ai';
import { FiCode, FiExternalLink, FiEye, FiGithub, FiShieldOff, FiTarget, FiTrendingUp, FiX } from 'react-icons/fi';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const projects = [
    {
      id: 1,
      name: 'Study Sphere',
      description: 'A collaborative learning platform with resource sharing, progress tracking, and student communication features.',
      liveLink: 'https://study-sphere-fb1d4.web.app',
      githubLink: 'https://github.com/jamilWebdesign2024/studys-phere-client',
      image: 'https://i.postimg.cc/8PSvctK0/Screenshot-7.jpg',
      tags: ['React', 'Firebase', 'MongoDB', 'Express', 'Tailwind', 'Stripe', 'JWT'],
      icons: [<FaReact />, <SiFirebase />, <SiMongodb />, <FaDatabase />, <RiTailwindCssFill />, <AiFillCreditCard />, <FiShieldOff />],
      detailedDescription: 'Study Sphere is a comprehensive collaborative learning platform designed to enhance student engagement and learning outcomes. The platform features real-time resource sharing, interactive progress tracking, secure payment processing with Stripe, and robust student communication tools.',
      challenges: [
        'Implementing real-time collaboration features with multiple users',
        'Managing complex state between different user roles (students, teachers, admins)',
        'Integrating secure payment processing with Stripe for premium features',
        'Optimizing performance for large file uploads and sharing',
        'Creating responsive design that works across all devices'
      ],
      improvements: [
        'Add AI-powered study recommendations based on learning patterns',
        'Implement video conferencing for virtual study sessions',
        'Create mobile app version for better accessibility',
        'Add gamification elements to increase user engagement',
        'Integrate with popular educational APIs and platforms'
      ],
      category: 'Educational Platform',
      duration: '3 months',
      team: 'Solo Project'
    },
    {
      id: 2,
      name: 'Athletic Club',
      description: 'Fitness club management system with class schedules, trainer profiles, and membership processing.',
      liveLink: 'https://athletic-club-c3623.web.app',
      githubLink: 'https://github.com/jamilWebdesign2024/athletic-club',
      image: 'https://i.postimg.cc/NM0hqrhs/Screenshot-2.jpg',
      tags: ['React', 'Firebase', 'Node.js', 'MongoDB', 'Tailwind'],
      icons: [<FaReact />, <SiFirebase />, <FaNodeJs />, <SiMongodb />, <RiTailwindCssFill />],
      detailedDescription: 'Athletic Club is a modern fitness management system that streamlines gym operations. It features comprehensive member management, class scheduling system, trainer profile management, and automated membership processing with real-time notifications.',
      challenges: [
        'Creating a complex scheduling system with conflict resolution',
        'Managing multiple user types with different permission levels',
        'Implementing real-time notifications for class updates',
        'Designing intuitive dashboard for gym administrators',
        'Handling membership renewals and payment tracking'
      ],
      improvements: [
        'Add workout tracking and progress analytics for members',
        'Implement QR code-based check-in system',
        'Create nutrition tracking and meal planning features',
        'Add integration with fitness wearables and apps',
        'Develop mobile app for members and trainers'
      ],
      category: 'Management System',
      duration: '2.5 months',
      team: 'Solo Project'
    },
    {
      id: 3,
      name: 'Plant Care Tracker',
      description: 'Plant management application with watering reminders and environmental requirement tracking.',
      liveLink: 'https://plant-care-tracker-541d1.web.app',
      githubLink: 'https://github.com/jamilWebdesign2024/plant-care-tracker-client',
      image: 'https://i.postimg.cc/sgnGnyVk/Screenshot-5.jpg',
      tags: ['React', 'Firebase', 'Node.js', 'MongoDB', 'Express', 'Tailwind'],
      icons: [<FaReact />, <SiFirebase />, <FaNodeJs />, <SiMongodb />, <SiExpress />, <RiTailwindCssFill />],
      detailedDescription: 'Plant Care Tracker is an innovative application designed for plant enthusiasts to manage their garden collections. It provides intelligent watering reminders, environmental requirement tracking, plant health monitoring, and care scheduling features.',
      challenges: [
        'Creating accurate plant care algorithms based on species requirements',
        'Implementing smart notification system for different care schedules',
        'Managing large plant database with detailed care instructions',
        'Creating intuitive plant identification and categorization system',
        'Optimizing image upload and storage for plant photos'
      ],
      improvements: [
        'Add AI-powered plant disease detection from photos',
        'Implement weather API integration for outdoor plant care',
        'Create social features for plant care community sharing',
        'Add plant growth tracking with photo timeline',
        'Develop smart home integration for automated care systems'
      ],
      category: 'Lifestyle Application',
      duration: '2 months',
      team: 'Solo Project'
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
  };

  return (
    <div className="min-h-screen bg-base-100">
      <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-3">
            <motion.h2
              className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-pulse"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Featured <span className="text-accent">Projects</span>
            </motion.h2>
            <motion.p
              className="text-lg sm:text-xl text-base-content/70 max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Showcasing my best work and technical expertise through real-world applications
            </motion.p>
            <div className="divider divider-primary w-24 mx-auto"></div>
          </div>

          {/* Projects Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                className="group"
              >
                <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-300 hover:border-primary/30 overflow-hidden">
                  {/* Project Image */}
                  <figure className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4">
                      <div className="badge bg-accent/50 badge-sm font-semibold">
                        {project.category}
                      </div>
                    </div>
                  </figure>

                  {/* Card Body */}
                  <div className="card-body p-6">
                    <h3 className="card-title text-xl font-bold text-base-content mb-2 group-hover:text-primary transition-colors duration-300">
                      {project.name}
                    </h3>

                    <p className="text-base-content/70 text-sm leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Stack Icons */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.icons.slice(0, 5).map((icon, index) => (
                        <div key={index} className="text-2xl hover:scale-110 transition-transform duration-200">
                          {icon}
                        </div>
                      ))}
                      {project.icons.length > 5 && (
                        <div className="badge badge-outline badge-sm self-center">
                          +{project.icons.length - 5}
                        </div>
                      )}
                    </div>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1 mb-6">
                      {project.tags.slice(0, 4).map((tag) => (
                        <div key={tag} className="badge badge-outline badge-xs">
                          {tag}
                        </div>
                      ))}
                      {project.tags.length > 4 && (
                        <div className="badge badge-ghost badge-xs">
                          +{project.tags.length - 4} more
                        </div>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="card-actions justify-between items-center">
                      <div className="flex gap-2">
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-sm btn-primary btn-outline hover:btn-primary"
                        >
                          <FiExternalLink /> Live
                        </a>
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-sm btn-secondary btn-outline hover:btn-secondary"
                        >
                          <FiGithub /> Code
                        </a>
                      </div>

                      <button
                        className="btn bg-gradient-to-r from-primary to-secondary text-white border-0"
                        onClick={() => setSelectedProject(project)}
                      >
                        <FiEye /> View Details
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Project Statistics */}
          <div className="mt-20">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="stat bg-base-200 rounded-lg shadow-lg text-center">
                <div className="stat-figure text-primary text-3xl">🚀</div>
                <div className="stat-value text-primary">{projects.length}</div>
                <div className="stat-title">Total Projects</div>
                <div className="stat-desc">Completed & Deployed</div>
              </div>

              <div className="stat bg-base-200 rounded-lg shadow-lg text-center">
                <div className="stat-figure text-secondary text-3xl">⚡</div>
                <div className="stat-value text-secondary">100%</div>
                <div className="stat-title">Success Rate</div>
                <div className="stat-desc">Projects Delivered</div>
              </div>

              <div className="stat bg-base-200 rounded-lg shadow-lg text-center">
                <div className="stat-figure text-accent text-3xl">🛠️</div>
                <div className="stat-value text-accent">
                  {Array.from(new Set(projects.flatMap(p => p.tags))).length}
                </div>
                <div className="stat-title">Technologies</div>
                <div className="stat-desc">Used Across Projects</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="modal modal-open">
          <div className="modal-box max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-2xl text-primary">{selectedProject.name}</h3>
              <button
                className="btn btn-sm btn-circle btn-ghost"
                onClick={() => setSelectedProject(null)}
              >
                <FiX />
              </button>
            </div>

            {/* Project Image */}
            <figure className="mb-6 rounded-lg overflow-hidden">
              <img
                src={selectedProject.image}
                alt={selectedProject.name}
                className="w-full h-64 object-cover"
              />
            </figure>

            {/* Project Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <FiCode /> Main Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, index) => (
                      <div key={index} className="badge bg-accent/50 badge-md">
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-2">Project Details</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>Category:</strong> {selectedProject.category}</p>
                    <p><strong>Duration:</strong> {selectedProject.duration}</p>
                    <p><strong>Team:</strong> {selectedProject.team}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Project Links</h4>
                  <div className="flex gap-3">
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn bg-gradient-to-r from-primary to-secondary text-white border-0 btn-sm"
                    >
                      <FiExternalLink /> Live Project
                    </a>
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn bg-gradient-to-r from-primary to-secondary text-white border-0 btn-sm"
                    >
                      <FiGithub /> GitHub Repository
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h4 className="font-semibold text-lg mb-3">Brief Description</h4>
              <p className="text-base-content/80 leading-relaxed">
                {selectedProject.detailedDescription}
              </p>
            </div>

            {/* Challenges */}
            <div className="mb-6">
              <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <FiTarget /> Challenges Faced
              </h4>
              <ul className="space-y-2">
                {selectedProject.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-warning text-sm mt-1">⚡</span>
                    <span className="text-sm text-base-content/80">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Future Improvements */}
            <div className="mb-6">
              <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <FiTrendingUp /> Future Improvements & Plans
              </h4>
              <ul className="space-y-2">
                {selectedProject.improvements.map((improvement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-success text-sm mt-1">🚀</span>
                    <span className="text-sm text-base-content/80">{improvement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Modal Actions */}
            <div className="modal-action">
              <button
                className="btn bg-gradient-to-r from-primary to-secondary text-white border-0"
                onClick={() => setSelectedProject(null)}
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsSection;
