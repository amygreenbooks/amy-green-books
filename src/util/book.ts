export type BookSummaryType = {
  title: string;
  image?: string;
  spineImage?: string;
  releaseDate?: string;
  description?: string;
  retailers?: Array<Retailer>;
};

export type Retailer = {
  name: string;
  link: string;
};
