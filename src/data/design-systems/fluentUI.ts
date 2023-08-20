import DesignSystem from 'src/types/DesignSystem';

const fluentUI: DesignSystem = {
  name: 'Fluent UI',
  website: 'https://react.fluentui.dev/',
  vendor: 'Microsoft',
  github: 'microsoft/fluentui',
  package: '@fluentui/react',
  mobile: true,
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
      document:
        'https://react.fluentui.dev/?path=/docs/concepts-developer-styling-components--page',
    },
    styleTreeShaking: {
      available: true,
      document:
        'https://react.fluentui.dev/?path=/docs/concepts-developer-styling-components--page',
    },
    styleCssInJs: {
      available: true,
      document:
        'https://react.fluentui.dev/?path=/docs/concepts-developer-styling-components--page',
    },
    iconCount: {
      available: 1978,
      document:
        'https://react.fluentui.dev/?path=/docs/concepts-developer-icons-icons-catalog--page',
    },
    iconSvgComponent: {
      available: true,
      document: 'https://react.fluentui.dev/?path=/docs/concepts-developer-icons-icons--page',
    },
    iconSvgSprite: {
      available: true,
      document: 'https://react.fluentui.dev/?path=/docs/concepts-developer-icons-icons--page',
    },
    iconFont: {
      available: true,
      document: 'https://react.fluentui.dev/?path=/docs/concepts-developer-icons-icons--page',
    },
    iconOutlined: {
      available: true,
      document:
        'https://react.fluentui.dev/?path=/docs/concepts-developer-icons-icons-catalog--page',
    },
    iconFilled: {
      available: true,
      document:
        'https://react.fluentui.dev/?path=/docs/concepts-developer-icons-icons-catalog--page',
    },
    iconTwoTone: {
      available: false,
    },
    dateDayjs: {
      available: false,
    },
    dateDateFns: {
      available: false,
    },
    dateLuxon: {
      available: false,
    },
    button: {
      available: true,
      document: 'https://react.fluentui.dev/?path=/docs/components-button-button--default',
    },
    buttonLoading: {
      available: false,
    },
  },
};

export default fluentUI;
