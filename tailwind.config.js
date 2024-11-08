/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '425px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Inter, sans-serif;'],
      playfair: ['"Playfair Display", sans-serif'],
    },
    extend: {
      colors: {
        'black' : '#0f0f0f',
        'whiteee' : '#e5e5e5',
        'grayy': '#262626',
        'transparent': '#0000',
        'jungle-green': '#95b43a',
        'chinese-black': '#141414',
        'dark-gray': '#707070',
      },
      backgroundImage: {
        'feature-sec': "url('./images/Features Image-p-1080.webp')",
        'bg-solution': "url('./images/Solution BG Image-p-1600.webp')",
      }
    },
  },
  plugins: [],
}

