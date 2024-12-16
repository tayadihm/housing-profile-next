import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/app/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: '#4CAF50', // Warna utama
        secondary: '#F5F5F5', // Warna sekunder
        accent: '#FFC107', // Warna aksen
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
} satisfies Config;
