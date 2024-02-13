import { Product } from "@/types/Product.type";
import { formatPrice } from "@/utils/formatPrice";
import Link from "next/link";

function ProductCard({ product }: { product: Product }) {
  const originalPrice = formatPrice(product.originalPrice);
  const price = formatPrice(product.price);
  return (
    <Link href={`/products/${product.id}`}>
      <img
        src={product.imgSrc}
        alt={product.name}
        className="w-52 h-72 object-contain  hover:scale-105 transition-all"
      />
      <div className="flex flex-col gap-y-2">
        <p className="text-sm font-bold">{product.brand.nameEn}</p>
        <p className="text-sm font-light h-12">{product.name.slice(0, 20)}</p>
        <div className="flex text-sm">
          <p className="mr-2 text-red-500 line-through ">₩{originalPrice}</p>
          <p className="font-bold">₩{price}</p>
          <p></p>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
