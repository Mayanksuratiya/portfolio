import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

const ThemeToggle = ({ theme, toggleTheme }) => {
    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className={`
        p-2 rounded-full transition-all duration-300 bg-transparent/5 border border-white/10 text-perry-text hover:bg-transparent/10
      `}
            aria-label="Toggle theme"
        >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </motion.button>
    );
};

export default ThemeToggle;
