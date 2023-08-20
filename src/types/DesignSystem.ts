import Feature from './Feature';

export default interface DesignSystem {
  name: string;
  website: string;
  vendor?: string;
  package?: string;
  github?: string;
  mobile: boolean;
  desktop: boolean;
  features: Record<string, Feature>;
}
