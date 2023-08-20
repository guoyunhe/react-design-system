import Report from 'src/types/Report';

const materialUI5: Report = {
  name: 'Material UI v5',
  website: 'https://mui.com/material-ui/',
  mobile: true,
  desktop: true,
  features: {
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

export default materialUI5;