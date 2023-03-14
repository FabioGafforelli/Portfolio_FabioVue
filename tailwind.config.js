/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    "fontFamily": {
      heading: ['Rajdhani'],
      "circular-std": "Circular Std",
      "rajdhani": "Rajdhani",
      "museomoderno": "MuseoModerno"
    },
    "colors": {
      "jaune": "#FAFF00",
      "bleu": "#000140",

    },
  },
  },
  plugins: [],
}
