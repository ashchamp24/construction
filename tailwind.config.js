/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          900: "#111418", // charcoal
          800: "#161a1e",
          700: "#1c2227",
          600: "#232b32",
          500: "#2b353e",
          // accent
          gold: "#C9A227"
        }
      },
      fontFamily: {
        display: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      }
    }
  },
  plugins: [],
};
