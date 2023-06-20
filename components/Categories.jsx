import Link from "next/link";

const Category = () => {
  return (
    <div className="flex flex-col gap-10 my-20 category wrapper">
      <h2 className="section-title">Категории</h2>
      <div className="flex gap-5 category-wrapper flex-col-2">
        <Link href={"products/bag"} className="sq-men sq-bag">
          <div className="overlay"></div>
          <h3 className="category-title-men">
            <p>Снасти</p>
          </h3>
        </Link>
        <Link href={"products/wallet"} className="sq-men sq-wallet">
          <div className="overlay"></div>
          <h3 className="category-title-men">
            <p>Катушки</p>
          </h3>
        </Link>
        <Link href={"products/belt"} className="sq-men sq-belt">
          <div className="overlay"></div>
          <h3 className="category-title-men">
            <p>Приманки</p>
          </h3>
        </Link>
        <Link href={"products/travel_bag"} className="sq-men sq-travel-bag">
          <div className="overlay"></div>
          <h3 className="p-3 category-title-men">
            <p>Одежда</p>
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default Category;
