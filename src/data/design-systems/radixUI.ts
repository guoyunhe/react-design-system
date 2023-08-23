import DesignSystem from 'src/types/DesignSystem';

const radixUI: DesignSystem = {
  name: 'Radix UI',
  website: 'https://www.radix-ui.com/',
  vendor: 'WorkOS',
  github: 'radix-ui/primitives',
  package: '@radix-ui/primitive',
  mobile: true,
  desktop: true,
  features: {
    react18: {
      available: true,
    },
    typescript: {
      available: true,
    },
    styleReset: {
      available: true,
      document: 'https://www.radix-ui.com/themes/docs/overview/getting-started',
    },
    styleCssVars: {
      available: true,
      document: 'https://www.radix-ui.com/themes/docs/theme/token-reference',
    },
    styleTreeShaking: {
      available: false,
    },
    styleCssInJs: {
      available: false,
    },
    iconCount: {
      available: false,
    },
    iconSvgComponent: {
      available: false,
    },
    iconFont: {
      available: false,
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
    dateDayjs: {
      available: false,
    },
    dateDateFns: {
      available: false,
    },
    dateLuxon: {
      available: false,
    },
    button: {
      available: true,
      document: 'https://www.radix-ui.com/themes/docs/components/button',
    },
    buttonLoading: {
      available: false,
    },
  },
};

export default radixUI;
