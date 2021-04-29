export default interface OverviewType {
  title: string;
  componentName: string;
  composerName: string;
  sections: {
    heading?: string;
    body: string;
  }[];
}
