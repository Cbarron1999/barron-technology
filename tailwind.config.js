/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#1E90FF',
        'light-blue': '#00CED1',
      },
    },
  },
  plugins: [],
};
