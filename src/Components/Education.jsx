import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GraduationCap, BookOpen, School, Award, ChevronsRight, Bookmark, Clock, Calendar, BookText } from 'lucide-react';

const educationData = [
    {
        degree: 'Diploma in Engineering',
        institution: 'Chattogram Polytechnic Institute',
        duration: '2020 - Present',
        details: [
            'Department: Electronics',
            'Board: Bangladesh Technical Education Board (BTEB)',
            'Currently pursuing with excellent academic records'
        ],
        icon: <School className="w-6 h-6" />,
        color: 'from-purple-500 to-indigo-600',
        highlight: 'bg-gradient-to-r from-purple-500/20 to-indigo-600/20',
        status: 'Current'
    },
    {
        degree: 'Secondary School Certificate',
        institution: 'Purba Sandwip ML High School',
        duration: '2019',
        details: [
            'Group: Science',
            'Board: Chattogram',
            'Achieved outstanding results in core science subjects'
        ],
        icon: <BookOpen className="w-6 h-6" />,
        color: 'from-cyan-500 to-blue-600',
        highlight: 'bg-gradient-to-r from-cyan-500/20 to-blue-600/20',
        status: 'Completed'
    }
];

const Education = () => {
    return (
        <section id="education" className="relative py-24 bg-gray-950 overflow-hidden">
            {/* Background Animation */}
            <div className="absolute inset-0 overflow-hidden opacity-20 z-0">
                <motion.div
                    initial={{ x: -100, y: -100 }}
                    animate={{
                        x: [0, 100, 0, -100, 0],
                        y: [0, 50, 100, 50, 0],
                        rotate: [0, 180, 360]
                    }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-0 left-0 w-64 h-64 rounded-full bg-purple-600/30 filter blur-3xl"
                />
                <motion.div
                    initial={{ x: 100, y: 100 }}
                    animate={{
                        x: [0, -100, 0, 100, 0],
                        y: [0, -50, -100, -50, 0],
                        rotate: [0, 180, 360]
                    }}
                    transition={{
                        duration: 35,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 5
                    }}
                    className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-blue-600/30 filter blur-3xl"
                />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.5, type: "spring" }}
                        viewport={{ once: true }}
                        className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-gray-800 border border-gray-700 mb-6"
                    >
                        <Award className="w-5 h-5 text-cyan-400 mr-2" />
                        <span className="text-sm font-medium text-cyan-400">ACADEMIC PATH</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="text-4xl sm:text-5xl font-bold text-white mb-4"
                    >
                        Education <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Timeline</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="text-lg text-gray-400 max-w-2xl mx-auto"
                    >
                        My journey through formal education and specialized training
                    </motion.p>
                </motion.div>

                {/* Timeline Line */}
                <div className="relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gray-800 z-0 hidden sm:block">
                        {/* animated line fill */}
                        <motion.div
                            initial={{ height: 0 }}
                            whileInView={{ height: '100%' }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                            viewport={{ once: true }}
                            className="absolute top-0 left-0 w-full bg-gradient-to-b from-cyan-500 to-blue-600 origin-top"
                        />
                    </div>

                    {/* Cards */}
                    <div className="space-y-16 sm:space-y-24 relative z-10">
                        {educationData.map((edu, index) => (
                            <EducationCard
                                key={index}
                                education={edu}
                                index={index}
                                isEven={index % 2 === 0}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const EducationCard = ({ education, index, isEven }) => {
    const cardRef = React.useRef();
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["0 1", "1 0"]
    });

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
    const yProgress = useTransform(scrollYProgress, [0, 1], [50, 0]);
    const xProgress = useTransform(scrollYProgress, [0, 1], isEven ? [100, 0] : [-100, 0]);

    return (
        <motion.div
            ref={cardRef}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress,
                y: yProgress,
                x: xProgress
            }}
            className={`relative group sm:flex ${isEven ? 'sm:justify-start' : 'sm:justify-end'} z-10`}
        >
            {/* Timeline dot */}
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="absolute left-1/2 top-6 -translate-x-1/2 w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 hidden sm:block z-20"
            >
                <div className="absolute inset-0 rounded-full bg-white/10 animate-ping" />
                <Bookmark className="absolute -left-6 -top-6 w-8 h-8 text-purple-400/50" />
            </motion.div>

            {/* Card */}
            <div className={`relative sm:w-[calc(50%-70px)] ${isEven ? 'sm:ml-10' : 'sm:mr-10'} mt-6`}>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.3 }}
                    viewport={{ once: true }}
                    className={`absolute -inset-0.5 rounded-xl bg-gradient-to-r ${education.color} blur-md group-hover:opacity-100 opacity-0 transition-opacity duration-300`}
                />

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                    className={`absolute inset-0 rounded-xl ${education.highlight} -z-10`}
                />

                <div className="relative bg-gray-900 border border-gray-800 rounded-xl p-6 sm:p-8 backdrop-blur-sm transition-all duration-300 group-hover:border-gray-700 overflow-hidden z-20">
                    <div className={`absolute top-0 right-0 px-4 py-1.5 text-xs font-bold text-white rounded-bl-lg flex items-center ${education.color}`}>
                        {education.status === 'Current' ? <Clock className="w-3 h-3 mr-1" /> : <Calendar className="w-3 h-3 mr-1" />}
                        {education.status}
                    </div>

                    <div className="flex flex-col md:flex-row gap-6">
                        <motion.div
                            initial={{ rotate: -15, scale: 0.8 }}
                            whileInView={{ rotate: 0, scale: 1 }}
                            whileHover={{ rotate: 5, scale: 1.1 }}
                            transition={{ duration: 0.5, type: "spring" }}
                            className="flex-shrink-0"
                        >
                            <div className={`p-1 rounded-lg ${education.highlight}`}>
                                <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-gray-800 backdrop-blur-sm">
                                    <span className={education.color.includes("purple") ? 'text-purple-400' : 'text-cyan-400'}>
                                        {education.icon}
                                    </span>
                                </div>
                            </div>
                        </motion.div>

                        <div className="flex-grow">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                                <motion.h3
                                    initial={{ x: 20, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.4, delay: 0.2 }}
                                    viewport={{ once: true }}
                                    className="text-xl font-bold text-white"
                                >
                                    {education.degree}
                                </motion.h3>
                                <motion.div
                                    initial={{ x: -20, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.4, delay: 0.3 }}
                                    viewport={{ once: true }}
                                    className="flex items-center text-sm font-medium text-gray-400"
                                >
                                    <Clock className="w-4 h-4 mr-1" />
                                    {education.duration}
                                </motion.div>
                            </div>

                            <motion.h4
                                initial={{ y: 10, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.4, delay: 0.4 }}
                                viewport={{ once: true }}
                                className={`text-lg font-semibold mb-4 flex items-center ${education.color.includes("purple") ? 'text-purple-400' : 'text-cyan-400'}`}
                            >
                                <BookText className="w-5 h-5 mr-2" />
                                {education.institution}
                            </motion.h4>

                            <ul className="space-y-3">
                                {education.details.map((detail, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ x: 20, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex items-start text-gray-300"
                                    >
                                        <ChevronsRight className="w-4 h-4 mt-1 mr-2 flex-shrink-0 text-cyan-400" />
                                        <span className="text-sm md:text-base">{detail}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Education;
