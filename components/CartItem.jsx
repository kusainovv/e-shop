import Image from "next/image";
import { formatCurrency } from "@/utils/formatCurrency";
import { useDispatch } from "react-redux";
import { removeItem } from "@/store/productSlice";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div
      key={product.id}
      className="product grid grid-cols-5 gap-10 border-b pb-5 mt-5 max-[425px]:gap-2 max-[425px]:mt-2 max-[425px]:pb-2"
    >
      <div className="left flex col-span-2 gap-5 max-[425px]:gap-2">
        <Image
          priority
          unoptimized
          loader={() => product.img}
          src={product.img}
          width={270}
          height={270}
          alt={product.title}
          className="object-cover w-24 h-24 img"
        />
        <div className="flex flex-col items-start gap-2 details">
          <span>{product.title}</span>
          <button
            onClick={() => dispatch(removeItem(product))}
            className="text-gray-400 uppercase linear-walkaways"
          >
            Удалить
          </button>
        </div>
      </div>
      <p className="text-center unit-price">{formatCurrency(product.price)}</p>
      <p className="text-center quantity">{product.quantity}</p>
      <div className="ml-auto total-price">
        <span>{+product.price.split(',')[0].replace(/\D+/g, '') * product.quantity}руб</span>
      </div>
    </div>
  );
};

export default CartItem;
