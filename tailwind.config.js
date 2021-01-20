// tailwind.config.js
const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      main: {
        100: 'var(--color-main-100)',
        500: 'var(--color-main-500)',
      },
      sub: {
        100: 'var(--color-sub-hover)',
        500: 'var(--color-sub)',
      },
      line: {
        100: 'var(--color-line)',
      },
      sup1: {
        100: 'var(--color-sup1-100)',
        500: 'var(--color-sup1-500)',
        900: 'var(--color-sup1-900)',
      },
      sup2: {
        500: 'var(--color-sup2)',
      },
      sup3: {
        400: 'var(--color-sup3-placeholder)',
        500: 'var(--color-sup3)',
      },
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      purple: colors.purple,
      green: colors.green,
    },
    extend: {},
  },
  corePlugins: {
    // fontFamily: false,
    // fontWeight: false,
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
