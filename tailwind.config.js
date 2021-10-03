module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "intuit-background-color": "#eceef1",
        "intuit-blue": "#0077C5",
        "intuit-border-gray": "#4c4c4c",
        "intuit-text-gray": "rgb(80,80,80)",
      },
      fontFamily: {
        avenir: "AvenirNext",
      },
      screens: {
        "intuit-sm-break": "480px",
      },
      maxWidth: {
        "8xl": "96rem",
      },
      minWidth: {
        "320px": "320px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
