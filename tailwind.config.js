/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontSize: {
                'xxs': '8px',
                'xs': '10px',
                's': '12px',
            },
            screens: {
                'sm': '300px',
                'md': '640px',
                'lg': '1024px',
                'xl': '1280px',
                '2xl': '1536px',
            },

            keyframes: {
                wiggle: {
                    '0%, 100%': {transform: 'rotate(-3deg)'},
                    '50%': {transform: 'rotate(3deg)'},
                },
                fadeInFromTop: {
                    '0%': {
                        transform: 'translateY(-10%)',
                        opacity: '0',
                    },
                    '100%': {
                        transform: 'translateY(0)',
                        opacity: '1',
                    }
                }
            }
        }
    }
    ,
    plugins: [],
}