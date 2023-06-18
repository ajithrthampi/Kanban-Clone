/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rgba-blue': 'rgba(80, 48, 229, 0.08)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
    fontFamily: {
      Inter: ['Inter', 'sans-serif'],
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

