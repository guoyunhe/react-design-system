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
      document: 'https://mui.com/material-ui/getting-started/usage/#cssbaseline',
    },
    styleTreeShaking: {
      available: true,
      document: 'https://mui.com/material-ui/react-button/',
    },
    styleCssInJs: {
      available: true,
      document: 'https://mui.com/material-ui/react-button/',
    },
    iconCount: {
      available: 2126,
      document: 'https://mui.com/material-ui/material-icons/',
    },
    iconSvgComponent: {
      available: true,
      document: 'https://mui.com/material-ui/material-icons/',
    },
    iconFont: {
      available: true,
      document: 'https://mui.com/material-ui/icons/#icon-font-icons',
    },
    iconOutlined: {
      available: true,
      document: 'https://mui.com/material-ui/material-icons/',
    },
    iconFilled: {
      available: true,
      document: 'https://mui.com/material-ui/material-icons/',
    },
    iconTwoTone: {
      available: true,
      document: 'https://mui.com/material-ui/material-icons/',
    },
    dateDayjs: {
      available: true,
      document: 'https://mui.com/x/react-date-pickers/getting-started/',
    },
    dateDateFns: {
      available: true,
      document: 'https://mui.com/x/react-date-pickers/getting-started/',
    },
    dateLuxon: {
      available: true,
      document: 'https://mui.com/x/react-date-pickers/getting-started/',
    },
    button: {
      available: true,
      document: 'https://mui.com/material-ui/react-button/',
    },
    buttonLoading: {
      available: true,
      document: 'https://mui.com/material-ui/react-button/#loading-button',
    },
    icon: {
      available: true,
      document: 'https://mui.com/material-ui/material-icons/',
      features: {
        desktop: {
          available: true,
        },
        font: {
          available: true,
          document: 'https://mui.com/material-ui/icons/#icon-font-icons',
        },
        svg: {
          available: true,
          document: 'https://mui.com/material-ui/icons/#svgicon',
        },
        filled: {
          available: true,
          document: 'https://mui.com/material-ui/material-icons/?theme=Filled',
        },
        outlined: {
          available: true,
          document: 'https://mui.com/material-ui/material-icons/?theme=Outlined',
        },
      },
    },
  },
};

export default chakraUI;
