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
                text: "#f7e9f3",
                background: "#0f0b0e",
                primary: "#c99ebe",
                secondary: "#7a2c64",
                accent: "#c8b15f",
            },
        },
    },
    plugins: [],
}
export default config
