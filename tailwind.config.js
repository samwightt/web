module.exports = {
  purge: ["./src/**/*.tsx", "./src/**/*.ts"],
  theme: {
    extend: {
      fontSize: {
        xs: ".75rem",
        sm: ".875rem",
        tiny: ".875rem",
        base: "1rem",
        lg: "1.125rem",
        "1/4xl": "1.20rem",
        "2/4xl": "1.25rem",
        "3/4xl": "1.30rem",
        xl: "1.38rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "7xl": "5rem",
      },
      fontFamily: {
        lato: [
          "Inter",
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
          "Inter",
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
