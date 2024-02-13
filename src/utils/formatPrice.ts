export function formatPrice(price: number) {
  return price.toLocaleString();
}

// export const calculateDisCountRate = (
//   originalPrice: number,
//   discountedPrice: number
// ) => {
//   if (originalPrice <= 0 || discountedPrice <= 0) {
//     return;
//   }
//   const discountRate =
//     ((originalPrice - discountedPrice) / originalPrice) * 100;
//   return parseInt(discountRate);
// };
