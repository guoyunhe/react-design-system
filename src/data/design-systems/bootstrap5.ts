import DesignSystem from 'src/types/DesignSystem';

const bootstrap5: DesignSystem = {
  name: 'Bootstrap v5',
  website: 'https://react-bootstrap.github.io/',
  mobile: true,
  desktop: true,
  features: {
    styleReset: {
      available: true,
      document: 'https://react-bootstrap.github.io/docs/getting-started/introduction#stylesheets',
    },
    styleTreeShaking: {
      available: false,
    },
    styleCssInJs: {
      available: false,
    },
    iconCount: {
      available: 1285,
      document: 'https://icons.getbootstrap.com/',
    },
    iconSvgComponent: {
      available: true,
      document: 'https://github.com/ismamz/react-bootstrap-icons',
    },
    iconSvgSprite: {
      available: true,
      document: 'https://icons.getbootstrap.com/#usage',
    },
    iconFont: {
      available: true,
      document: 'https://icons.getbootstrap.com/#usage',
    },
    iconOutlined: {
      available: true,
      document: 'https://icons.getbootstrap.com/',
    },
    iconFilled: {
      available: true,
      document: 'https://icons.getbootstrap.com/',
    },
    iconTwoTone: {
      available: false,
    },
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

export default bootstrap5;
