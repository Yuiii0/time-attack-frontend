"use client";

import API from "@/api";
import Page from "@/components/Page/Page";
import { useQueryProduct } from "@/react-query/products/useQueryProducts";
import { formatPrice } from "@/utils/formatPrice";
import { useMutation } from "@tanstack/react-query";

function ProductDetail(props: { params: { productId: string } }) {
  const productId = props.params.productId;

  const { data: product, isLoading } = useQueryProduct(productId);

  const { mutate } = useMutation({
    mutationFn: API.cart.addItemToCart,
  });

  const handleClickCartButton = async () => {
    mutate(
      { amount: 1, product },
      {
        onSuccess: () => {
          alert("장바구니 담기 성공");
        },
      }
    );
  };

  if (isLoading)
    return (
      <section>
        <h2 className="text-center p-8">상품을 가져오는 중 입니다</h2>
      </section>
    );
  const originalPrice = formatPrice(product.originalPrice);
  const price = formatPrice(product.price);

  return (
    <Page>
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-x-1 max-w-4xl mx-auto">
        <div className="w-3/4">
          <img src={product.imgSrc} className="object-cover max-w-96"></img>
        </div>
        <div className="flex flex-col gap-4 pt-6">
          <h2 className="font-bold pb-3 border-b text-base">
            <span>{product.brand.nameKr} / </span>
            <span>{product.brand.nameEn}</span>
          </h2>
          <p>{product.name}</p>
          <ul className="flex flex-col gap-y-5 mt-6 text-sm">
            <li className="flex">
              <div className="font-bold w-24">정가</div>
              <div className=" text-red-500 line-through">₩{originalPrice}</div>
            </li>
            <li className="flex">
              <div className="font-bold w-24">판매가</div>
              <div className="font-bold">₩{price}</div>
            </li>
            <li className="flex">
              <div className="font-bold w-24">배송</div>
              <div>{product.deliveryType}</div>
            </li>
            <li className="flex">
              <div className="font-bold w-24">잔여 재고</div>
              <div>{product.onlineStock}</div>
            </li>
          </ul>
          <button
            className="bg-black text-white p-3 mt-5"
            onClick={handleClickCartButton}
          >
            장바구니 담기
          </button>
        </div>
      </section>
    </Page>
  );
}
export default ProductDetail;
