import type { Config } from "tailwindcss"

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
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
}
export default config
