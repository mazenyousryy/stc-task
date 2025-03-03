export interface ISource {
  name: string;
}
export interface INewsItem {
  source: ISource;
  title: string;
  urlToImage: string;
  publishedAt: string;
  url: string;
  content: string;
}
