import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, FileText, Code, Smartphone } from 'lucide-react';

const Hero = () => {
    return (
        <section id="about" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
            {/* Background Shapes */}
            <div className="absolute inset-0 overflow-hidden opacity-30 dark:opacity-20 pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                        x: [0, 50, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] bg-blue-500 rounded-full blur-[128px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.2, 0.4, 0.2],
                        x: [0, -50, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-violet-500 rounded-full blur-[128px]"
                />
            </div>

            <div className="container px-4 md:px-6 relative z-10 flex flex-col md:flex-row items-center gap-12 lg:gap-20">

                {/* Left Content */}
                <div className="flex-1 space-y-8 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6 animate-pulse">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            Available for work
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
                            I build <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-violet-600 to-indigo-600 dark:from-blue-400 dark:via-violet-400 dark:to-indigo-400">digital experiences</span> that matter.
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto md:mx-0 leading-relaxed"
                    >
                        I'm <span className="font-bold text-slate-900 dark:text-white">Mayank Suratiya</span>, a passionate <span className="text-blue-600 dark:text-blue-400">React & React Native Developer</span> from Delhi. I specialize in crafting modern, responsive web and mobile applications with a focus on performance and user experience.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
                    >
                        <a href="#projects" className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold hover:bg-slate-800 dark:hover:bg-slate-200 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20">
                            View My Work <ArrowRight size={18} />
                        </a>

                        <a href="#contact" className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-sm">
                            Contact Me
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="flex items-center justify-center md:justify-start gap-6 mt-8"
                    >
                        <SocialLink href="https://github.com/mayanksuratiya" icon={<Github size={22} />} label="GitHub" />
                        <SocialLink href="https://www.linkedin.com/in/mayank-suratiya-76040b384/" icon={<Linkedin size={22} />} label="LinkedIn" />
                        <SocialLink href="mailto:mayanksuratiya84688@gmail.com" icon={<FileText size={22} />} label="Resume" />
                    </motion.div>
                </div>

                {/* Right Visual */}
                <div className="flex-1 w-full max-w-md md:max-w-none relative">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
                        className="relative z-10"
                    >
                        <div className="relative p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 transform md:-rotate-3 hover:rotate-0 transition-transform duration-500">
                            <div className="absolute -top-6 -right-6 w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-xl animate-bounce">
                                <span className="font-bold text-xl">4+</span>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700">
                                    <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400">
                                        <Code size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 dark:text-white">Web Development</h3>
                                        <p className="text-sm text-slate-500 dark:text-slate-400">React, Next.js, TypeScript</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700">
                                    <div className="p-3 rounded-lg bg-violet-100 dark:bg-violet-900/40 text-violet-600 dark:text-violet-400">
                                        <Smartphone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 dark:text-white">Mobile Development</h3>
                                        <p className="text-sm text-slate-500 dark:text-slate-400">React Native, iOS, Android</p>
                                    </div>
                                </div>

                                <div className="p-4 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white">
                                    <div className="flex justify-between items-end">
                                        <div>
                                            <p className="text-blue-100 text-sm font-medium mb-1">Current Role</p>
                                            <h3 className="font-bold text-lg">React Native Developer</h3>
                                            <p className="opacity-90 text-sm">@ Zoodle App</p>
                                        </div>
                                        <div className="h-10 w-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                            <ArrowRight size={20} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const SocialLink = ({ href, icon, label }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:scale-110 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all border border-transparent hover:border-blue-200 dark:hover:border-blue-800"
        aria-label={label}
    >
        {icon}
    </a>
);

export default Hero;
