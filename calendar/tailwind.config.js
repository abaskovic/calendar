/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
  
    extend: {
      colors: {
        mint: '#e6f6f6',
        darkMint: '#00a6a6',
      
      },
      
    
    },
  },
  plugins: [],
  experimental:{
    applyComplexClasses:true
  }
};
