/** @type {import('tailwindcss').Config} */
const { nextui } = require('@nextui-org/react');

module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',

        // Or if using `src` directory:
        './src/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                theme: {
                    primary: '#678E61',
                },
            },
        },
        screens: {
            sm: '576px',
            md: '768px',
            lg: '1024px',
            xl: '1200px',
            '2xl': '1400px',
        },
    },
    plugins: [],
    darkMode: 'class',
    plugins: [nextui()],
};
