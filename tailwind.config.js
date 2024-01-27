/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderColor: {
        "teal-200": "#377e89",
      },
      colors: {
        mintcream: "#f7fdf8",
        azure: "#eaf5f6",
        teal: {
          100: "#2d7f8a",
          200: "#2a7d88",
          300: "#236b72",
          400: "rgba(35, 107, 114, 0.58)",
          500: "rgba(35, 107, 114, 0.07)",
          600: "rgba(45, 127, 138, 0.5)",
        },
        fuchsia: "#db00ff",
        chartreuse: "#70ff00",
        tomato: "#ff5151",
        white: "#fff",
        salmon: "#fe6466",
        steelblue: "#135b7a",
        gray: "#192747",
        darkslategray: "#474747",
        lightgray: "#d1d1d1",
        aliceblue: "#eaf5f7",
        gainsboro: "#d1dbde",
        cadetblue: "#4799a3",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        "3xs": "10px",
        "8xs": "5px",
        "4xl-5": "23.5px",
      },
    },
    fontSize: {
      "4xs-1": "0.51rem",
      "lg-9": "1.18rem",
      "mini-1": "0.88rem",
      "xs-4": "0.71rem",
      smi: "0.81rem",
      "16xl": "2.19rem",
      "9xl": "1.75rem",
      "2xl": "1.31rem",
      sm: "0.88rem",
      "xl-5": "1.28rem",
      base: "1rem",
      lg: "1.13rem",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
