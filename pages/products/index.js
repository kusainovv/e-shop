import ProductItem from "@/components/ProductItem";
import axios from "axios";

const ProductsPage = ({ products, title }) => {
  return (
    <div className="flex flex-col gap-10 my-20 wrapper">
      <h2 className="section-title">{title ?? 'Все товары'}</h2>

      <div className="grid grid-cols-1 gap-10 products md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;

export const getServerSideProps = async () => {
  const products = await axios.get('http://90.156.225.217:3000').then(r => r.data[0]);

  return {
    props: {
      products,
    },
  };
};
