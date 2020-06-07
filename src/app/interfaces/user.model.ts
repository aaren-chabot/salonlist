export interface IUser {
  email: string;
  password?: string;
  name?: IName;
  phone?: string;
  businesses?: string[];
  date: Date;
}

interface IName {
  first?: string;
  last?: string;
}
