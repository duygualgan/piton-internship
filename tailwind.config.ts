import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FDCA09',   
        secondary: '#FEBC0A', 
        black1: '#101010',    
        background: '#f4f4f9', 
      },
      fontFamily:{
        manrope: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
