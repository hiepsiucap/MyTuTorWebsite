/**
 * @format
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      colors: {
        primary: "#7ED957",
        primary2: "#EFE7DF",
        secondary: "#FF8032",
        background: "#F7F2ED",
        button: "#dfccb8",
        // ...
      },
      backgroundImage: {
        "my-image":
          "url('https://res.cloudinary.com/dhhuv7n0h/image/upload/v1708361936/image_wirhus.png')",
      },
    },
  },
  plugins: [],
};
