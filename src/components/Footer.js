import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-transparent border-t border-white/[0.1] py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">

                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-perry-text to-perry-dim font-serif italic text-glow mb-2">
                        Mayank Suratiya
                    </h2>
                    <p className="text-perry-dim text-sm">
                        © {new Date().getFullYear()} All rights reserved.
                    </p>
                </div>

                <div className="flex gap-6">
                    <a href="https://github.com/mayanksuratiya" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-white/[0.05] dark:hover:bg-slate-800 text-perry-dim hover:text-perry-text dark:hover:text-white transition-colors">
                        <Github size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/mayank-suratiya-76040b384/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-white/[0.05] dark:hover:bg-slate-800 text-perry-dim hover:text-perry-text dark:hover:text-white transition-colors">
                        <Linkedin size={20} />
                    </a>
                    <a href="mailto:mayanksuratiya84688@gmail.com" className="p-2 rounded-full hover:bg-white/[0.05] dark:hover:bg-slate-800 text-perry-dim hover:text-perry-text dark:hover:text-white transition-colors">
                        <Mail size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
