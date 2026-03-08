import { motion } from 'framer-motion';

const Skills = () => {
    const skills = [
        { category: "Frontend", items: ["React", "HTML", "CSS", "Tailwind CSS", "JavaScript", "TypeScript", "Redux Toolkit", "Zustand"] },
        { category: "Mobile", items: ["React Native", "Nativewind", "Paper UI"] },
        { category: "Tools & Others", items: ["Git", "GitHub", "VS Code", "Android Studio", "Xcode", "Figma"] },
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
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="skills" className="py-20 bg-transparent relative overflow-hidden">


            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-perry-text to-perry-dim font-serif italic text-glow mb-4">
                        Technical Skills
                    </h2>
                    <p className="text-perry-dim max-w-2xl mx-auto">
                        A comprehensive list of technologies and tools I've mastered to build high-quality applications.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={index}
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="bg-transparent backdrop-blur-sm rounded-2xl p-8 border border-white/[0.1] shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <h3 className="text-xl font-bold text-perry-text mb-6 border-b border-white/[0.1] pb-2">
                                {skillGroup.category}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {skillGroup.items.map((skill, idx) => (
                                    <motion.span
                                        key={idx}
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.05 }}
                                        className="px-4 py-2 rounded-lg bg-transparent bg-white/[0.05] border border-white/[0.1] text-perry-text text-perry-dim text-sm font-medium shadow-sm hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-default"
                                    >
                                        {skill}
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

export default Skills;
