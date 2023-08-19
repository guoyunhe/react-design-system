export default interface Feature {
  available: boolean;
  document: string;
  comment?: string;
  features?: Record<string, Feature>;
}
