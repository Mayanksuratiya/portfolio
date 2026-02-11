import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Smartphone, Rocket } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "Portfolio App",
            description: "A comprehensive mobile portfolio app built using React Native CLI to showcase my projects. Focused on clean UI, smooth navigation, and performance.",
            technologies: ["React Native", "Nativewind", "React Navigation"],
            category: "Mobile",
            github: "https://github.com/mayanksuratiya",
            icon: <Smartphone size={24} className="text-blue-600 dark:text-blue-400" />
        },
        {
            title: "Simple Chat Bot",
            description: "A chat interface designed with React, featuring message rendering, input handling, and list mapping. Demonstrates strong state management.",
            technologies: ["React", "JavaScript", "HTML", "CSS"],
            category: "Web",
            github: "https://github.com/mayanksuratiya",
            icon: <Code size={24} className="text-violet-600 dark:text-violet-400" />
        },
        {
            title: "Modern Portfolio Website",
            description: "A responsive personal portfolio website showcasing web development skills. Includes smooth scrolling, clean layout sections, and dark mode.",
            technologies: ["HTML", "CSS", "JavaScript", "React"],
            category: "Web",
            github: "https://github.com/mayanksuratiya",
            icon: <Rocket size={24} className="text-indigo-600 dark:text-indigo-400" />
        }
    ];

    return (
        <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900 overflow-hidden relative">
            <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-800/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,transparent,rgba(0,0,0,0.6))] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400 mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        A selection of projects that demonstrate my skills in frontend and mobile development.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -10 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-xl hover:shadow-2xl transition-all group flex flex-col h-full"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-3 bg-slate-100 dark:bg-slate-700/50 rounded-xl group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors">
                                    {project.icon}
                                </div>
                                <div className="flex gap-2">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors" title="View Code">
                                        <Github size={18} />
                                    </a>
                                    {project.demo && (
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" title="Live Demo">
                                            <ExternalLink size={18} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.technologies.map((tech, i) => (
                                    <span key={i} className="px-3 py-1 text-xs font-semibold bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 rounded-full border border-slate-200 dark:border-slate-800">
                                        {tech}
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

export default Projects;
