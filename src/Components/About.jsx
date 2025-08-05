import React from 'react';
import { motion } from 'framer-motion';
import photo from '../assets/photo1.png';

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const listVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const About = () => {
  return (
    <section
      id="about"
      className="relative z-10 pt-32 md:pt-40 lg:pt-48 pb-20 md:pb-28 lg:pb-32 bg-secondary-bg dark:bg-dark-secondary-bg/80"
    >
      <h1
        className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-12 leading-tight text-center"
        style={{ color: 'var(--accent-color)' }}
      >
        About<span style={{ color: 'var(--heading-color)' }}> Me</span>
      </h1>

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row items-start justify-between gap-16 lg:gap-32">
          {/* Image Section */}
          <motion.div
            className="w-full md:w-2/5 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="bg-gradient-to-br from-accent-color/30 to-transparent p-[3px] rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-500">
              <div className="bg-white dark:bg-dark-primary-bg rounded-xl overflow-hidden">
                <img
                  src={photo}
                  alt="MERN Stack Developer"
                  className="w-full h-auto object-cover rounded-xl transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </motion.div>

          {/* Text Section */}
          <div className="w-full md:w-3/5 text-center md:text-left space-y-6">
            <motion.p
              className="text-lg lg:text-xl leading-relaxed text-text-color dark:text-dark-text-color"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={textVariants}
              transition={{ delay: 0.2 }}
            >
              I’m a passionate <strong className="text-accent-color dark:text-dark-accent-color">MERN Stack Developer</strong> who started my journey back in 2021. I began by watching YouTube tutorials, free resources, and getting inspired by coding content shared by Jhanker Mahbub on Facebook. Slowly but steadily, I built my foundation and stepped deeper into the world of web development.
            </motion.p>

            <motion.p
              className="text-lg lg:text-xl leading-relaxed text-text-color dark:text-dark-text-color"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={textVariants}
              transition={{ delay: 0.4 }}
            >
              In 2024, I joined the Programming Hero Web Development Course which completely transformed my learning journey. There, I mastered the core of full stack development — learning HTML5, CSS3, JavaScript (ES6), and React.js for building responsive user interfaces, along with Node.js, Express.js, and MongoDB for creating scalable backends. I also worked with tools like Git, GitHub, Firebase, Tailwind CSS, and DaisyUI.
            </motion.p>

            <motion.p
              className="text-lg lg:text-xl leading-relaxed text-text-color dark:text-dark-text-color"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={textVariants}
              transition={{ delay: 0.6 }}
            >
              I enjoy working on projects from start to finish — from planning and design to full deployment. My goal is to build fast, user-friendly web applications that solve real-world problems and help clients achieve their digital goals.
            </motion.p>

            <motion.p
              className="text-lg lg:text-xl leading-relaxed text-text-color dark:text-dark-text-color"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={textVariants}
              transition={{ delay: 0.8 }}
            >
              Besides coding, I’m also a student of <strong className="text-accent-color dark:text-dark-accent-color">Diploma in Engineering (Electronics)</strong>, currently studying at <strong>Chittagong Polytechnic Institute</strong> since 2020. I also completed my <strong>SSC in 2018</strong> from the Science group at <strong>Purbo Sandwip High School</strong>.
            </motion.p>

            {/* Quick Facts */}
            <motion.div
              className="pt-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={textVariants}
              transition={{ delay: 1 }}
            >
              <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-accent-color dark:text-dark-heading-color">
                A few quick facts about me:
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-text-color dark:text-dark-text-color">
                {[
                  ['🎓', 'Diploma in Electronics (2020 – Continue)'],
                  ['🏫', 'SSC (Science) – 2018, PSMLHS'],
                  ['👨‍💻', 'Self-taught MERN Stack Developer'],
                  ['🚀', 'Loves building full stack projects'],
                ].map(([emoji, text], i) => (
                  <motion.li
                    key={i}
                    variants={listVariants}
                    className="flex items-center text-lg lg:text-xl bg-primary-bg dark:bg-dark-primary-bg p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <span className="mr-3 text-accent-color dark:text-dark-accent-color">{emoji}</span> {text}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
