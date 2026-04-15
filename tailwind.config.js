/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0f0f0f',
        darkGray: '#1a1a1a',
        accent: '#7c3aed',
        accentLight: '#8b5cf6',
      },
      backgroundImage: {
        gradient: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)',
      },
    },
  },
  plugins: [],
}

