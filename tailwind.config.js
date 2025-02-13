/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-toastify/dist/ReactToastify.css",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}