/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./navigation/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: "#A47148",
        primaryDark: "#6B4F3A",
        primaryLight: "#C8A27C",

        sand: "#E6D3B3",
        cream: "#F7F1E8",

        accent: "#C97B3C",

        textPrimary: "#2B2118",
        textSecondary: "#6E5C4F",

        borderWood: "#D9C2AD",
      },
    },
  },
  plugins: [],
}