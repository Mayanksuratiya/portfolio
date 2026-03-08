import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, FileText, Code, Smartphone } from 'lucide-react';
import ResumeModal from './ResumeModal';

const Hero = () => {
    const [isResumeOpen, setIsResumeOpen] = useState(false);

    return (
        <>
            <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
            <section id="about" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-transparent">
                {/* Perry Wang Style Radial Glows */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-transparent/[0.03] blur-[100px] pointer-events-none rounded-full" />
                <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-blue-600/[0.05] blur-[120px] pointer-events-none rounded-full" />
                <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-violet-600/[0.05] blur-[120px] pointer-events-none rounded-full" />


                <div className="container px-4 md:px-6 relative z-10 flex flex-col md:flex-row items-center gap-12 lg:gap-20">

                    {/* Left Content */}
                    <div className="flex-1 space-y-8 text-center md:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-[24px] bg-perry-text/[0.03] border border-perry-border text-perry-text/80 text-xs tracking-widest uppercase font-medium mb-10 transition-colors hover:bg-perry-text/[0.08]">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-transparent opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-transparent shadow-[0_0_8px_rgba(255,255,255,0.8)]"></span>
                                </span>
                                status: available
                            </div>

                            <h1 className="text-[3.5rem] md:text-[5rem] font-medium tracking-tight text-perry-text leading-[1.1] mb-8">
                                I build <br className="hidden md:block" />
                                <span className="font-serif italic font-normal bg-clip-text text-transparent bg-gradient-to-b from-[#F2F2F2] to-perry-dim text-glow">
                                    digital experiences
                                </span><br className="hidden md:block" />
                                that matter.
                            </h1>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="text-lg md:text-xl text-perry-dim max-w-2xl mx-auto md:mx-0 leading-relaxed font-light"
                        >
                            I'm <span className="text-perry-text font-medium">Mayank Suratiya</span>, a passionate <span className="text-perry-text font-medium">React & React Native Developer</span> from Delhi. I specialize in crafting modern, responsive web and mobile applications with a focus on performance and user experience.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
                        >
                            <a href="#projects" className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-perry-text text-perry-bg font-medium hover:bg-transparent transition-all flex items-center justify-center gap-2">
                                View My Work <ArrowRight size={18} />
                            </a>

                            <a href="#contact" className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-transparent text-perry-text border border-perry-border font-medium hover:bg-perry-text/5 transition-all flex items-center justify-center gap-2">
                                Contact Me
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="flex items-center justify-center md:justify-start gap-4 mt-8"
                        >
                            <SocialLink href="https://github.com/mayanksuratiya" label="GitHub" />
                            <SocialLink href="https://www.linkedin.com/in/mayank-suratiya-76040b384/" label="LinkedIn" />
                            <button
                                onClick={() => setIsResumeOpen(true)}
                                className="px-4 py-2 rounded-full border border-perry-border bg-perry-text/[0.02] text-perry-text/70 text-sm hover:text-perry-text hover:bg-perry-text/[0.05] transition-all uppercase tracking-wider font-medium"
                            >
                                Resume ↗
                            </button>
                        </motion.div>
                    </div>

                    {/* Right Visual: Device Mockups */}
                    <div className="flex-1 w-full max-w-md md:max-w-none relative h-[500px] flex items-center justify-center mt-12 md:mt-0 perspective-[2000px]">
                        <div className="relative w-full h-full max-w-lg mx-auto transform-style-3d">

                            {/* MacBook 1 (Back Left) */}
                            <motion.div
                                initial={{ opacity: 0, x: -100, y: -50, rotateY: 25, rotateX: 10 }}
                                animate={{ opacity: 1, x: -40, y: -20, rotateY: 20, rotateX: 5 }}
                                transition={{ duration: 1, delay: 0.2, type: "spring" }}
                                className="absolute top-[10%] left-[-10%] w-72 h-48 bg-slate-800 rounded-xl border-4 border-slate-700 shadow-2xl overflow-hidden hidden md:block z-0"
                            >
                                <div className="w-full h-7 bg-slate-900 border-b border-slate-700 flex items-center px-3 gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                                </div>
                                <div className="w-full h-full bg-slate-950 p-4 flex flex-col gap-3">
                                    <div className="w-16 h-16 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">
                                        <Code size={24} className="text-blue-500" />
                                    </div>
                                    <div className="w-3/4 h-2 bg-slate-800 rounded"></div>
                                    <div className="w-1/2 h-2 bg-slate-800 rounded"></div>
                                </div>
                                <div className="absolute -bottom-2 left-[-5%] w-[110%] h-3 bg-slate-400 rounded-b-2xl"></div>
                            </motion.div>

                            {/* MacBook 2 (Front Right) */}
                            <motion.div
                                initial={{ opacity: 0, x: 100, y: 50, rotateY: -25, rotateX: 10 }}
                                animate={{ opacity: 1, x: 60, y: 40, rotateY: -15, rotateX: 5 }}
                                transition={{ duration: 1, delay: 0.4, type: "spring" }}
                                className="absolute top-[20%] right-[-10%] w-80 h-[220px] bg-slate-800 rounded-xl border-4 border-slate-700 shadow-[0_30px_60px_rgba(0,0,0,0.4)] overflow-hidden z-10 hidden md:block group"
                            >
                                <div className="w-full h-7 bg-slate-900 border-b border-slate-700 flex items-center px-3 gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                                </div>
                                <div className="relative w-full h-full bg-slate-950 px-4 pt-4">
                                    <div className="flex gap-4">
                                        <div className="flex-1 h-32 bg-gradient-to-br from-violet-600/20 to-indigo-600/20 border border-violet-500/20 rounded-lg group-hover:scale-[1.02] transition-transform duration-500"></div>
                                        <div className="w-1/3 flex flex-col gap-2">
                                            <div className="w-full h-10 bg-slate-800 rounded"></div>
                                            <div className="w-full h-10 bg-slate-800 rounded"></div>
                                            <div className="w-full h-8 bg-blue-500/20 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute -bottom-2 left-[-5%] w-[110%] h-3 bg-slate-300 rounded-b-2xl shadow-[0_20px_40px_rgba(0,0,0,0.5)] flex justify-center">
                                    <div className="w-1/5 h-1 bg-slate-400 rounded-b-md mt-0.5"></div>
                                </div>
                            </motion.div>

                            {/* iPhone (Center Front) */}
                            <motion.div
                                initial={{ opacity: 0, y: 150 }}
                                animate={{ opacity: 1, y: 80, rotateZ: -5 }}
                                whileHover={{ y: 60, rotateZ: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="absolute bottom-[10%] left-1/2 -translate-x-1/2 md:left-[30%] md:translate-x-0 w-[180px] h-[360px] bg-slate-900 rounded-[2.5rem] border-[6px] border-slate-800 shadow-[0_30px_60px_rgba(0,0,0,0.6)] z-20 overflow-hidden"
                            >
                                {/* Dynamic Island */}
                                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[35%] h-5 bg-black rounded-full z-30"></div>

                                {/* Screen */}
                                <div className="w-full h-full bg-gradient-to-b from-blue-600 via-indigo-700 to-violet-900 p-4 pt-10 flex flex-col relative overflow-hidden">
                                    {/* Ambient blobs inside screen */}
                                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-400 rounded-full blur-2xl opacity-60"></div>
                                    <div className="absolute bottom-0 -left-10 w-32 h-32 bg-violet-400 rounded-full blur-2xl opacity-60"></div>

                                    <div className="relative z-10">
                                        <div className="w-12 h-12 rounded-2xl bg-transparent/20 backdrop-blur border border-white/30 flex items-center justify-center mb-6 shadow-lg">
                                            <Smartphone size={24} className="text-white" />
                                        </div>
                                        <h3 className="text-white font-semibold text-lg leading-tight mb-2">Mobile<br />Experience</h3>
                                        <div className="w-16 h-1 bg-transparent/40 rounded-full mb-6"></div>

                                        <div className="space-y-3">
                                            <div className="w-full h-12 bg-transparent/10 backdrop-blur-md rounded-xl border border-white/10"></div>
                                            <div className="w-full h-12 bg-transparent/10 backdrop-blur-md rounded-xl border border-white/10"></div>
                                        </div>
                                    </div>
                                    <div className="w-1/3 h-1 bg-transparent/30 absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full"></div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

const SocialLink = ({ href, label }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 rounded-full border border-perry-border bg-perry-text/[0.02] text-perry-text/70 text-sm hover:text-perry-text hover:bg-perry-text/[0.05] transition-all uppercase tracking-wider font-medium"
        aria-label={label}
    >
        {label}
    </a>
);

export default Hero;
