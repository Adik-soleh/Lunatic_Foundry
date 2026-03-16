import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
      },
      colors: {
        'lt-green': '#00E599',
        'lt-green-dark': '#00cc88',
        'lt-purple': '#7C3AED',
        'lt-pastel': '#F3F4F6',
        'lt-dark': '#0F172A',
        'pastel-blue': '#DBEAFE',
        'pastel-pink': '#FCE7F3',
        'pastel-green': '#D1FAE5',
        'pastel-yellow': '#FEF3C7',
        'pastel-purple': '#EDE9FE',
      },
      borderRadius: {
        'button': '9999px',
        'card': '2rem',
      },
    },
  },
  plugins: [],
};

export default config;
