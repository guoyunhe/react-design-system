import Feature from './Feature';

export default interface DesignSystem {
  name: string;
  website: string;
  mobile: boolean;
  desktop: boolean;
  features: Record<string, Feature>;
}
