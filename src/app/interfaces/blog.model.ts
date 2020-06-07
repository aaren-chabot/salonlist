export interface IBlog {
  title: string;
  description: IDescription;
  heroImg: string;
  body: IBody[];
  author: string;
  date: Date;
}

interface IDescription {
  short: string;
  long: string;
}

interface IBody {
  p: string;
  img: string;
  heading: string;
}
