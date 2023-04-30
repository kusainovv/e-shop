import { formatCurrency } from "@/utils/formatCurrency";
import Image from "next/image";
import Link from "next/link";

const ProductItem = ({ product }) => {
  console.warn(product)
  return (
    <div className="flex flex-col gap-3 w-full md:w-[20rem] border-b pb-3">
      <Image
        loader={() => product.img}
        src={product.img}
        width={216}
        height={216}
        alt={product.title}
        className="w-auto"
      />
      <span className="text-xs font-semibold tracking-widest uppercase">
        {product.type}
      </span>
      <h3 className="text-2xl font-ligh">{product.title}</h3>
      <div className="flex items-center justify-between">
        <p className="font-medium text-rose-500">
          {product.price}
        </p>
        <Link
          href={`/products/${product.id}`}
          className="uppercase linear-walkaways"
        >
          Buy now
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;
