/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        naranja: "#e98512",
        gris_oscuro: "#303030",
        gris_ligero: "#707070",
        azul_delphi: "#004aca",
      },
    },
  },
  plugins: [],
};
