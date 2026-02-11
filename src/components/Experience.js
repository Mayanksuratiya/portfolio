import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            company: "Zoodle App",
            role: "React Native Developer",
            period: "2025 - Present",
            location: "New Delhi",
            description: "Working as a core developer building high-performance mobile applications for Android and iOS using React Native.",
            achievements: [
                "Developed and maintained the core React Native mobile application for Android and iOS.",
                "Implemented complex UI/UX designs and animations to enhance user engagement.",
                "Integrated RESTful APIs and optimized app performance for smooth scrolling and faster load times.",
                "Collaborated with the design and backend teams to deliver new features on schedule."
            ],
            links: [
                { label: "Website", url: "https://www.zoodleapp.com/en" },
                { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.zoodleapp&hl=en_IN" }
            ],
            color: "blue"
        },
        {
            company: "Fiverr",
            role: "Web & UI Developer",
            period: "2025 - Present",
            location: "Remote",
            description: "Providing freelance web development services, specializing in React based responsive websites and UI components.",
            achievements: [
                "Built responsive websites using HTML, CSS, JavaScript, and React.",
                "Developed reusable UI components, card layouts, and interactive features.",
                "Integrated APIs and created small web apps like calculators and Netflix-style UIs.",
                "Consistently delivered high-quality, clean code with a focus on performance and bug fixes."
            ],
            links: [],
            color: "violet"
        }
    ];

    return (
        <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400 mb-4">
                        Professional Experience
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        My journey in the tech industry, building real-world applications and delivering value.
                    </p>
                </motion.div>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="relative pl-8 md:pl-0"
                        >
                            {/* Timeline Line (Desktop) */}
                            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 -translate-x-1/2"></div>

                            {/* Timeline Dot (Desktop) */}
                            <div className={`hidden md:block absolute left-1/2 top-0 w-4 h-4 rounded-full border-4 border-white dark:border-slate-900 bg-${exp.color}-500 -translate-x-1/2 shadow-lg`}></div>

                            <div className={`md:flex items-start justify-between gap-10 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>

                                {/* Date & Location (Desktop) */}
                                <div className="hidden md:block w-5/12 text-right">
                                    <div className={`flex flex-col ${index % 2 === 1 ? 'items-start text-left' : 'items-end'}`}>
                                        <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full bg-${exp.color}-100 dark:bg-${exp.color}-900/30 text-${exp.color}-600 dark:text-${exp.color}-400 text-sm font-semibold mb-2`}>
                                            <Calendar size={14} /> {exp.period}
                                        </span>
                                        <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-1">{exp.role}</h3>
                                        <p className="font-semibold text-lg text-slate-700 dark:text-slate-300 mb-2">{exp.company}</p>
                                        <div className="flex items-center gap-1 text-slate-500 text-sm">
                                            <MapPin size={14} /> {exp.location}
                                        </div>
                                    </div>
                                </div>

                                {/* Mobile View Header */}
                                <div className="md:hidden mb-4 border-l-2 border-slate-200 dark:border-slate-800 pl-4 py-1">
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                                    <p className="text-lg font-medium text-blue-600 dark:text-blue-400">{exp.company}</p>
                                    <div className="flex items-center gap-4 mt-2 text-sm text-slate-500">
                                        <span className="flex items-center gap-1"><Calendar size={14} /> {exp.period}</span>
                                        <span className="flex items-center gap-1"><MapPin size={14} /> {exp.location}</span>
                                    </div>
                                </div>

                                {/* Content Card */}
                                <div className="w-full md:w-5/12 bg-white dark:bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-xl hover:shadow-2xl transition-all group">
                                    <p className="text-slate-600 dark:text-slate-300 mb-4 italic">"{exp.description}"</p>
                                    <ul className="space-y-3 mb-6">
                                        {exp.achievements.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                                <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-${exp.color}-500 flex-shrink-0`} />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>

                                    {exp.links.length > 0 && (
                                        <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-700/50">
                                            {exp.links.map((link, lIndex) => (
                                                <a
                                                    key={lIndex}
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                                >
                                                    {link.label} <ExternalLink size={12} />
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
