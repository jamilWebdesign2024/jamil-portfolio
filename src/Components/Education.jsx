import React, { useEffect, useRef } from "react";
import { School, BookOpen, Calendar, MapPin, Award, GraduationCap } from "lucide-react";

const Education = () => {
    const sectionRef = useRef(null);

    const educationData = [
        {
            degree: "Diploma in Engineering",
            institution: "Chattogram Polytechnic Institute",
            duration: "2020 - Present",
            details: [
                "Department: Electronics",
                "Board: Bangladesh Technical Education Board (BTEB)",
                "Currently pursuing with excellent academic records",
            ],
            icon: <School className="w-6 h-6" />,
            status: "Current",
            location: "Chattogram, Bangladesh",
            type: "Diploma",
        },
        {
            degree: "Secondary School Certificate",
            institution: "Purba Sandwip ML High School",
            duration: "2019",
            details: [
                "Group: Science",
                "Board: Chattogram",
                "Achieved outstanding results in core science subjects",
            ],
            icon: <BookOpen className="w-6 h-6" />,
            status: "Completed",
            location: "Sandwip, Chattogram",
            type: "SSC",
        },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, i) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add("animate-fadeInUp");
                        }, i * 150); // staggered animation
                    }
                });
            },
            { threshold: 0.1 }
        );

        const cards = sectionRef.current?.querySelectorAll(".edu-card");
        cards?.forEach((card) => observer.observe(card));

        return () => observer.disconnect();
    }, []);

    return (
        <section id="education" ref={sectionRef} className="py-16 px-4 bg-base-200">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="flex justify-center items-center gap-3 mb-4">
                        <GraduationCap className="w-10 h-10 text-primary" />
                        <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-pulse">Education</h2>
                    </div>
                    <p className="text-lg opacity-70">
                        My academic journey and key milestones.
                    </p>
                    <div className="divider divider-primary w-24 mx-auto"></div>
                </div>

                {/* Cards */}
                <div className="grid gap-6 sm:grid-cols-2">
                    {educationData.map((edu, index) => (
                        <div
                            key={index}
                            className="edu-card opacity-0 transform translate-y-6 transition-all duration-700"
                        >
                            <div className="cardshadow-md hover:shadow-xl rounded-2xl transition-all bg-base-100 border border-base-300">
                                <div className="card-body">
                                    {/* Icon + Title */}
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 rounded-full bg-primary text-primary-content">
                                            {edu.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold">{edu.degree}</h3>
                                            <p className="flex items-center gap-1 text-sm text-primary">
                                                <Award className="w-4 h-4" /> {edu.institution}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Info */}
                                    <div className="flex flex-wrap gap-3 text-sm opacity-70 mb-3">
                                        <span className="flex items-center gap-1">
                                            <Calendar className="w-4 h-4" /> {edu.duration}
                                        </span>
                                        <span>•</span>
                                        <span className="flex items-center gap-1">
                                            <MapPin className="w-4 h-4" /> {edu.location}
                                        </span>
                                    </div>

                                    {/* Details */}
                                    <ul className="list-disc list-inside space-y-1 text-sm">
                                        {edu.details.map((detail, i) => (
                                            <li key={i}>{detail}</li>
                                        ))}
                                    </ul>

                                    {/* Status */}
                                    <div className="mt-4 flex gap-2">
                                        <div
                                            className={`badge ${edu.status === "Current"
                                                ? "badge-primary"
                                                : "badge-success"
                                                }`}
                                        >
                                            {edu.status}
                                        </div>
                                        <div className="badge badge-outline">{edu.type}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Animation */}
            <style>{`
        .animate-fadeInUp {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
        </section>
    );
};

export default Education;
