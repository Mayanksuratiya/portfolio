import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

const ThemeToggle = ({ theme, toggleTheme }) => {
    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className={`
        p-2 rounded-full backdrop-blur-md border shadow-lg transition-all duration-300
        ${theme === 'dark'
                    ? 'bg-slate-800/80 border-slate-700 text-yellow-400'
                    : 'bg-white/80 border-slate-200 text-slate-700'}
      `}
            aria-label="Toggle theme"
        >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </motion.button>
    );
};

export default ThemeToggle;
