/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      background: 'hsl(var(--color-background))',
      text: 'hsl(var(--color-text))',
      input: 'hsl(var(--color-input))',
      element: 'hsl(var(--color-element))'
    },
    fill: {
      gray: ({ theme }) => theme('colors.gray')
    },
    extend: {
      width: {
        '1/2-1': 'calc(50% - 1rem)',
        '1/3-1': 'calc((100% / 3) - 1rem)',
        '1/4-1': 'calc((100%/4) - 1.5rem)',
      }
    },
  },
  plugins: [],
}
