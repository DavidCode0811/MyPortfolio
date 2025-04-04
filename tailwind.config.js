/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(150px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(150px) rotate(-360deg)' }
        },
        'spin-clockwise': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        'spin-counterclockwise': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' }
        },
        progress: {
          '0%': { width: '0%' },
          '100%': { width: 'var(--progress-width)' }
        }
      },
      animation: {
        'orbit-slow': 'orbit 12s linear infinite',
        'orbit-medium': 'orbit 10s linear infinite',
        'orbit-fast': 'orbit 8s linear infinite',
        'spin-cw': 'spin-clockwise 4s linear infinite',
        'spin-ccw': 'spin-counterclockwise 5s linear infinite',
        'progress': 'progress 1s ease-out forwards'
      }
    },
  },
  plugins: [],
} 