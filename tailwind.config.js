/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            mobile: {max: "560px"},
            tablet: {min: "561px", max: "900px"},
            laptop: {min: "901px"},
        },
        extend: {},
    },
    plugins: [],
}