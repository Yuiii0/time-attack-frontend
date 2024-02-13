"use client";

import Page from "@/components/Page/Page";
import { useQueryProducts } from "@/react-query/products/useQueryProducts";
import { Product } from "@/types/Product.type";
import TotalProducts from "../(home)/_components/TotalProducts";

function BrandPage() {
  const { data: products, isLoading } = useQueryProducts();

  const brandSet = new Set(
    products?.map((product: Product) => product.brand.nameKr)
  );
  const brandArray = [...brandSet];
  console.log(brandArray);

  return (
    <Page title="Brands">
      <h3 className="text-center mb-6  text-gray-500">ALL</h3>
      <ul className="grid grid-cols-4 text-center text-sm gap-y-1 w-1/2  mx-auto text-gray-500">
        {brandArray.map((brand) => (
          <li key={brand}>{brand}</li>
        ))}
      </ul>
      <section className="mt-20">
        <TotalProducts />
      </section>
    </Page>
  );
}

export default BrandPage;
