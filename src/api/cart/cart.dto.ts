import { Product } from "@/types/Product.type";

export type CartDto = {
  amount: number;
  product: Product;
};
