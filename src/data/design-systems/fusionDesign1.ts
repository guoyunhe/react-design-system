import Report from 'src/types/Report';

const fusionDesign1: Report = {
  name: 'Fusion Design v1',
  website: 'https://fusion.design/',
  mobile: false,
  desktop: true,
  features: {
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