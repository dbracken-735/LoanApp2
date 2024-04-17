/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  daisyui: {
    darkTheme: "supeTheme",
    lightTheme: "supeTheme",
    themes: [
      {
        supeTheme: {
          primary: "#073474",
          secondary: "#9B3131",
          accent: "#627FA7",
          neutral: "#BEC9DA",
          info: "#76A8C2",
          success: "#0d5936",
          error: "#791901",
          warning: "#BF6C0D",
          "base-010": "#DCE8E8",
          "base-050": "#5D6F87",
          "base-100": "#1f2937",
          "base-200": "#111827",
          "base-300": "#030712",
        },
      },
    ],
  },
  theme: {
    screens: {
      phone: "0px",
      tablet: "600px",
      laptop: "1280px",
      desktop: "1920px",
      console: "2400px",
    },
    fontSize: {
      print: "10pt",
      xxs: "0.5rem",
      xs: "0.625rem",
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    extend: {
      width: {
        "1/8": "12.5%",
        "1/9": "11.1111111%",
        "1/10": "10%",
      },
      fontFamily: {
        sans: "Titillium Web",
        serif: "Roboto Serif, Georgia, serif",
        mono: "Roboto Mono, Courier New, mono",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("daisyui"),
  ],
};
