/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        "content-height": "calc(100vh - 100px)",
      },
    },
  },
  plugins: [],
};
