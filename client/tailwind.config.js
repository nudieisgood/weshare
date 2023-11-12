/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Noto Sans TC", "PT Sans"],
    },
    extend: {
      colors: {
        primary: "#e81980",
      },
    },
    minWidth: {
      sm: "158px",
    },
    minHeight: {
      sm: "158px",
    },
  },

  plugins: [],
};
