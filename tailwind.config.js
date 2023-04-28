const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      haiti: "#171341",
      white: "#FFFFFF",
      "smokey-grey": "#707070",
      "coral-red": "#FB4343",
      "bright-sky-blue": "#13C7FF",
      "bright-neon-pink": "#FF2EEA",
      "burning-orange": "#FF7233",
      "tealish-green": "#36D87C",
      "french-rose": "#FF437C",
      "debian-red": "#D4164F",
      topaz: "#0CC5B8",
    },
    fontFamily: {
      "roboto-regular": ["Roboto-Regular"],
      "roboto-regular-900": ["Roboto-Regular-900"],
      "roboto-bold": ["Roboto-Bold"],
    },
    extend: {
      boxShadow: {
        bottom: "0 7px",
        "bottom-right": "25px 25px 0px",
      },
    },
  },
  plugins: [
    plugin(({ addComponents }) => {
      addComponents({
        ".logo": {
          "margin-left": "1.75rem",
          "margin-right": "1.75rem",
          height: "5.2756rem",
          width: "4.3506rem",
        },
      });
    }),
  ],
};
