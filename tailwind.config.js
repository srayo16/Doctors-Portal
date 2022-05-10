module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://i.ibb.co/j3F4P5X/bg.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  daisyui: {
    themes: [
      {
        doctortheme: {
          primary: "#0FCFEC",
          success: '#19D3AE',
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#3A4256",
          "base-100": "#ffffff",
        },
      },

    ],
  },
  plugins: [require("daisyui")],
}
