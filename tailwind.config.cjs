/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
         color: {
          primary: "#1D2E45",      // Azul oscuro (texto principal, header)
          secondary: "#E98A3B",    // Naranja (botones, acentos)
          accent: "#F5C383",       // Amarillo suave (hover, detalles)
          neutral: "#4D4D4D",      // Gris oscuro (texto o iconos)
          light: "#FFFFFF",        // Blanco
        },
      },
      fontFamily: {
        serif: ['"Inter"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};