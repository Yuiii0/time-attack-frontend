import { coreclient } from "..";
import { CartDto } from "./cart.dto";
import { CartData } from "./cart.response";

async function getCart() {
  const url = "/cart";
  const response = await coreclient.get<CartData>(url);
  const data = response.data;
  return data;
}

async function addItemToCart(dto: CartDto) {
  const productId = dto.product.id;
  const url = `/cart/products/${productId}`;
  const response = await coreclient.post<CartData>(url, dto);
  const data = response.data;
  return data;
}
async function removeItemFromCart(dto: CartDto) {
  const productId = dto.product.id;
  const url = `/cart/products/${productId}`;
  const response = await coreclient.delete<CartData>(url, dto);
  const data = response.data;
  return data;
}
async function clearItemInCart(dto: CartDto) {
  const productId = dto.product.id;
  const url = `/cart/products/${productId}/clear`;
  const response = await coreclient.delete(url);
  const data = response.data;
  return data;
}

const cart = {
  getCart,
  addItemToCart,
  removeItemFromCart,
  clearItemInCart,
};

export default cart;
