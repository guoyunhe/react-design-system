import DesignSystem from 'src/types/DesignSystem';

const mantine: DesignSystem = {
  name: 'Mantine',
  website: 'https://mantine.dev/',
  vendor: 'Vitaly Rtishchev',
  github: 'mantinedev/mantine',
  package: '@mantine/core',
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
      document: 'https://mantine.dev/pages/getting-started/',
    },
    styleTreeShaking: {
      available: true,
      document: 'https://mantine.dev/pages/getting-started/',
    },
    styleCssInJs: {
      available: true,
      document: 'https://mantine.dev/pages/getting-started/',
    },
    iconCount: {
      available: 0,
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
      available: true,
      document: 'https://mantine.dev/dates/dates-provider/',
    },
    dateDateFns: {
      available: false,
    },
    dateLuxon: {
      available: false,
    },
    button: {
      available: true,
      document: 'https://mantine.dev/core/button/',
    },
    buttonLoading: {
      available: true,
      document: 'https://mantine.dev/core/button/#loading-state',
    },
  },
};

export default mantine;
