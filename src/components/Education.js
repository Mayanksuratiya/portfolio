import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
    const education = [
        {
            school: "East Point School",
            degree: "Secondary & Senior Secondary (Science & Tech)",
            year: "2022 - 2025",
            description: "Completed secondary education with a rigorous foundation in mathematics, logical reasoning, and computer science fundamentals.",
            highlights: ["Strong foundation in Algorithmic Problem Solving", "Active participant in tech coding and science exhibitions"]
        }
    ];

    return (
        <section id="education" className="py-24 bg-transparent relative z-10 selection:bg-blue-500/20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
                        <GraduationCap size={14} /> Academic Background
                    </div>
                    <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-4">
                        Education & <span className="font-serif italic bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">Foundation</span>
                    </h2>
                    <p className="text-perry-dim max-w-xl mx-auto text-base font-light">
                        Academic credentials and early technical groundwork.
                    </p>
                </motion.div>

                <div className="space-y-6">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-6 sm:p-8 rounded-3xl bg-[#12161f]/80 border border-white/10 backdrop-blur-xl shadow-xl hover:border-white/20 transition-all group"
                        >
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-white/10">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                                        <GraduationCap size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                                            {edu.school}
                                        </h3>
                                        <p className="text-sm text-blue-400 font-medium">{edu.degree}</p>
                                    </div>
                                </div>
                                <span className="text-xs font-mono font-medium text-slate-300 bg-white/5 border border-white/10 px-3 py-1 rounded-full self-start sm:self-center flex items-center gap-1.5">
                                    <Calendar size={12} /> {edu.year}
                                </span>
                            </div>

                            <p className="text-slate-300 text-sm leading-relaxed font-light mb-4">
                                {edu.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {edu.highlights.map((h, i) => (
                                    <span key={i} className="text-xs text-slate-300 bg-white/[0.03] border border-white/[0.08] px-3 py-1 rounded-lg flex items-center gap-1.5">
                                        <Award size={12} className="text-amber-400" /> {h}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
