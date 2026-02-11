import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

const Education = () => {
    const education = [
        {
            school: "East Point School",
            degree: "Secondary & Senior Secondary",
            year: "2022 - 2025",
            description: "Completed secondary education with a strong foundation in science and mathematics.",
        }
    ];

    return (
        <section id="education" className="py-20 bg-slate-50 dark:bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400 mb-4">
                        Education
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        My academic background and qualifications.
                    </p>
                </motion.div>

                <div className="space-y-8 max-w-3xl mx-auto">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-800"
                        >
                            <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-blue-500 border-4 border-white dark:border-slate-900 shadow-md"></div>

                            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700/50 hover:shadow-md transition-shadow">
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                                    <h3 className="text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
                                        <BookOpen size={20} className="text-blue-500" />
                                        {edu.school}
                                    </h3>
                                    <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700/50 px-3 py-1 rounded-full mt-2 sm:mt-0">
                                        {edu.year}
                                    </span>
                                </div>
                                <h4 className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-2">
                                    {edu.degree}
                                </h4>
                                <p className="text-slate-600 dark:text-slate-400 text-sm">
                                    {edu.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
