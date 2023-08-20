import DesignSystem from 'src/types/DesignSystem';

const blueprint5: DesignSystem = {
  name: 'Blueprint v5',
  website: 'https://blueprintjs.com/',
  vendor: 'Palantir Technologies',
  github: 'palantir/blueprint',
  package: '@blueprintjs/core',
  mobile: false,
  desktop: true,
  features: {
    react18: {
      available: true,
    },
    typescript: {
      available: true,
    },
    styleReset: {
      available: false,
    },
    styleTreeShaking: {
      available: false,
    },
    styleCssInJs: {
      available: false,
    },
    iconCount: {
      available: 579,
      document: 'https://blueprintjs.com/docs/#icons/icons-list',
    },
    iconSvgComponent: {
      available: true,
      document: 'https://blueprintjs.com/docs/#icons/loading-icons',
    },
    iconFont: {
      available: true,
      document: 'https://blueprintjs.com/docs/#icons/loading-icons',
    },
    iconOutlined: {
      available: false,
    },
    iconFilled: {
      available: false,
    },
    iconTwoTone: {
      available: false,
    },
    dateDayjs: { available: false },
    dateDateFns: {
      available: true,
      document: 'https://blueprintjs.com/docs/#datetime',
    },
    dateLuxon: { available: false },
    button: {
      available: true,
      document: 'https://blueprintjs.com/docs/#core/components/buttons',
    },
    buttonFilled: {
      available: true,
      document: 'https://blueprintjs.com/docs/#core/components/buttons',
    },
    buttonOutlined: {
      available: true,
      document: 'https://blueprintjs.com/docs/#core/components/buttons',
    },
    buttonText: {
      available: true,
      document: 'https://blueprintjs.com/docs/#core/components/buttons',
      comment: '<Button minimal />',
    },
    buttonLink: {
      available: true,
      document: 'https://blueprintjs.com/docs/#core/components/buttons',
    },
    buttonLoading: {
      available: true,
      document: 'https://blueprintjs.com/docs/#core/components/buttons',
    },
    icon: {
      available: true,
    },
  },
};

export default blueprint5;
