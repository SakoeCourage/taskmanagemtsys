/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./public/index.html", ".resources/**/*.{vue,js,ts,tsx,jsx}", "./resources/views/*.blade.php", "./resources/views/**/*.blade.php", "./resources/views/**/**/*.blade.php", ".resources/components/**/*.{tsx,jsx,scss}", "./resources/**/*.{html,jsx,scss}","./resources/css/*.css"],
  theme: {
    extend: {
      colors:{
        'primary-deep-blue': '#1e40af',
        'primary-deep-pink': '#831843',
      }
    },
  },
  plugins: [],
}

