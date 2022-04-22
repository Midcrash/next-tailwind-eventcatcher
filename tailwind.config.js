const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        texture:
          "linear-gradient(to right, rgba(162,23,77,0.9528186274509804) 0%, rgba(140,47,112,0.9528186274509804) 46%, rgba(78,17,147,0.958420868347339)), url('../assets/images/crowd.jpg')",
      },
    },
  },
  plugins: [],
};
