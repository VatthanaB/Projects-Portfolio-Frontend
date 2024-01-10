import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: "rgb(1, 19, 48)",
        customDarkOrange: "#ff5823",
      },
    },
  },
  plugins: [daisyui],
};
