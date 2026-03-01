/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0D7C66',
          dark: '#0a6254',
          light: '#1a9e84',
        },
        accent: {
          DEFAULT: '#2ECC71',
          dark: '#27ae60',
          light: '#58d68d',
        },
        cream: {
          DEFAULT: '#F0FBF7',
          dark: '#e0f5ec',
        },
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
