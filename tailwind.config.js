/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "red",
          secondary: "#FEF0E7",
          accent: "#4D3D3D",
          bgbutton: "Tangerine",
          heading: "#4D3D3D",
          backgroud: "#FF7A00",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
};
