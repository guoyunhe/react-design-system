import Feature from './Feature';

export default interface Report {
  name: string;
  website: string;
  features: Record<string, Feature>;
}
