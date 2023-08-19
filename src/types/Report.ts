import Feature from './Feature';

export default interface Report {
  name: string;
  website: string;
  mobile: boolean;
  desktop: boolean;
  features: Record<string, Feature>;
}
