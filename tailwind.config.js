/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bgBody: "url('../src/Images/Background_Body_Img.jpg')",
      },
    },
  },

  plugins: [],
};
