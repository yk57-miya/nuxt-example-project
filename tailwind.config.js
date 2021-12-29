const COLOR = {
  BLACK: '#000',
  WHITE: '#fff',
  GRAY: '#eee',
};

const colorClass = {
  white: COLOR.WHITE,
  black: COLOR.BLACK,
  gray: COLOR.GRAY,
};

module.exports = {
  future: {
    purgeLayersByDefault: true
  },
  purge: {
    layers: ['utilities']
  },
  corePlugins: {
    container: false
  },
  theme: {
    textColor: colorClass,
    backgroundColor: colorClass,
    borderColor: colorClass,
    fontSize: {
      xs: '1.0rem',
      sm: '1.2rem',
      base: '1.4rem',
      lg: '1.6rem',
      xl: '1.8rem',
      '2xl': '2.0rem',
      '3xl': '2.2rem',
      '4xl': '2.4rem'
    },
    extend: {
      transformOrigin: {
        0: '0%'
      },
      zIndex: {
        '-1': '-1'
      },
      spacing: {
        '1/3': '33.333333%'
      }
    }
  },
  variants: {
    padding: ['responsive', 'first', 'last', 'hover', 'focus'],
    borderWidth: ['responsive', 'first', 'last', 'hover', 'focus'],
    opacity: ['disabled']
  },
  plugins: []
};
