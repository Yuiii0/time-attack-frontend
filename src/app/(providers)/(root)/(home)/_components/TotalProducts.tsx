"use client";

import ProductCard from "@/components/ProductCard/ProductCard";
import { useQueryProducts } from "@/react-query/products/useQueryProducts";
import { Product } from "@/types/Product.type";

function TotalProducts() {
  const { data: products, isLoading } = useQueryProducts();

  if (isLoading)
    return (
      <section>
        <h2 className="text-center p-8">상품을 가져오는 중 입니다</h2>
      </section>
    );
  return (
    <section>
      <ul
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-5
       gap-y-10"
      >
        {products?.map((product: Product) => (
          <li
            key={product.id}
            className="w-56 mx-auto flex justify-center mb-8 gap-4 "
          >
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TotalProducts;
