module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        backlight: "#ECECEC",
        backpanel: "#F6F6F6",
        primary: "",
        secondary: "",
        lighttxt: "#BABAC7",
      },
      backgroundImage: {},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
