/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0a0a0a',
        charcoal: '#141414',
        graphite: '#1c1c1c',
        paper: '#f6f4f0',
        bone: '#ece8e1',
        hairline: '#3a3a3a',
        'hairline-light': '#d8d3ca',
        stone: '#b8b2a7',
      },
      fontFamily: {
        display: ['"Bodoni Moda"', 'Didot', 'Georgia', 'serif'],
        body: ['"Inter"', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.35em',
      },
      screens: {
        xs: '420px',
      },
    },
  },
  plugins: [],
}
