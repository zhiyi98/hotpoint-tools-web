/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      // 设置默认字体
      fontFamily: {
        'sans': ['微软雅黑', 'Helvetica', 'Arial', 'sans-serif']
      },
      colors: {
        'default': '#7f8c8d'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('flowbite/plugin')
  ],
}