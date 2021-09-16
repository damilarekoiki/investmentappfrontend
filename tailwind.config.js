module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      borderWidth: {
        '1': '1px',
        '0': '0',
      },
      opacity: {
        '10': '0.1'
      },
      inset: {
        '-1': '-1px',
        '-2': '-2px',
        '-4': '-4px',
        '-8': '-8px',
        '-16': '-16px',
        '-52': '-52px',
        '-92': '-92px',
        '1': '1px',
        '2': '2px',
        '4': '4px',
        '8': '8px',
        '16': '16px',
        '52': '52px',
        '92': '92px',

      }
    },
  },
  variants: {},
  plugins: [],
  prefix: 'tw-',
}
