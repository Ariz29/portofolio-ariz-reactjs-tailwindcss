/** @type {import('tailwindcss').Config} */
export default {
  // 1. AKTIFKAN METODE CLASS UNTUK SWITCH DARK MODE MANUAL
  darkMode: "class", 
  
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Menambahkan Montserrat sebagai font sans-serif utama proyek
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      
      // Colors Used in the Project
      colors: {
        primary: "#f6a64f",
        secondary: "#b56141",
        background: "#FFEFD5", 
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(to right, #faa44f, #ac573f)",
      },
    },
  },
  plugins: [],
}