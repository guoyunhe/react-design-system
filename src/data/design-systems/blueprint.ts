import Report from 'src/types/Report';

const blueprintReport: Report = {
  name: 'MUI Material',
  website: '@mui/material',
  features: {
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

export default blueprintReport;
