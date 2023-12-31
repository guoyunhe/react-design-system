import DesignSystem from 'src/types/DesignSystem';

const antDesign5: DesignSystem = {
  name: 'Ant Design v5',
  website: 'https://ant.design/',
  vendor: 'Ant Group',
  github: 'ant-design/ant-design',
  package: 'antd',
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
    iconCount: {
      available: 789,
      document: 'https://ant.design/components/icon',
    },
    iconSvgComponent: {
      available: true,
      document: 'https://ant.design/components/icon',
    },
    iconFont: {
      available: false,
    },
    iconOutlined: {
      available: true,
      document: 'https://ant.design/components/icon',
    },
    iconFilled: {
      available: true,
      document: 'https://ant.design/components/icon',
    },
    iconTwoTone: {
      available: true,
      document: 'https://ant.design/components/icon',
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
  },
};

export default antDesign5;
