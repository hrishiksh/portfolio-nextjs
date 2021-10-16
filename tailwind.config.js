module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,jsx,ts,tsx,vue}",
    "./utils/**/*.{js,jsx,ts,tsx,vue}",
    "./icons/**/*.{js,jsx,ts,tsx,vue}",
    "./components/**/*.{js,jsx,ts,tsx,vue}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        inter: ["inter", "sans-serif"],
        sriracha: ["Sriracha"],
        inconsolata: ["Inconsolata", "monospace"],
      },
      colors: {
        "custom-green": "#0EAD69",
        "custom-yellow": "#FFD23F",
        "custom-pink": "#EE4266",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
