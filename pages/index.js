import Slider from "@/components/Slider";
import ProductsPage from "./products";
// import { getAllProducts } from "@/prisma/products";
import Countdown from "@/components/Countdown";
import MenProductsPage from "./products/men";
import WomenProductsPage from "./products/women";
import Gallery from "@/components/Gallery";
import Categories from "@/components/Categories";
import axios from "axios";
import Link from "next/link";

const HomePage = ({ products }) => {
  const endDate = new Date().getTime() + 48 * 60 * 60 * 1000;
  const menProducts = products.filter((product) => product.category === "Men");
  const womenProducts = products.filter(
    (product) => product.category === "Women"
  );

  return (
    <div>
      <Slider />
      <Countdown endDate={endDate} />
      <Categories />
      <ProductsPage products={products} />
      {/* <MenProductsPage products={menProducts} /> */}
      {/* <WomenProductsPage products={womenProducts} /> */}
      {/* <Gallery /> */}
    </div>
  );
};

export default HomePage;

export const getServerSideProps = async () => {
  const products = await axios.get('http://90.156.225.217:3000').then(r => r.data[0]);

  // const updatedProducts = products.map((product) => ({
  //   // ...product,
  //   updatedAt: product.updatedAt.toString(),
  //   createdAt: product.createdAt.toString(),
  // }));

  return {
    props: {
      products: products,
    },
  };
};
