/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        swing: {
          '0%': { transform: 'rotate(0deg)' },
          '20%': { transform: 'rotate(12deg) scaleY(1.02)', easing: 'cubic-bezier(0.32, 0, 0.67, 0)' },
          '40%': { transform: 'rotate(-9deg) scaleY(1.015)', easing: 'cubic-bezier(0.33, 1, 0.68, 1)' },
          '60%': { transform: 'rotate(6deg) scaleY(1.01)', easing: 'cubic-bezier(0.32, 0, 0.67, 0)' },
          '80%': { transform: 'rotate(-3deg) scaleY(1.005)', easing: 'cubic-bezier(0.33, 1, 0.68, 1)' },
          '95%': { transform: 'rotate(1deg) scaleY(1.002)', easing: 'cubic-bezier(0.32, 0, 0.67, 0)' },
          '100%': { transform: 'rotate(0deg) scaleY(1)', easing: 'cubic-bezier(0.33, 1, 0.68, 1)' }
        },
        sway: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-1px) rotate(-0.5deg)' },
          '75%': { transform: 'translateX(1px) rotate(0.5deg)' }
        },
        flicker: {
          '0%, 100%': {
            opacity: '1',
            filter: 'brightness(100%)',
          },
          '50%': {
            opacity: '0.98',
            filter: 'brightness(98%)',
          },
          '25%, 75%': {
            opacity: '0.96',
            filter: 'brightness(96%)',
          }
        },
        glow: {
          '0%, 100%': {
            opacity: '0.4',
            transform: 'scale(1)',
            filter: 'blur(8px)',
          },
          '50%': {
            opacity: '0.5',
            transform: 'scale(1.05)',
            filter: 'blur(10px)',
          },
        },
      },
      animation: {
        swing: 'swing 2s cubic-bezier(0.4, 0, 0.2, 1)',
        sway: 'sway 4s ease-in-out infinite',
        flicker: 'flicker 4s ease-in-out infinite',
        glow: 'glow 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}