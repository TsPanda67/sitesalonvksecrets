/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary': {
          100: '#FFF8F7',
          200: '#FFE9E6',
          300: '#F8CFC7',
          400: '#F1BCB6',
          500: '#EDA9A1',
        },
        'accent': {
          100: '#D8BFB7',
          300: '#C4A093',
          500: '#E8B4B8',
          700: '#7D5244',
          900: '#3E2A26',
        },
        'text': {
          dark: '#3B2B25',
          medium: '#5E4D47',
          light: '#8A7A74',
        },
        'background': {
          light: '#FFFBF9',
          medium: '#F5F5F5',
        },
      },
      fontFamily: {
        'display': ['Playfair Display', 'Georgia', 'serif'],
        'script': ['Dancing Script', 'cursive'],
        'sans': ['Montserrat', 'Helvetica', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(62, 42, 38, 0.05)',
        'medium': '0 8px 30px rgba(62, 42, 38, 0.1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}