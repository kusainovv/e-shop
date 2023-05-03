import ProductItem from "@/components/ProductItem";
import { Select } from "antd";
import axios from "axios";
import { useState } from "react";

const ProductsPage = ({ products, title }) => {
  const [productsResult, setProductsResult] = useState(products.filter(product => product.type === 'дорожная_сумка'));
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="flex flex-col gap-10 my-20 wrapper">
      <h2 className="section-title">{title ?? "Все товары"}</h2>
      <div>
        <input
          type="text"
          name="text"
          placeholder="Найдите свою вещь"
          required
          onChange={(e) => {
            if (!e.target.value.length) {
              axios.get(`http://90.156.225.217:3000`).then((r) => {
                setProductsResult(r.data[0].filter(product => product.type === 'дорожная_сумка'));
              });
            } else {
              axios
                .get(`http://90.156.225.217:3000/find/${e.target.value}`)
                .then((r) => {
                  setProductsResult(r.data[0].filter(product => product.type === 'дорожная_сумка'));
                  setSearchValue(e.target.value);
                });
            }
          }}
          className="w-full p-4 text-gray-700 duration-300 border border-gray-300 outline-none appearance-none email focus:border-gray-600"
        />

        <Select
          mode="tags"
          allowClear
          style={{ width: "200px", marginTop: "4px" }}
          placeholder="Фильтровать по цвету"
          options={[
            { label: "черный", value: "black" },
            { label: "синий", value: "blue" },
            { label: "хаки", value: "hacki" },
            { label: "белый", value: "white" },
            { label: "красный", value: "red" },
          ]}
          onChange={(e) => {
            if (!e.length) {
              axios
                .get(`http://90.156.225.217:3000/find/${searchValue}`)
                .then((r) => {
                  setProductsResult(r.data[0].filter(product => product.type === 'дорожная_сумка'));
                });
            } else {
              setProductsResult(
                products.filter(
                  (product) =>
                    e.includes(product.color) &&
                    product.title.toLowerCase().includes(searchValue)
                )
              );
            }
          }}
        />

        <Select
          allowClear
          style={{ width: "200px", marginTop: "4px", marginLeft: "4px" }}
          placeholder="Сортировка"
          options={[
            { label: "По возрастанию", value: "up" },
            { label: "По убыванию", value: "down" },
            { label: "По популярности", value: "popularity" },
          ]}
          onChange={(e) => {
            if (e === "up") {
              setProductsResult(
                [].concat(productsResult.sort((p, c) => {
                  return (
                    +p.price.split(",")[0].replace(/\D+/g, "") -
                    +c.price.split(",")[0].replace(/\D+/g, "")
                  );
                }))
              );
            } else if (e === "down") {
              setProductsResult(
                [].concat(
                  productsResult.sort((p, c) => {
                    return (
                      +c.price.split(",")[0].replace(/\D+/g, "") -
                      +p.price.split(",")[0].replace(/\D+/g, "")
                    );
                  })
                )
              );
            } else {
              setProductsResult(
                [].concat(
                  productsResult.sort((p, c) => {
                    return p.title.localeCompare(c.title);
                  })
                )
              );
            }
          }}
        />
      </div>
      {productsResult.length ? (
        <div className="grid grid-cols-1 gap-10 products md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {productsResult.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <h2
          style={{
            margin: "100px auto",
          }}
          className="section-title"
        >
          Пусто
        </h2>
      )}
    </div>
  );
};

export default ProductsPage;

export const getServerSideProps = async () => {
  const products = await axios
    .get("http://90.156.225.217:3000")
    .then((r) => r.data[0]);

  return {
    props: {
      products,
    },
  };
};
