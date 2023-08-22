/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
                'primary-blue': 'rgba(0, 60, 78, 1)',
                'bg-blue': 'rgb(3, 7, 17)',
                'light-blue': 'rgb(2, 186, 241)',
                'disabled-gray': 'rgba(29, 94, 130, 1)',
                'gray': 'rgba(154, 156, 162, 1)'
            },
      fontFamily: {
        sansMedium: ['SanMedium', 'sans-serif'],
        sansBold: ['PoppinsBold', 'sans-serif'],
        sansLight: ['PoppinsLight', 'sans-serif'],
        sansItalic: ['PoppinsItalic', 'sans-serif'],
        sansRegular: ['PoppinsRegular', 'sans-serif'],
      },
      
      listStyleType: {
        none: 'none',
        disc: 'disc',
        decimal: 'decimal',
        square: 'square',
        roman: 'upper-roman',
      },
    },
  },
  plugins: [],
};
