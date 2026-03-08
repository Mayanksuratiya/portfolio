import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "ZoodleeApp",
            company: "Zoodle, '26",
            description: "A comprehensive pet-service platform that connects pet owners with trusted sitters and veterinary services through an intuitive, map-based interface.",
            technologies: ["React Native", "TypeScript", "Tailwind CSS"],
            category: "Full Stack",
            image: "/zoodle-app.png",
            gradient: "from-blue-600/20 to-indigo-600/20 border-blue-500/10"
        },
        {
            title: "Streamline Analytics",
            company: "Personal, '25",
            description: "A comprehensive web dashboard for tracking business metrics in real-time. Features interactive charts and responsive design.",
            technologies: ["React", "D3.js", "Node.js", "Tailwind CSS"],
            category: "Web",
            image: "/streamline-analytics.jpg",
            gradient: "from-emerald-600/20 to-teal-600/20 border-emerald-500/10"
        },
        {
            title: "Aura - AI Companion",
            company: "Personal, '24",
            description: "An artificial intelligence chatbot interface that provides context-aware conversational experiences with seamless API integration.",
            technologies: ["React", "OpenAI API", "Framer Motion"],
            category: "Web",
            image: "/aura-ai.jpg",
            gradient: "from-violet-600/20 to-fuchsia-600/20 border-violet-500/10"
        }
    ];

    return (
        <section id="projects" className="py-32 bg-transparent relative z-10 selection:bg-white/20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-24"
                >
                    <h2 className="text-[2.5rem] md:text-[4rem] font-medium tracking-tight leading-none text-perry-text mb-6">
                        Selected <span className="font-serif italic text-perry-dim">Works</span>
                    </h2>
                    <div className="h-[1px] w-full bg-perry-border"></div>
                </motion.div>

                <div className="flex flex-col gap-24 md:gap-40">
                    {projects.map((project, index) => (
                        <motion.a
                            href={project.demo || project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="group relative cursor-pointer block"
                        >
                            {/* Inner Glare / Top Border Highlight */}
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                            {/* Header Row */}
                            <div className="flex items-end justify-between mb-8 pb-4 border-b border-perry-border">
                                <h3 className="text-3xl md:text-5xl font-medium tracking-tight text-perry-text group-hover:text-white transition-colors">
                                    {project.title}
                                </h3>
                                <div className="p-3 rounded-full bg-white/[0.03] border border-white/5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out">
                                    <ArrowUpRight size={28} className="text-perry-text" />
                                </div>
                            </div>

                            {/* Metadata & Tagline Row */}
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
                                <div className="md:col-span-3 text-perry-dim font-mono text-sm uppercase tracking-wider">
                                    {project.company}
                                </div>
                                <div className="md:col-span-6 text-xl md:text-2xl text-perry-text/80 leading-relaxed font-light">
                                    {project.description}
                                </div>
                                <div className="md:col-span-3 flex md:justify-end items-start gap-4">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-perry-border hover:bg-white/10 transition-colors text-perry-text">
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>

                            {/* Large Media Section Container */}
                            <div className="relative w-full aspect-[4/3] md:aspect-[21/9] rounded-3xl overflow-hidden glass-window transition-transform duration-700 ease-out group-hover:scale-[1.01]">
                                {/* Animated Color Overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-700`}></div>

                                {/* Geometric Mockup Placeholder */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 max-w-2xl aspect-video bg-[#101010] rounded-xl border border-white/10 shadow-2xl overflow-hidden group-hover:-translate-y-[55%] transition-transform duration-700 ease-out">
                                    <div className="w-full h-8 bg-[#151515] border-b border-white/5 flex items-center px-4">
                                        <div className="flex gap-1.5">
                                            <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
                                            <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
                                            <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
                                        </div>
                                    </div>
                                    {project.image ? (
                                        <div className="w-full h-full relative">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay"></div>
                                        </div>
                                    ) : (
                                        <div className="p-8 w-full h-full flex flex-col gap-4">
                                            <div className="w-1/3 h-6 bg-white/5 rounded"></div>
                                            <div className="w-1/2 h-6 bg-white/5 rounded"></div>
                                            <div className="w-full h-32 bg-white/[0.02] rounded mt-4 border border-white/5"></div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Technologies */}
                            <div className="flex flex-wrap gap-2 mt-8">
                                {project.technologies.map((tech, i) => (
                                    <span key={i} className="px-3 py-1 text-xs font-medium uppercase tracking-wider bg-white/[0.02] text-perry-dim rounded-full border border-white/[0.05]">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
