export default interface Feature {
  available?: boolean | number;
  document?: string;
  comment?: string;
  features?: Record<string, Feature>;
}
