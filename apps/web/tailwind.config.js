/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'custom': ['fashion', 'sans'],
      },
      screens: {
        'xs': { 'raw': '(min-width: 410px)' },
      }
    },
  },
  plugins: [],
};
