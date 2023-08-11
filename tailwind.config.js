/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        mont: ['var(--font-mont)'],
        man: ['var(--font-man)'],
      },
      colors: {
        dark: '#1b1b1b',
        light: '#f5f5f5',
        primary: '#863E96',
        primaryDark: '#58E609',
        lilac: '#CD9FCC',
        uv: '#6C508E',
        bluefed: '0A014F',
      },
    },
  },
  plugins: [require('daisyui')],
};
