/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
         color: {
          primary: "#1D2E45",      // Azul oscuro (texto principal, header)
          secondary: "#e67a37",    // Naranja (botones, acentos)
          accent: "#f5c383",       // Amarillo suave (hover, detalles)
          neutral: "#4d4d4d",      // Gris oscuro (texto o iconos)
          light: "#ffffff",        // Blanco
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
  ]
};
