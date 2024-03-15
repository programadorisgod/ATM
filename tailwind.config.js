/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '3px -13px 5px 1px rgba(120, 113, 116) inset',
        'card': '-12px -13px 0px -9px rgba(0,0,0,0.75) inset;',
        'neo': 'inset 20px 20px 60px #bebebe, inset -20px -20px 60px #ffffff'
      }
    },
  },
  plugins: [
    import('flowbite/plugin')
  ],
}

