import DesignSystem from 'src/types/DesignSystem';

const antDesignMobile5: DesignSystem = {
  name: 'Ant Design Mobile v5',
  website: 'https://mobile.ant.design/',
  vendor: 'Ant Group',
  mobile: true,
  desktop: false,
  features: {
    react18: {
      available: true,
    },
    typescript: {
      available: true,
    },
    button: {
      available: true,
    },
    icon: {
      available: true,
      document: 'https://mui.com/material-ui/material-icons/',
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

export default antDesignMobile5;
