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
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };

  return (
    <section id="experience" className="py-20 md:py-28" style={{ backgroundColor: 'var(--primary-bg)' }}>
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={headerVariants}
        >
          <div
            className="inline-block px-4 py-1 mb-4 rounded-full text-sm font-semibold"
            style={{ backgroundColor: 'var(--secondary-bg)', color: 'var(--text-color)', border: '1px solid var(--shadow-color)' }}
          >
            Experience
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2"
            style={{ color: 'var(--accent-color)' }}
          >
            Here is a quick summary of my most recent experiences:
          </h2>
        </motion.div>

        <div className="space-y-8 md:space-y-12">
          {experienceData.map((exp) => (
            <motion.div
              key={exp.id}
              className="p-6 md:p-8 rounded-xl transition-all duration-300"
              style={{
                backgroundColor: 'var(--secondary-bg)',
                border: '1px solid var(--shadow-color)',
                boxShadow: `0 4px 6px -1px rgba(var(--accent-color-rgb), 0.1), 0 2px 4px -1px rgba(var(--accent-color-rgb), 0.06)`,
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl md:text-2xl font-bold dark:text-secondary" style={{ color: 'var(--accent-color)' }}>
                    {exp.title}
                  </h3>
                  <p className="text-sm font-medium" style={{ color: 'var(--text-color)' }}>
                    {exp.company}
                  </p>
                </div>
                <div className="md:text-right">
                  <p className="text-sm font-medium" style={{ color: 'var(--accent-color)' }}>
                    {exp.year}
                  </p>
                </div>
              </div>

              <ul className="list-disc ml-6 space-y-2" style={{ color: 'var(--text-color)' }}>
                {exp.details.map((detail, i) => (
                  <motion.li
                    key={i}
                    className="relative pl-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i, duration: 0.5 }}
                  >
                    {detail}
                  </motion.li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-6">
                {exp.tags.map((tag, i) => (
                  <motion.span
                    key={i}
                    className="px-3 py-1 text-xs font-medium rounded-full"
                    style={{ backgroundColor: 'var(--accent-color)', color: 'var(--text-color)', border: '1px solid var(--shadow-color)' }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={tagVariants}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experienced;