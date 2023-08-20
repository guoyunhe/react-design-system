import Report from 'src/types/Report';

const muiMaterial5: Report = {
  name: 'MUI Material v5',
  website: 'https://mui.com/',
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

export default muiMaterial5;
