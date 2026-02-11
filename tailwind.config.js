/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0f4c75',
          light: '#3282b8',
          dark: '#0a3451',
        },
        secondary: {
          DEFAULT: '#d4770e',
          dark: '#b86408',
        },
        accent: '#f4a261',
        gold: '#d4af37',
        dark: '#1a1a2e',
        'text-primary': '#2d3748',
        'text-light': '#718096',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      },
      animation: {
        'spin-slow': 'spin 1s linear infinite',
        'pulse-slow': 'pulse 2s ease-in-out infinite',
        'bounce-slow': 'bounce 2s infinite',
        'fade-in-up': 'fadeInUp 0.8s ease forwards',
        'fade-in-down': 'fadeInDown 0.8s ease forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'custom-sm': '0 2px 8px rgba(0,0,0,0.04)',
        'custom-md': '0 4px 20px rgba(0,0,0,0.08)',
        'custom-lg': '0 10px 40px rgba(0,0,0,0.12)',
        'custom-xl': '0 20px 60px rgba(0,0,0,0.15)',
      },
    },
  },
  plugins: [],
}