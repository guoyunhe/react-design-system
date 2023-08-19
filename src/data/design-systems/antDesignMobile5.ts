import Report from 'src/types/Report';

const antDesignMobile5Report: Report = {
  name: 'Ant Design Mobile v5',
  website: 'https://mobile.ant.design/',
  mobile: true,
  desktop: false,
  features: {
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

export default antDesignMobile5Report;
