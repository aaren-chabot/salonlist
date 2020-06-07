export interface IBusiness {
  name: string;
  isFeatured: boolean;
  owner: string;
  type: 'salon' | 'barber';
  rating: IRating;
  description?: IDescription;
  phone: string;
  images: IImages;
  hours: IHours[];
  address: IAddress;
  date: Date;
}

interface IRating {
  score: number;
  reviews: number;
}

interface IHours {
  weekday:
    | 'sunday'
    | 'monday'
    | 'tuesday'
    | 'wednesday'
    | 'thursday'
    | 'friday'
    | 'saturday';
  open: string;
  close: string;
}

interface IImages {
  hero: string;
  gallery?: string[];
}

interface IDescription {
  short: string;
  long: string;
}

interface IAddress {
  country: string;
  state: string;
  zip: string;
  city: string;
  street: string;
  streetDetails?: string;
}
