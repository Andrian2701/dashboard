import { Product } from "./product.types";

export interface Sale extends Product {
  amount: number;
  totalPrice: number;
  date: string;
  expence: number;
}
