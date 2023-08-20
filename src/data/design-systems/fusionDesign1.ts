import DesignSystem from 'src/types/DesignSystem';

const fusionDesign1: DesignSystem = {
  name: 'Fusion Design v1',
  website: 'https://fusion.design/',
  vendor: 'Alibaba Group',
  github: 'alibaba-fusion/next',
  package: '@alifd/next',
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
      available: true,
    },
    styleTreeShaking: {
      available: false,
    },
    styleCssInJs: {
      available: false,
    },
    iconCount: {
      available: 56,
      document: 'https://fusion.design/pc/component/icon',
    },
    iconSvgComponent: {
      available: false,
    },
    iconFont: {
      available: true,
      document: 'https://fusion.design/pc/component/icon',
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
      document: 'https://fusion.design/pc/component/date-picker-2',
    },
    dateDateFns: {
      available: false,
    },
    dateLuxon: {
      available: false,
    },
    button: {
      available: true,
      document: 'https://ant.design/components/button',
    },
    buttonLoading: {
      available: true,
      document: 'https://ant.design/components/button#components-button-demo-loading',
    },
    icon: {
      available: true,
      document: 'https://ant.design/components/icon',
      features: {
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

export default fusionDesign1;
