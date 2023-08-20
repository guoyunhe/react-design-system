import DesignSystem from 'src/types/DesignSystem';

const chakraUI: DesignSystem = {
  name: 'Chakra UI',
  website: 'https://chakra-ui.com/',
  vendor: 'Segun Adebayo',
  github: 'chakra-ui/chakra-ui',
  package: '@chakra-ui/react',
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
      document: 'https://chakra-ui.com/docs/styled-system/global-styles',
    },
    styleTreeShaking: {
      available: true,
      document: 'https://chakra-ui.com/getting-started',
    },
    styleCssInJs: {
      available: true,
      document: 'https://chakra-ui.com/getting-started',
    },
    iconCount: {
      available: 58,
      document: 'https://chakra-ui.com/docs/components/icon/usage#all-icons',
    },
    iconSvgComponent: {
      available: true,
      document: 'https://chakra-ui.com/docs/components/icon/usage',
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
      document: 'https://chakra-ui.com/docs/components/button',
    },
    buttonLoading: {
      available: true,
      document: 'https://mui.com/material-ui/react-button/#loading-button',
    },
  },
};

export default chakraUI;
