import DesignSystem from 'src/types/DesignSystem';

const atlaskit: DesignSystem = {
  name: 'Atlaskit',
  website: 'https://atlassian.design/',
  vendor: 'Atlassian',
  package: '@atlaskit/ds-lib',
  mobile: true,
  desktop: true,
  features: {
    react18: {
      available: false,
    },
    typescript: {
      available: true,
    },
    styleReset: {
      available: true,
      document: 'https://atlassian.design/components/css-reset/examples',
    },
    styleTreeShaking: {
      available: true,
      document: 'https://atlassian.design/get-started/develop',
    },
    styleCssInJs: {
      available: true,
      document: 'https://atlassian.design/get-started/develop',
    },
    iconCount: {
      available: 370,
      document: 'https://atlassian.design/components/icon/icon-explorer',
    },
    iconSvgComponent: {
      available: true,
      document: 'https://atlassian.design/components/icon/examples',
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
      available: true,
      document: 'https://atlassian.design/components/datetime-picker/examples',
    },
    dateLuxon: {
      available: false,
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

export default atlaskit;
