export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#010101",
        primary: "#b6895b",
      },
      fontFamily: {
        Poppins : ["Poppins", "serif"]
      },
      container: {
        center: true
      }
    },
  },
  plugins: [],
} 
