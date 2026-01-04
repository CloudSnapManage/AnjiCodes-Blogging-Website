import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF69B4',
        'vibrant-accent': '#FF69B4', // Bright pink
        'background-light': '#FFF5E1', // Soft cream
        'background-dark': '#1A202C', // Deep navy
        'card-light': '#E6E6FA', // Soft lavender
        'card-dark': '#4A3F6B', // Darker purple
        'text-light': '#2D3748', // Dark grey
        'text-dark': '#E2E8F0', // Light grey
        'subtext-light': '#718096', // Medium grey
        'subtext-dark': '#A39CB5', // Lighter purple
        'muted-pastel-1': '#F4E8D1',
        'muted-pastel-2': '#D8BFD8',
        'muted-pastel-3': '#B0E0E6',
        'code-bg-light': '#F0EBE8',
        'code-bg-dark': '#2a2135',
        'subtle-text-light': '#888888',
        'subtle-text-dark': '#a0a0a0',
      },
      fontFamily: {
        display: ['var(--font-m-plus-rounded-1c)', 'sans-serif'],
        body: ['var(--font-m-plus-rounded-1c)', 'sans-serif'],
        code: ['Fira Code', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        full: '9999px',
      },
      transitionTimingFunction: {
        'out-quart': 'cubic-bezier(0.165, 0.84, 0.44, 1)',
      },
      transitionDuration: {
        '400': '400ms',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
