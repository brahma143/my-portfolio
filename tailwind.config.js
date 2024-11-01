{import('tailwindcss').Config} 

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Includes all JS, JSX, TS, and TSX files in the src directory
    "./public/index.html" // If you use any Tailwind classes in your HTML files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

// module.exports = {
//   content: [

//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

