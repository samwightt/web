module.exports = {
  purge: ["./src/**/*.tsx", "./src/**/*.ts"],
  theme: {
    extend: {
      fontFamily: {
        mont: [
          "Montserrat",
          "system-ui",
          "BlinkMacSystemFont",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "Fira Sans",
          "Droid Sans",
          "Helvetica Nueu",
          "sans-serif",
        ],
        open: [
          "Open Sans",
          "system-ui",
          "BlinkMacSystemFont",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "Fira Sans",
          "Droid Sans",
          "Helvetica Nueu",
          "sans-serif",
        ],
      },
    },
  },
  variants: {
    textColor: ["responsive", "hover", "focus", "group-hover"],
    opacity: ["responsive", "hover", "focus", "group-hover"],
  },
  plugins: [],
}
