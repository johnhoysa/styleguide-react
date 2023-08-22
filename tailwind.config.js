/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        coral: {
          light: '#ffe2dc',
          DEFAULT: '#F68765',
          dark: '#691935',
        },
        error: '#BD0505',
        grey: {
          100: '#F9F9F9',
          200: '#E5E5E5',
          300: '#B3B3B3',
          400: '#808080',
          500: '#6D6D6D',
          600: '#4D4D4D',
        },
        orchid: {
          light: '#dee2ff',
          DEFAULT: '#9c8ef1',
          dark: '#4200CF',
        },
        poppy: {
          light: '#FFBBAD',
          DEFAULT: '#ff4007',
          dark: '#D23000',
        },
        primary: '#ff4007', // poppy DEFAULT
        success: {
          light: '#F5FFEC',
          DEFAULT: '#CFF0B2',
          dark: '#489900',
        },
        sky: {
          100: '#F5FBFF',
          light: '#D5F0FF',
          DEFAULT: '#3FACFB',
          dark: '#212962',
        },
        secondary: '#000000', // Black
      },
    },
    fontFamily: {
      sans: ['dm-sans', ...defaultTheme.fontFamily.sans],
      serif: ['merriweather', ...defaultTheme.fontFamily.serif],
      mono: ['dm-mono', ...defaultTheme.fontFamily.mono],
    },
    fontSize: {
      xs: [
        '12px',
        {
          lineHeight: '130%',
          letterSpacing: '0.03px',
          fontWeight: '400',
        },
      ],
      sm: [
        '14px',
        {
          lineHeight: '130%',
          letterSpacing: '0.35px',
          fontWeight: '300',
        },
      ],
      base: [
        '16px',
        {
          lineHeight: '130%',
          letterSpacing: '0.08px',
          fontWeight: '400',
        },
      ],
      lg: [
        '18px',
        {
          lineHeight: '130%',
          letterSpacing: '0.45px',
          fontWeight: '400',
        },
      ],
      xl: [
        '20px',
        {
          lineHeight: '130%',
          letterSpacing: '0.1px',
          fontWeight: '400',
        },
      ],
      '2xl': [
        '24px',
        {
          lineHeight: '130%',
          letterSpacing: '0.px',
          fontWeight: '400',
        },
      ],
      '3xl': [
        '32px',
        {
          lineHeight: '130%',
          letterSpacing: '0.08px',
          fontWeight: '300',
        },
      ],
      '4xl': [
        '40px',
        {
          lineHeight: '130%',
          letterSpacing: '0.1px',
          fontWeight: '300',
        },
      ],
      '5xl': [
        '48px',
        {
          lineHeight: '130%',
          letterSpacing: '-0.24px',
          fontWeight: '300',
        },
      ],
      '6xl': [
        '64px',
        {
          lineHeight: '130%',
          letterSpacing: '-0.64px',
          fontWeight: '300',
        },
      ],
      '7xl': [
        '80px',
        {
          lineHeight: '130%',
          letterSpacing: '-0.8px',
          fontWeight: '300',
        },
      ],
      '8xl': [
        '120px',
        {
          lineHeight: '130%',
          letterSpacing: '-1.2px;',
          fontWeight: '300',
        },
      ],
      '9xl': [
        '132px',
        {
          lineHeight: '130%',
          letterSpacing: '-1.4px;',
          fontWeight: '300',
        },
      ],
    },
    screens: {
      sm: '375px',
      // => @media (min-width: 375px) { ... }
      md: '800px',
      // => @media (min-width: 800px) { ... }
      lg: '1050px',
      // => @media (min-width: 1050px) { ... }
      xl: '1440px',
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
