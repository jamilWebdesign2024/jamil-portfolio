import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/grid';
import { Autoplay, Grid } from 'swiper/modules';
import { motion } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub,
  FaFigma, FaRegChartBar
} from 'react-icons/fa';
import {
  SiTailwindcss, SiVite, SiDaisyui, SiShadcnui, SiAxios,
  SiExpress, SiMongodb, SiNixos
} from 'react-icons/si';
import { MdDesignServices } from "react-icons/md";
import { RiNextjsFill } from 'react-icons/ri';
import { VscVscode } from 'react-icons/vsc';

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-[#e44d26]" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-[#264de4]" /> },
  { name: "JavaScript", icon: <FaJs className="text-[#f0db4f]" /> },
  { name: "React", icon: <FaReact className="text-[#61dafb]" /> },
  { name: "Next.js", icon: <RiNextjsFill className="text-white" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-[#3C873A]" /> },
  { name: "Express.js", icon: <SiExpress className="text-white" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
  { name: "DaisyUI", icon: <SiDaisyui className="text-[#FBBF24]" /> },
  { name: "Shadcn", icon: <SiShadcnui className="text-white" /> },
  { name: "MambaUI", icon: <MdDesignServices className="text-[#3B82F6]" /> },
  { name: "Axios", icon: <SiAxios className="text-[#5A29E4]" /> },
  { name: "Charts", icon: <FaRegChartBar className="text-[#4ade80]" /> },
  { name: "Figma", icon: <FaFigma className="text-[#F24E1E]" /> },
  { name: "Pixo", icon: <SiNixos className="text-[#FF0000]" /> },
  { name: "VS Code", icon: <VscVscode className="text-[#007ACC]" /> },
  { name: "Vite", icon: <SiVite className="text-[#646CFF]" /> },
  { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
  { name: "Github", icon: <FaGithub className="text-white" /> },
  { name: "Mongodb", icon: <SiMongodb className="text-white" /> },
];

const skillVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-28 lg:py-32 dark:bg-black/80">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent-color underline"
          >
            Skills
          </h2>
          <p className='mt-3'>Technologies I've mastered through hands-on projects</p>
        </div>

        <Swiper
          modules={[Autoplay, Grid]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          speed={500}
          grid={{ rows: 2, fill: 'row' }}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 10 },
            640: { slidesPerView: 3, spaceBetween: 20 },
            768: { slidesPerView: 4, spaceBetween: 30 },
            1024: { slidesPerView: 6, spaceBetween: 40 },
          }}
          loop={true}
        >
          {skills.map((skill, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="p-4 skill-card text-center flex flex-col items-center justify-center rounded-xl"
                variants={skillVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <div
                  className="text-4xl md:text-5xl w-16 h-16 flex items-center justify-center rounded-lg mb-3"
                  style={{
                    backgroundColor: 'var(--primary-bg)',
                    border: '1px solid var(--shadow-color)',
                    color: 'var(--heading-color)',
                  }}
                >
                  {skill.icon}
                </div>
                <span className="text-sm md:text-base font-medium" style={{ color: 'var(--accent-color)' }}>
                  {skill.name}
                </span>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Skills;
