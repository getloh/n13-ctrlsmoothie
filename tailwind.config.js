const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                ctrl1: 'var(--ctrl1)',
                ctrl2: 'var(--ctrl2)',
                ctrl3: 'var(--ctrl3)',
                ctrl4: 'var(--ctrl4)',
                ctrl5: 'var(--ctrl5)',
                ctrl6: 'var(--ctrl6)',
                ctrl7: 'var(--ctrl7)',
                ctrl8: 'var(--ctrl8)',
                ctrl9: 'var(--ctrl9)'
            },
            height: {
                '128': '32rem',
            },
            fontSize: {
            "10xl":'var(--10xl)'
            },
        },
    },
    plugins: [],
}