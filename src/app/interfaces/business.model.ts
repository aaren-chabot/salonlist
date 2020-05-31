export interface Business {
  type: 'salon' | 'barber';
  name: string;
  rating: number;
  isFeatured: boolean;
  address: string;
  link: string;
  image: string;
}
