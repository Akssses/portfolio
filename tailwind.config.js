module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          "blue": "#4268dd",
          "dark": "var(--primary-dark)",
        },
      }
    },
    
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "510px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
      }
    },
  },
  plugins: [],
}