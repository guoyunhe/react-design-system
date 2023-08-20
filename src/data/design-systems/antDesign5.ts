import Report from 'src/types/Report';

const antDesign5: Report = {
  name: 'Ant Design v5',
  website: 'https://ant.design/',
  mobile: false,
  desktop: true,
  features: {
    styleReset: {
      available: true,
      document: 'https://ant.design/docs/react/migration-v5',
      comment: 'antd/dist/reset.css',
    },
    styleTreeShaking: {
      available: true,
      document: 'https://ant.design/docs/react/migration-v5',
    },
    styleCssInJs: {
      available: true,
      document: 'https://ant.design/docs/react/migration-v5',
    },
    dateDayjs: {
      available: true,
      document: 'https://ant.design/docs/react/use-custom-date-library',
    },
    dateDateFns: {
      available: true,
      document: 'https://ant.design/docs/react/use-custom-date-library',
    },
    dateLuxon: {
      available: true,
      document: 'https://ant.design/docs/react/use-custom-date-library',
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

export default antDesign5;
