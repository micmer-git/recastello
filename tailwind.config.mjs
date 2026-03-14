/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#00A651',
          paper: '#F2EFE9',
          dark: '#1A1A1A',
          cream: '#FAF8F4',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Oswald', 'system-ui', 'sans-serif'],
        cursive: ['Yellowtail', 'cursive'],
      },
    },
  },
  plugins: [],
};
