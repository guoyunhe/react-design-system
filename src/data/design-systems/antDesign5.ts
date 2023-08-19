import Report from 'src/types/Report';

const antDesign5Report: Report = {
  name: 'Ant Design v5',
  website: 'https://ant.design/',
  features: {
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

export default antDesign5Report;
