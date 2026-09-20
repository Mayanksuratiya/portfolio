import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-[#0b0e14] border-t border-white/10 py-12 relative z-10 selection:bg-blue-500/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold text-white mb-1">
                        Mayank Suratiya
                    </h3>
                    <p className="text-xs text-slate-400">
                        React & React Native Developer • Crafted with React & Tailwind CSS
                    </p>
                </div>

                <div className="flex items-center gap-4">
                    <a
                        href="https://github.com/mayanksuratiya"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors border border-white/10"
                    >
                        <Github size={18} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/mayank-suratiya-76040b384/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors border border-white/10"
                    >
                        <Linkedin size={18} />
                    </a>
                    <a
                        href="mailto:mayanksuratiya84688@gmail.com"
                        aria-label="Email"
                        className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors border border-white/10"
                    >
                        <Mail size={18} />
                    </a>

                    <button
                        onClick={scrollToTop}
                        aria-label="Scroll to Top"
                        className="p-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-md shadow-blue-600/30"
                    >
                        <ArrowUp size={18} />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
