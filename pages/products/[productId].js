import { useCallback, useState } from "react";
// import { getProduct } from "@/prisma/products";
import { addToCart } from "@/store/productSlice";
import { useDispatch } from "react-redux";
import { formatCurrency } from "@/utils/formatCurrency";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { formatColor } from "@/utils/formatColor";

const ProductDetails = ({ products, productId }) => {
  const [quantity, setQuantity] = useState(1);

  const product = products.filter(product => +product.id === productId)[0];
  console.warn(product)
  const handleDecrease = useCallback(() => {
    setQuantity(quantity === 1 ? 1 : (prev) => prev - 1);
  }, [quantity]);
  
  const handleIncrease = useCallback(() => {
    setQuantity((prev) => prev + 1);
  }, []);

  const dispatch = useDispatch();

  return (
    <div className="grid gap-10 my-10 wrapper lg:grid-cols-2">
      <div
        width={500}
        height={500}
        alt={product.title}
        style={{
          backgroundImage: `url(${product.img})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}
        className="object-cover w-full h-full"
      />

      <div className="flex flex-col gap-5">
        <span className="text-sm font-semibold tracking-widest uppercase text-cyan-500">
          {product.category}
        </span>
        <h2 className="text-4xl">{product.title}</h2>
        <div className="flex items-center gap-10">
          <p className="text-2xl font-medium text-rose-500">
            {product.price}
          </p>
          <div className="flex items-center text-2xl bg-gray-100 counter">
            <button
              onClick={handleDecrease}
              className="flex items-center justify-center w-10 h-10 text-white duration-300 bg-gray-700 hover:bg-cyan-500"
            >
              -
            </button>
            <span className="flex items-center justify-center w-10 h-10">
              {quantity}
            </span>
            <button
              onClick={handleIncrease}
              className="flex items-center justify-center w-10 h-10 text-white duration-300 bg-gray-700 hover:bg-cyan-500"
            >
              +
            </button>
          </div>
        </div>
        <Link
          onClick={() => dispatch(addToCart({ ...product, quantity }))}
          href="/cart"
          className="py-3 mt-5 text-xl font-medium text-center text-white duration-300 bg-cyan-500 hover:bg-cyan-600"
        >
          В Корзину
        </Link>
        <div className="mt-5">
          <p className="mb-3 font-medium">Тип:</p>
          <p className="text-gray-500">{product.type.replace('_', ' ')}</p>
        </div>

        <div className="mt-5">
          <p className="mb-3 font-medium">Цвет:</p>
          <p className="text-gray-500"><b>{formatColor(product.color)}</b></p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

export const getServerSideProps = async (params) => {
  
  const products = await axios.get('http://90.156.225.217:3000').then(r => r.data[0]);

  return {
    props: {
      products,
      productId: +params.query.productId,
    },
  };
};
