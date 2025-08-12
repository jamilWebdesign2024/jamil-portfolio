import React, { useEffect } from "react";
import {
  User,
  Rocket,
  Star,
  Zap,
  BookOpen,
  Lightbulb,
  Heart,
  Brain,
  Trophy,
  Target,
} from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const borderColors = [
  "border-primary",
  "border-secondary",
  "border-accent",
  "border-info",
  "border-success",
  "border-warning",
  "border-error",
];

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const personalInfo = {
    name: "Md. Jamil Uddin",
    title: "Frontend Developer",
    intro: `My programming journey started in 2023. Since then, I have been deeply interested in coding, watching small tutorial videos that sparked my passion. Later, I found great motivation from Jhankar Mahbub’s coding-related motivational videos. Towards the end of 2024, I enrolled in Programming Hero's Web Development course, where I learned HTML5, CSS3, JavaScript, ES6, React.js, Node.js, Express.js, and MongoDB.`,
    mission:
      "My mission is to build efficient, user-friendly web applications with clean, maintainable code.",
    values: ["Innovation", "Quality", "Learning", "Collaboration"],
  };

  const coreStrengths = [
    {
      title: "Problem Solving",
      description: "Analytical thinking and creative solutions to complex challenges.",
      icon: <Brain className="w-5 h-5 text-accent" />,
    },
    {
      title: "Continuous Learning",
      description: "Staying updated with latest technologies and best practices.",
      icon: <Lightbulb className="w-5 h-5 text-yellow-400" />,
    },
    {
      title: "Attention to Detail",
      description: "Ensuring pixel-perfect designs and clean, maintainable code.",
      icon: <Target className="w-5 h-5 text-primary" />,
    },
    {
      title: "User-Centric Approach",
      description: "Building applications prioritizing user experience.",
      icon: <Heart className="w-5 h-5 text-secondary" />,
    },
  ];

  const journeyMilestones = [
    {
      phase: "Discovery Phase",
      period: "2023",
      title: "Spark of Interest",
      description:
        "Started exploring programming by watching small coding videos, which quickly developed into a passion for digital creation.",
      icon: <Lightbulb className="w-6 h-6 text-yellow-400" />,
    },
    {
      phase: "Inspiration Phase",
      period: "2023-2024",
      title: "Mentorship & Motivation",
      description:
        "Inspired by Jhankar Mahbub’s motivational and coding videos, I solidified my passion for a tech career.",
      icon: <Heart className="w-6 h-6 text-red-500" />,
    },
    {
      phase: "Learning Phase",
      period: "Late 2024",
      title: "Formal Education",
      description:
        "Enrolled in Programming Hero’s Web Development course and gained strong foundational knowledge in frontend and backend technologies.",
      icon: <BookOpen className="w-6 h-6 text-blue-500" />,
    },
    {
      phase: "Growth Phase",
      period: "Present",
      title: "Building Expertise",
      description:
        "Currently mastering React.js, Next.js, TypeScript, and full-stack development through practical projects.",
      icon: <Trophy className="w-6 h-6 text-green-500" />,
    },
  ];

  const boxVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section
      id="about"
      className="bg-base-200 text-base-content min-h-screen py-20 px-6 md:px-12"
      ref={ref}
    >
      <motion.h2
        className="text-center text-4xl font-bold mb-20 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-pulse"
        variants={boxVariants}
        initial="hidden"
        animate={controls}
      >
        About <span className="text-accent">Me</span>
      </motion.h2>


      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left Box - Personal Info */}
        <motion.div
          className={`rounded-3xl border-4 p-10 bg-base-200 shadow-lg
            ${borderColors[0]} md:min-h-[520px]`}
          variants={boxVariants}
          initial="hidden"
          animate={controls}
          transition={{ delay: 0.2 }}
        >
          <div className="flex flex-col items-center mb-8">
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-base-100 shadow-xl mb-4">
              <User className="w-12 h-12" />
            </div>
            <h3 className="text-3xl font-semibold">{personalInfo.name}</h3>
            <p className="badge badge-primary badge-lg mt-2">{personalInfo.title}</p>
          </div>

          <p className="mb-6 text-base-content/90 leading-relaxed">{personalInfo.intro}</p>

          <div className="mb-6 p-6 bg-primary/10 rounded-xl border border-primary/30">
            <h4 className="text-xl font-semibold flex items-center gap-2 mb-3">
              <Rocket className="w-6 h-6 text-primary" />
              Mission
            </h4>
            <p>{personalInfo.mission}</p>
          </div>

          <div className="mb-6">
            <h4 className="text-xl font-semibold flex items-center gap-2 mb-3">
              <Star className="w-6 h-6 text-secondary" />
              Core Values
            </h4>
            <div className="flex flex-wrap gap-3">
              {personalInfo.values.map((val) => (
                <span
                  key={val}
                  className="badge badge-outline badge-secondary px-4 py-2"
                >
                  {val}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold flex items-center gap-2 mb-3">
              <Zap className="w-6 h-6 text-accent" />
              Core Strengths
            </h4>
            <div className="space-y-4">
              {coreStrengths.map(({ title, description, icon }) => (
                <div
                  key={title}
                  className="flex items-start gap-4 p-4 bg-base-300 rounded-xl border border-accent/20"
                >
                  <div className="text-accent">{icon}</div>
                  <div>
                    <h5 className="font-semibold">{title}</h5>
                    <p className="text-sm text-base-content/80">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Box - Journey */}
        <motion.div
          className={`rounded-3xl border-4 p-10 bg-base-200 shadow-lg
            ${borderColors[1]} md:min-h-[520px] flex flex-col justify-start`}
          variants={boxVariants}
          initial="hidden"
          animate={controls}
          transition={{ delay: 0.4 }}
        >
          <div>
            <div className="flex flex-col items-center mb-10">
              <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-secondary to-primary flex items-center justify-center text-base-100 shadow-xl mb-4">
                <BookOpen className="w-12 h-12" />
              </div>
              <h3 className="text-3xl font-semibold">My Journey</h3>
              <p className="text-sm text-base-content/70 mt-1 italic">2023 – Present</p>
            </div>

            <div className="space-y-6">
              {journeyMilestones.map(({ phase, period, title, description, icon }, i) => (
                <div
                  key={phase}
                  className={`border-l-4 pl-6 py-4 rounded-md shadow-sm
                    ${borderColors[i % borderColors.length]
                    } border-opacity-60 hover:bg-base-300 transition-colors duration-300`}
                >
                  <div className="flex items-center gap-3 mb-1">
                    <div className="text-xl">{icon}</div>
                    <h4 className="text-lg font-semibold">{title}</h4>
                    <span className="ml-auto text-xs font-mono text-base-content/60">{period}</span>
                  </div>
                  <p className="text-base-content/80 text-sm leading-relaxed">{description}</p>
                  <span className="badge badge-outline badge-info mt-2 text-xs">{phase}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
