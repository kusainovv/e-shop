import Link from "next/link";

const Category = () => {
  return (
    <div className="flex flex-col gap-10 my-20 category wrapper">
      <h2 className="section-title">Категории</h2>
      <div className="flex gap-5 category-wrapper flex-col-2">
        <Link href={"products/bag"} className="sq-men sq-bag">
          <div className="overlay"></div>
          <h3 className="category-title-men">
            <p>Сумка</p>
          </h3>
        </Link>
        <Link href={"products/women"} className="sq-men sq-wallet">
          <div className="overlay"></div>
          <h3 className="category-title-men">
            <p>Кошелек</p>
          </h3>
        </Link>
        <Link href={"products/women"} className="sq-men sq-belt">
          <div className="overlay"></div>
          <h3 className="category-title-men">
            <p>Ремень</p>
          </h3>
        </Link>
        <Link href={"products/women"} className="sq-men sq-travel-bag">
          <div className="overlay"></div>
          <h3 className="category-title-men">
            <p>Пальто</p>
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default Category;
