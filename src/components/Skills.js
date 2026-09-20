import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Database, Wrench, Terminal } from 'lucide-react';

const Skills = () => {
    const skillGroups = [
        {
            category: "Mobile App Development",
            icon: <Smartphone size={20} className="text-blue-400" />,
            description: "Production-ready cross-platform mobile apps",
            items: [
                { name: "React Native", level: "Advanced", tag: "Core" },
                { name: "Nativewind", level: "Advanced", tag: "UI" },
                { name: "Paper UI", level: "Proficient", tag: "Component" },
                { name: "Reanimated 3", level: "Proficient", tag: "Animation" },
                { name: "Android Studio", level: "Proficient", tag: "Native" },
                { name: "Xcode", level: "Proficient", tag: "iOS" }
            ],
            gradient: "from-blue-600/20 via-cyan-600/10 to-transparent",
            borderColor: "border-blue-500/20"
        },
        {
            category: "Frontend & Web Engineering",
            icon: <Code size={20} className="text-indigo-400" />,
            description: "Responsive, accessible & high-converting web apps",
            items: [
                { name: "React 19 / 18", level: "Advanced", tag: "Core" },
                { name: "TypeScript", level: "Proficient", tag: "Type Safe" },
                { name: "JavaScript (ES6+)", level: "Advanced", tag: "Core" },
                { name: "Tailwind CSS", level: "Advanced", tag: "Styling" },
                { name: "HTML5 / Semantic", level: "Advanced", tag: "Markup" },
                { name: "CSS3 / Animations", level: "Advanced", tag: "Styles" }
            ],
            gradient: "from-indigo-600/20 via-violet-600/10 to-transparent",
            borderColor: "border-indigo-500/20"
        },
        {
            category: "State Management & Architecture",
            icon: <Database size={20} className="text-violet-400" />,
            description: "Scalable data stores and reactive pipelines",
            items: [
                { name: "Redux Toolkit", level: "Proficient", tag: "Global State" },
                { name: "Zustand", level: "Proficient", tag: "Lightweight" },
                { name: "REST APIs", level: "Advanced", tag: "Networking" },
                { name: "Firebase / Auth", level: "Proficient", tag: "Backend" },
                { name: "AsyncStorage", level: "Proficient", tag: "Local DB" },
                { name: "Framer Motion", level: "Advanced", tag: "Motion" }
            ],
            gradient: "from-violet-600/20 via-purple-600/10 to-transparent",
            borderColor: "border-violet-500/20"
        },
        {
            category: "Tooling, Versioning & Design",
            icon: <Wrench size={20} className="text-emerald-400" />,
            description: "Professional workflows and ecosystem tools",
            items: [
                { name: "Git & GitHub", level: "Advanced", tag: "VCS" },
                { name: "VS Code", level: "Advanced", tag: "IDE" },
                { name: "Figma", level: "Proficient", tag: "Design/Handoff" },
                { name: "Postman", level: "Proficient", tag: "API Test" },
                { name: "npm / yarn / bun", level: "Proficient", tag: "Package" },
                { name: "Web Vitals", level: "Proficient", tag: "Speed" }
            ],
            gradient: "from-emerald-600/20 via-teal-600/10 to-transparent",
            borderColor: "border-emerald-500/20"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 15 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="skills" className="py-24 bg-transparent relative overflow-hidden selection:bg-blue-500/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
                        <Terminal size={14} /> Skills & Ecosystem
                    </div>
                    <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-4">
                        Technical <span className="font-serif italic bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">Mastery</span>
                    </h2>
                    <p className="text-perry-dim max-w-2xl mx-auto text-base sm:text-lg font-light">
                        A battle-tested tech stack optimized for performance, scalability, and seamless user experiences.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {skillGroups.map((group, index) => (
                        <motion.div
                            key={index}
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className={`rounded-3xl bg-[#12161f]/70 p-6 sm:p-8 border border-white/10 backdrop-blur-xl shadow-xl hover:border-white/20 transition-all duration-300 relative overflow-hidden group`}
                        >
                            {/* Ambient background glow */}
                            <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${group.gradient} blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none rounded-full`}></div>

                            {/* Group Header */}
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2.5 rounded-2xl bg-white/5 border border-white/10 shadow-inner">
                                    {group.icon}
                                </div>
                                <div>
                                    <h3 className="text-lg sm:text-xl font-semibold text-white">
                                        {group.category}
                                    </h3>
                                    <p className="text-xs text-slate-400">{group.description}</p>
                                </div>
                            </div>

                            <div className="h-[1px] w-full bg-white/10 my-4"></div>

                            {/* Skills Chips */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                                {group.items.map((skill, idx) => (
                                    <motion.div
                                        key={idx}
                                        variants={itemVariants}
                                        whileHover={{ y: -2 }}
                                        className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.06] transition-all flex flex-col justify-between gap-1 group/item"
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs font-medium text-white group-hover/item:text-blue-300 transition-colors">
                                                {skill.name}
                                            </span>
                                        </div>
                                        <span className="text-[10px] text-slate-400 font-mono">
                                            {skill.tag}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
