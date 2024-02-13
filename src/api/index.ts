import axios from "axios";
import auth from "./auth/auth.api";
import cart from "./cart/cart.api";
import products from "./product/product.api";

export const coreclient = axios.create({
  baseURL: "https://port-0-express-server-17xco2nlsidlckv.sel5.cloudtype.app",
  withCredentials: true,
});
const API = { auth, products, cart };
export default API;
