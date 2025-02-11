import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class', // Enables class-based dark mode
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-dark': '#000000', // Custom color for dark mode
        'custom-light': '#FFFFFF', // Custom color for light mode 
        "custom-blue": "rgb(235, 252, 0)", // Define custom text color

      },
      boxShadow: {
        "blue-glow": "0 0 10px rgb(0, 28, 75)",
      },
      backgroundImage: {
        'custom-radial': 'radial-gradient(circle,rgb(0, 28, 75), #000000)', // Radial gradient from black to dark red
        'custom-linear': 'linear-gradient(to bottom, #000000, rgb(0, 7, 20))', // Linear gradient from black to dark red
      },

    },
  },
  plugins: [],
};

export default config;
