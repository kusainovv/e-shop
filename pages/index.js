import Slider from "@/components/Slider";
import ProductsPage from "./products";
// import { getAllProducts } from "@/prisma/products";
import Countdown from "@/components/Countdown";
import Categories from "@/components/Categories";
import axios from "axios";

const HomePage = ({ products }) => {
  const endDate = new Date().getTime() + 48 * 60 * 60 * 1000;

  return (
    <div>
      <Slider />
      <Countdown endDate={endDate} />
      <Categories />
      <ProductsPage products={products} title={"Последние товары"} />
    </div>
  );
};

export default HomePage;

export const getServerSideProps = async () => {
  const products = await axios.get('http://90.156.225.217:3000').then(r => r.data[0]);
  return {
    props: {
      products: products.slice(0, 4),
    },
  };
};
