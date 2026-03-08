/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Gloock', 'serif'],
      },
      colors: {
        perry: {
          bg: '#101010',
          text: '#F2F2F2',
          dim: 'rgba(242, 242, 242, 0.5)',
          border: 'rgba(242, 242, 242, 0.1)'
        }
      }
    },
  },
  plugins: [],
}

