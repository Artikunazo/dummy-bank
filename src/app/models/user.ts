import { IProduct } from "./products";

export interface IUser {
  username: string | null;
  password: string | null;
  products: IProduct[];
  phoneNumber?: string | null;
}
