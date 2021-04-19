// const colors = require('tailwindcss/colors')

const sourceDir = './themes/custom/typhoon/src';
const destinationDir = './themes/custom/typhoon';

module.exports = {
  purge: {
    enabled: true,
    content: [
      `${destinationDir}/templates/*.twig`,
      `${destinationDir}/templates/**/*.twig`,
      `${destinationDir}/templates/***/**/*.twig`,
      `${destinationDir}/js/*.js`,
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      red: {
        900: '#600517',
        800: '#7a091c',
        700: '#921126',
        600: '#b0112b',
        500: '#c6102e',
        400: '#e13b44',
        300: '#ef656a',
        200: '#f8a9ac',
        100: '#fee6e6',
        50: '#fef5f5',
      },
      yellow: {
        900: '#7d2a06',
        800: '#ac4e06',
        700: '#cf8002',
        600: '#eea60b',
        500: '#f1bd46',
        400: '#fbd969',
        300: '#fce882',
        200: '#fdf3b4',
        100: '#fef8d6',
        50: '#fefbea',
      },
      blue: {
        900: '#032d48',
        800: '#044770',
        700: '#006da8',
        600: '#0c87c9',
        500: '#139fe5',
        400: '#17b0f6',
        300: '#45c2fc',
        200: '#a6ddfb',
        100: '#e6f5fd',
        50: '#f0f8fe',
      },
      'warm-grey': {
        900: '#26241c',
        800: '#423e33',
        700: '#4f4b3f',
        600: '#615d51',
        500: '#847f70',
        400: '#a3a093',
        300: '#b8b4a7',
        200: '#d3d0c4',
        100: '#e8e7e2',
        50: '#f6f5f3',
      },
      grey: {
        900: '#212121',
        800: '#3a3a3a',
        700: '#515151',
        600: '#606060',
        500: '#7c7c7c',
        400: '#9e9e9e',
        300: '#afafaf',
        200: '#cecece',
        100: '#e0e0e0',
        50: '#f2f2f2',
      },
      green: {
        900: '#014606',
        800: '#075e0e',
        700: '#0d7616',
        600: '#13851a',
        500: '#189a1c',
        400: '#31b437',
        300: '#4fc955',
        200: '#92e698',
        100: '#bff1c5',
        50: '#e1f8e3',
      },
      white: {
        DEFAULT: '#fff',
      },
      black: {
        DEFAULT: '#222',
      },
      transparent: {
        DEFAULT: 'transparent',
      },
    },
    fontSize: {
      '2xs': '0.5rem',
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.5rem',
      '2xl': '2rem',
      '3xl': '2.5rem',
      '4xl': '3rem',
      '5xl': '3.75rem',
      '6xl': '4.5rem',
    },
    fontFamily: {
      body: [
        '"Nimbus Sans"',
        '"Helvetica Neue"',
        'Helvetica',
        'Arial',
        '"sans-serif"',
      ],
      merriweather: ['Merriweather', 'Georgia', 'serif'],
    },
    boxShadow: {
      'light-1':
        '0 1px 2px rgba(0, 0, 0, 0.24), 0 1px 3px rgba(0, 0, 0, 0.12);',
      'light-2':
        '0 2px 4px rgba(0, 0, 0, 0.12), 0 3px 6px rgba(0, 0, 0, 0.15);',
      'light-3':
        '0 3px 6px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.15);',
      'light-4':
        '0 5px 10px rgba(0, 0, 0, 0.05), 0 15px 25px rgba(0, 0, 0, 0.15);',
      'light-5': '0 20px 40px rgba(0, 0, 0, 0.2);',
      'dark-1': '0 1px 2px rgba(0, 0, 0, 0.34), 0 1px 3px rgba(0, 0, 0, 0.22)',
      'dark-2': '0 2px 4px rgba(0, 0, 0, 0.22), 0 3px 6px rgba(0, 0, 0, 0.25)',
      'dark-3': '0 3px 6px rgba(0, 0, 0, 0.2), 0 10px 20px rgba(0, 0, 0, 0.25)',
      'dark-4':
        '0 5px 10px rgba(0, 0, 0, 0.15), 0 15px 25px rgba(0, 0, 0, 0.25)',
      'dark-5': '0 20px 40px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
    },
    extend: {
      spacing: {
        0: '0',
        '2xs': '0.25rem',
        xs: '0.5rem',
        sm: '0.75rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl': '2.5rem',
        '3xl': '3rem',
        '4xl': '4rem',
        '5xl': '6rem',
        '6xl': '8rem',
        '7xl': '12rem',
      },
      backgroundImage: theme => ({
        'hero-image-xs':
          "url('/themes/custom/typhoon/images/intra-hero-xs.jpg')",
        'hero-image-lg':
          "url('/themes/custom/typhoon/images/intra-hero-lg.jpg')",
        'hero-image-sm':
          "url('/themes/custom/typhoon/images/intra-hero-sm.jpg')",
        'hero-image-md':
          "url('/themes/custom/typhoon/images/intra-hero-md.jpg')",
        'hero-image-xl':
          "url('/themes/custom/typhoon/images/intra-hero-xl.jpg')",
        'lib-staircase-image':
          "url('/themes/custom/typhoon/images/parks-library-staircase.jpg')",
      }),
      lineHeight: {
        0: '0',
      },
      lineClamp: {
        7: '7',
      },
    },
  },
  variants: {
    extend: {
      // borderWidth: ['first'],
      // display: ['group-hover', 'group-focus'],
      // flex: ['group-hover', 'group-focus'],
      // margin: ['last'],
      // scale: ['active', 'group-hover'],
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
