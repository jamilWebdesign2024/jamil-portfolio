import React from 'react';
import photo from '../assets/photo.png';
import { motion } from 'framer-motion';

// Framer Motion variants for text content animation
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Framer Motion variants for list items
const listVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Image and Animated Border Section */}
          <motion.div
            className="w-full md:w-1/3 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="skill-border p-2">
              <div className="w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full">
                <img
                  src={photo}
                  alt="A passionate self-proclaimed designer and web developer"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </motion.div>

          {/* Text Content Section */}
          <div className="w-full md:w-2/3 text-center md:text-left">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={textVariants}
            >
              Curious about me? Here you have it:
            </motion.h2>

            <motion.p
              className="mb-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={textVariants}
              transition={{ delay: 0.2 }}
            >
              I'm a passionate, <strong className="text-blue-500 dark:text-blue-400">self-proclaimed designer</strong> who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.
            </motion.p>

            <motion.p
              className="mb-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={textVariants}
              transition={{ delay: 0.4 }}
            >
              I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.
            </motion.p>

            <motion.p
              className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={textVariants}
              transition={{ delay: 0.6 }}
            >
              I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.
            </motion.p>

            <motion.p
              className="mb-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={textVariants}
              transition={{ delay: 0.8 }}
            >
              When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-400 hover:underline">Twitter</a> where I share tech-related bites and build in public, or you can follow me on <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-400 hover:underline">GitHub</a>.
            </motion.p>

            <motion.h3
              className="text-xl font-bold mb-4 mt-6 text-gray-900 dark:text-white"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={textVariants}
              transition={{ delay: 1.0 }}
            >
              Finally, some quick bits about me.
            </motion.h3>

            <motion.ul
              className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
            >
              <motion.li variants={listVariants} className="flex items-center text-lg"><span className="mr-2">🎓</span> B.E. in Computer Engineering</motion.li>
              <motion.li variants={listVariants} className="flex items-center text-lg"><span className="mr-2">👨‍💻</span> Full time freelancer</motion.li>
              <motion.li variants={listVariants} className="flex items-center text-lg"><span className="mr-2">💡</span> Avid learner</motion.li>
              <motion.li variants={listVariants} className="flex items-center text-lg"><span className="mr-2">🚀</span> Aspiring indie hacker</motion.li>
            </motion.ul>

            <motion.p
              className="mt-8 text-lg text-gray-700 dark:text-gray-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={textVariants}
              transition={{ delay: 1.4 }}
            >
              One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;