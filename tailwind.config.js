/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        unetic: {
          blue: {
            50: '#eff6ff',
            100: '#dbeafe',
            200: '#bfdbfe',
            300: '#93c5fd',
            400: '#38bdf8',
            500: '#0284c7', // Sapphire Accent
            600: '#0265dc', // UNETIC Electric Blue
            700: '#0052cc',
            800: '#034ea2', // Deep UNETIC Blue
            900: '#0c2754',
            950: '#071633',
          },
          green: {
            50: '#ecfdf5',
            100: '#d1fae7',
            200: '#a7f3d0',
            300: '#6ee7b7',
            400: '#34d399',
            500: '#00A859', // UNETIC Tech Green
            600: '#059669',
            700: '#047857',
            800: '#065f46',
            900: '#064e3b',
            950: '#022c22',
          },
          gold: {
            50: '#fefce8',
            100: '#fef9c3',
            200: '#fef08a',
            300: '#fde047',
            400: '#facc15',
            500: '#F59E0B', // UNETIC Solar Gold
            600: '#d97706',
            700: '#b45309',
            800: '#92400e',
            900: '#78350f',
            950: '#451a03',
          },
          navy: {
            800: '#0c1b33',
            900: '#071022',
            950: '#040914',
          }
        },
        burgundy: {
          50: '#fdf2f4',
          100: '#fbe6e9',
          200: '#f7cfd6',
          300: '#efa8b5',
          400: '#e3758b',
          500: '#d14764',
          600: '#b82a4a',
          700: '#9b1d3a',
          800: '#800020',
          900: '#540015',
          950: '#34000b',
        },
        gold: {
          50: '#fdfbf4',
          100: '#faf5e3',
          200: '#f4e7be',
          300: '#ebd38f',
          400: '#dfbc5c',
          500: '#D4AF37',
          600: '#b58e24',
          700: '#8f6c1c',
          800: '#75561b',
          900: '#63471c',
        },
        catholic: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#1d4ed8',
          700: '#1e40af',
          800: '#0D47A1',
          900: '#0a3275',
          950: '#061d47',
        },
        techgreen: {
          50: '#eefdf5',
          100: '#d7fae7',
          200: '#b2f4d1',
          300: '#7ae8b3',
          400: '#3bd28e',
          500: '#00A859',
          600: '#008a47',
          700: '#006d3a',
          800: '#055630',
          900: '#064729',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Outfit"', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 20px 40px -15px rgba(128, 0, 32, 0.08), 0 0 25px -5px rgba(212, 175, 55, 0.1)',
        'gold-glow': '0 0 25px -5px rgba(212, 175, 55, 0.35)',
        'blue-glow': '0 0 25px -5px rgba(13, 71, 161, 0.35)',
        'card-hover': '0 22px 45px -10px rgba(0, 0, 0, 0.09), 0 10px 20px -5px rgba(128, 0, 32, 0.04)',
      },
    },
  },
  plugins: [],
}
