/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      keyframes: {
        'move-up': {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '59%': {
            transform: 'translateY(20px)',
          },
        },
        'move-right': {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '59%': {
            transform: 'translateX(40px)',
          },
        },
      },
      animation: {
        'move-up': 'move-up 2s ease-in-out infinite',
        'move-right': 'move-right 3s ease-in-out infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('tailwind-scrollbar-hide')],
};
