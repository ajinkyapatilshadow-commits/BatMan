/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cave: '#071018',
        panel: '#0d1720',
        steel: '#17232d',
        yellow: '#ffc928',
        cyan: '#58c8df',
      },
      fontFamily: {
        display: ['Barlow Condensed', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 22px rgba(255, 201, 40, 0.22)',
      },
    },
  },
  plugins: [],
};
