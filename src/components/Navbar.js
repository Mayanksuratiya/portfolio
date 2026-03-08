import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Smartphone, Mail } from 'lucide-react';
// import logo from '../logo.png';

const Navbar = ({ theme, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Education', href: '#education' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[95%] max-w-4xl"
        >
            <div className={`mx-auto px-6 py-2 rounded-[24px] transition-all duration-300 ${scrolled
                ? 'bg-[#151515]/80 backdrop-blur-xl border border-white/10 shadow-2xl'
                : 'bg-transparent/[0.03] backdrop-blur-md border border-white/[0.05]'
                }`}>
                <div className="flex justify-between items-center h-16">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex-shrink-0 flex items-center gap-2 cursor-pointer"
                    >
                        <span className="font-medium text-lg tracking-tight text-perry-text">
                            Mayank Suratiya
                        </span>
                    </motion.div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-perry-text/60 hover:text-perry-text transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-perry-text transition-all group-hover:w-full" />
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-lg text-perry-text hover:bg-transparent/5 transition-colors"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-transparent border-b border-white/[0.1] overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-3 rounded-lg text-base font-medium text-perry-dim hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="flex justify-center gap-6 pt-4 mt-4 border-t border-white/[0.1]">
                                <a href="https://github.com/mayanksuratiya" target="_blank" rel="noopener noreferrer" className="text-perry-dim hover:text-perry-text dark:hover:text-white transition-colors">
                                    <Github size={20} />
                                </a>
                                <a href="https://www.linkedin.com/in/mayank-suratiya-76040b384/" target="_blank" rel="noopener noreferrer" className="text-perry-dim hover:text-perry-text dark:hover:text-white transition-colors">
                                    <Linkedin size={20} />
                                </a>
                                <a href="tel:+918527324066" className="text-perry-dim hover:text-perry-text dark:hover:text-white transition-colors">
                                    <Smartphone size={20} />
                                </a>
                                <a href="mailto:mayanksuratiya84688@gmail.com" className="text-perry-dim hover:text-perry-text dark:hover:text-white transition-colors">
                                    <Mail size={20} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
