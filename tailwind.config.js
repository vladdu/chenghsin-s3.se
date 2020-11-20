const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
  purge: [
    './content/**/*.html',
    './content/**/*.md',
    './resources/**/*.html',
    './resources/**/*.md',
  ],
  theme: {
    fontFamily: {
      'sans': [
        'Open Sans', ...defaultTheme.fontFamily.sans
      ],
      'serif': [
        ...defaultTheme.fontFamily.serif
      ],
      'mono': [
        ...defaultTheme.fontFamily.mono
      ],
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      listStyleType: {
        circle: 'circle',
      },

    }
  },
  variants: {},
  plugins: [
  ]
}