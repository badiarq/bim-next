/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./**/**/*.{html,js,jsx,ts,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "#023047",
          dark15: "#02304726",
          middle: "#219ebc",
          middle15: "#219ebc26",
          light: "#8ecae6",
          light15: "#8ecae266"
        },
        secondary: {
          dark: "#fb8500",
          dark15: "#fb850026",
          middle: "#ffb703",
          middle15: "#ffb70326",
          light: "#EED8A4",
          light15: "#EED8A426"
        },
        dark: "#1f2128",
        middleDark: "#53576a",
        lightyellow: "#fefdf2",
      },
			fontFamily: {
				body: ["Golos Text"]
			}
    },
  },
  plugins: [require('@tailwindcss/forms')],
}