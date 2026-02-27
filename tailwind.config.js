/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx,md}"
  ],
  theme: {
    extend: {
      colors: {
        moss: {
          DEFAULT: '#2E4036',
          light: '#3A5044',
          dark: '#1D2A23'
        },
        clay: {
          DEFAULT: '#CC5833',
          light: '#D67252',
          dark: '#A64526'
        },
        cream: {
          DEFAULT: '#F2F0E9',
          dark: '#E5E2D8'
        },
        charcoal: {
          DEFAULT: '#1A1A1A',
          light: '#2A2A2A'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        outfit: ['"Outfit"', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'cinematic': 'cubic-bezier(0.76, 0, 0.24, 1)',
        'ui': 'cubic-bezier(0.16, 1, 0.3, 1)'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
