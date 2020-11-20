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
    extend: {
      listStyleType: {
        circle: 'circle',
      },

    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')
  ]
}