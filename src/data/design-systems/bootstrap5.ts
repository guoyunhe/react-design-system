import Report from 'src/types/Report';

const bootstrap5: Report = {
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
      available: true,
      document: 'https://react-bootstrap.github.io/docs/getting-started/introduction#stylesheets',
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
