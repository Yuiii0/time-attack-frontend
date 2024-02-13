import { Product } from "@/types/Product.type";
import { coreclient } from "..";

async function getBrands() {
  const response = await coreclient.get<Product>("/cart");
  const data = response.data;
  return data;
}

async function addItemToCart(productId: string) {
  const response = await coreclient.post<Product>(
    `/cart/products/${productId}`
  );
  const data = response.data;
  return data;
}
