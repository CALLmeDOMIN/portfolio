/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                Poppins: ["Poppins", "sans-serif"],
            },
            colors: {
                text: "#ede8ed",
                background: "#0e0b0e",
                "primary-button": "#81a9e9",
                "secondary-button": "#d8f8e9",
                accent: "#3e3190",
            },
        },
    },
    plugins: [],
    // plugins: [require("tailwind-scrollbar")],
};
