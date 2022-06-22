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
        panelhover: "#F0F0F0",
        hovertxt: "#575757",
      },
      backgroundImage: {},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
