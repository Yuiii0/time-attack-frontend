const BASE_URL =
  "https://port-0-express-server-17xco2nlsidlckv.sel5.cloudtype.app";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
  },
};

export async function getProducts() {
  const url = `${BASE_URL}/products`;
  const response = await fetch(url, options);
  const data = await response.json();
  const items = data.result;

  return items;
}

export async function getProduct(productId: string) {
  const url = `${BASE_URL}/products/${productId}`;
  const response = await fetch(url, options);
  const data = await response.json();
  const item = data.result;

  return item;
}

const products = {
  getProducts,
  getProduct,
};

export default products;
