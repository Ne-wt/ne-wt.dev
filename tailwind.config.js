/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
    // daisyUI config (optional - here are the default values)
    daisyui: {
      themes: ["light", "dark", "dracula"], // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
      darkTheme: "dracula", // name of one of the included themes for dark mode
  },
}

