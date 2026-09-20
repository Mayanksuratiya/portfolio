import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight, X, CheckCircle, Code2 } from 'lucide-react';

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [selectedProject, setSelectedProject] = useState(null);

    const filterCategories = ['All', 'Mobile Apps', 'Web Apps', 'AI & Tools'];

    const projects = [
        {
            id: 'zoodle',
            title: "ZoodleeApp",
            subtitle: "On-Demand Pet Care & Vet Ecosystem",
            company: "Zoodle, '26",
            period: "2026",
            category: "Mobile Apps",
            description: "A high-performance React Native mobile platform connecting pet parents with verified sitters, groomers, and 24/7 tele-veterinary consultations across India.",
            extendedDescription: "Architected with React Native, TypeScript, and Nativewind for 60 FPS performance. Implemented custom reanimated gestures, real-time map clustering for sitters, and instant video consultation channels.",
            metrics: ["4.9 ★ Rating on Play Store", "60 FPS Fluid Reanimated UI", "+48% Faster Checkout"],
            technologies: ["React Native", "TypeScript", "Tailwind CSS", "Redux Toolkit", "REST APIs"],
            image: "/zoodle-app.png",
            gradient: "from-blue-600/30 via-indigo-600/20 to-cyan-500/10",
            borderGlow: "group-hover:border-blue-500/50",
            demo: "https://play.google.com/store/apps/details?id=com.zoodleapp&hl=en_IN",
            github: "https://github.com/mayanksuratiya",
            featured: true
        },
        {
            id: 'streamline',
            title: "Streamline Analytics",
            subtitle: "Real-time SaaS Business Intelligence Hub",
            company: "Personal, '25",
            period: "2025",
            category: "Web Apps",
            description: "A comprehensive real-time dashboard for monitoring revenue streams, active sessions, retention cohorts, and sales funnels with interactive D3 graphs.",
            extendedDescription: "Built with React and D3.js with dynamic timeline drill-downs. Features exportable PDF analytics summaries, live web-socket feeds, and responsive dark glass aesthetic.",
            metrics: ["Real-time WebSocket Feeds", "Interactive D3 Visualizations", "<150ms Query Times"],
            technologies: ["React", "D3.js", "Node.js", "Tailwind CSS", "Framer Motion"],
            image: "/streamline-analytics.jpg",
            gradient: "from-emerald-600/30 via-teal-600/20 to-cyan-600/10",
            borderGlow: "group-hover:border-emerald-500/50",
            demo: "https://github.com/mayanksuratiya",
            github: "https://github.com/mayanksuratiya",
            featured: false
        },
        {
            id: 'aura-ai',
            title: "Aura - AI Companion",
            subtitle: "Context-Aware Conversational Intelligence",
            company: "Personal, '24",
            period: "2024",
            category: "AI & Tools",
            description: "An AI chat platform with contextual thread memory, streaming markdown answers, code execution snippets, and dynamic voice synthesis.",
            extendedDescription: "Integrates OpenAI API with client-side token caching and streaming SSE responses. Engineered with smooth Framer Motion message transitions and dark mode glass styling.",
            metrics: ["Streaming Markdown Responses", "Zero Lag Input Handling", "Context Preservation"],
            technologies: ["React", "OpenAI API", "Tailwind CSS", "Framer Motion", "Vite"],
            image: "/aura-ai.jpg",
            gradient: "from-violet-600/30 via-fuchsia-600/20 to-indigo-600/10",
            borderGlow: "group-hover:border-violet-500/50",
            demo: "https://github.com/mayanksuratiya",
            github: "https://github.com/mayanksuratiya",
            featured: false
        },
        {
            id: 'devconnect',
            title: "DevPortfolio & Terminal Studio",
            subtitle: "Developer Showcase & CLI Sandbox",
            company: "Personal, '25",
            period: "2025",
            category: "Web Apps",
            description: "An ultra-fast, minimalist portfolio engine featuring simulated bash commands, keyboard navigation shortcuts, and interactive component previews.",
            extendedDescription: "Engineered with React 19, zero-bundle CSS utilities, and custom keyboard listeners. Allows visitors to interact with a developer shell or view clean project cards.",
            metrics: ["100/100 Lighthouse Performance", "Keyboard-first navigation", "Zero Layout Shift"],
            technologies: ["React", "JavaScript", "Tailwind CSS", "CSS Modules"],
            image: null,
            gradient: "from-amber-600/30 via-orange-600/20 to-red-600/10",
            borderGlow: "group-hover:border-amber-500/50",
            demo: "https://github.com/mayanksuratiya",
            github: "https://github.com/mayanksuratiya",
            featured: false
        }
    ];

    const filteredProjects = activeFilter === 'All' 
        ? projects 
        : projects.filter(p => p.category === activeFilter);

    return (
        <section id="projects" className="py-24 bg-transparent relative z-10 selection:bg-blue-500/20">
            {/* Project Quick View Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-md"
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative w-full max-w-3xl bg-[#141820] rounded-3xl border border-white/15 p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh] no-scrollbar z-10"
                        >
                            {/* Modal Header */}
                            <div className="flex items-start justify-between gap-4 mb-6 pb-4 border-b border-white/10">
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-xs font-mono uppercase tracking-wider text-blue-400">
                                            {selectedProject.company}
                                        </span>
                                        <span className="text-slate-500">•</span>
                                        <span className="text-xs text-slate-400">{selectedProject.category}</span>
                                    </div>
                                    <h3 className="text-2xl sm:text-3xl font-bold text-white">
                                        {selectedProject.title}
                                    </h3>
                                    <p className="text-sm text-slate-300 mt-1">{selectedProject.subtitle}</p>
                                </div>

                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors border border-white/10"
                                >
                                    <X size={18} />
                                </button>
                            </div>

                            {/* Extended Content */}
                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Overview</h4>
                                    <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                                        {selectedProject.extendedDescription || selectedProject.description}
                                    </p>
                                </div>

                                {/* Key Highlights */}
                                {selectedProject.metrics && (
                                    <div>
                                        <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Key Highlights & Impact</h4>
                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                            {selectedProject.metrics.map((metric, i) => (
                                                <div key={i} className="p-3 rounded-xl bg-white/[0.04] border border-white/10 flex items-center gap-2">
                                                    <CheckCircle size={15} className="text-emerald-400 flex-shrink-0" />
                                                    <span className="text-xs text-slate-200 font-medium">{metric}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Tech Stack */}
                                <div>
                                    <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Technologies Used</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.technologies.map((tech, i) => (
                                            <span key={i} className="px-3 py-1 text-xs font-medium bg-blue-500/10 text-blue-300 rounded-lg border border-blue-500/20">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
                                    {selectedProject.demo && (
                                        <a
                                            href={selectedProject.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs flex items-center gap-2 shadow-lg shadow-blue-600/30 transition-all"
                                        >
                                            <ExternalLink size={14} /> Live Application / Store
                                        </a>
                                    )}
                                    {selectedProject.github && (
                                        <a
                                            href={selectedProject.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium text-xs flex items-center gap-2 border border-white/10 transition-all"
                                        >
                                            <Github size={14} /> View GitHub Source
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold uppercase tracking-wider mb-4">
                            <Code2 size={14} /> Portfolio Gallery
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight">
                            Selected <span className="font-serif italic bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">Works & Projects</span>
                        </h2>
                        <p className="text-perry-dim max-w-xl text-base mt-2 font-light">
                            Production applications, mobile architectures, and developer tools built with a relentless focus on detail.
                        </p>
                    </motion.div>

                    {/* Filter Tabs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md self-start md:self-end"
                    >
                        {filterCategories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveFilter(cat)}
                                className={`px-4 py-1.5 rounded-xl text-xs font-medium transition-all ${
                                    activeFilter === cat
                                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 font-semibold'
                                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </motion.div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`group relative rounded-3xl bg-[#12161f]/80 border border-white/10 p-6 sm:p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl overflow-hidden flex flex-col justify-between ${project.borderGlow}`}
                        >
                            {/* Ambient card background glow */}
                            <div className={`absolute top-0 right-0 w-72 h-72 bg-gradient-to-br ${project.gradient} blur-3xl opacity-20 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none rounded-full`}></div>

                            <div>
                                {/* Header Row */}
                                <div className="flex items-start justify-between gap-4 mb-4">
                                    <div>
                                        <div className="flex items-center gap-2 mb-1.5">
                                            <span className="text-[11px] font-mono uppercase tracking-wider text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-md border border-blue-500/20">
                                                {project.category}
                                            </span>
                                            <span className="text-xs text-slate-500">•</span>
                                            <span className="text-xs text-slate-400">{project.company}</span>
                                        </div>
                                        <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white group-hover:text-blue-300 transition-colors">
                                            {project.title}
                                        </h3>
                                    </div>

                                    {/* Action Links */}
                                    <div className="flex items-center gap-2 flex-shrink-0">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label="GitHub Repo"
                                                className="p-2.5 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                                            >
                                                <Github size={17} />
                                            </a>
                                        )}
                                        {project.demo && (
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label="Live Demo"
                                                className="p-2.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 hover:bg-blue-600 hover:text-white transition-all"
                                            >
                                                <ArrowUpRight size={17} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light mb-6">
                                    {project.description}
                                </p>

                                {/* Visual Media Box */}
                                <div className="relative w-full aspect-video rounded-2xl bg-[#0a0d14] border border-white/10 overflow-hidden mb-6 group-hover:border-white/20 transition-colors">
                                    {project.image ? (
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-slate-900 via-slate-950 to-black">
                                            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-2">
                                                <Code2 size={24} />
                                            </div>
                                            <span className="text-sm font-semibold text-white">{project.title}</span>
                                            <span className="text-xs text-slate-400 mt-1">Interactive Web / CLI Platform</span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Footer & Tech Tags */}
                            <div>
                                <div className="flex flex-wrap gap-1.5 mb-4">
                                    {project.technologies.map((tech, i) => (
                                        <span key={i} className="px-2.5 py-1 text-[11px] font-medium bg-white/[0.03] text-slate-300 rounded-lg border border-white/[0.08]">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <button
                                    onClick={() => setSelectedProject(project)}
                                    className="w-full py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-semibold text-slate-200 hover:text-white transition-all flex items-center justify-center gap-2 group-hover:border-blue-500/30"
                                >
                                    <span>Explore Case Study & Details</span>
                                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
