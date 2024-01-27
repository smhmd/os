/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./{assets,components,public,views}/**/*.{tsx,svg}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

