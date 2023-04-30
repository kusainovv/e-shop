import { useCallback, useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Slide from "./Slide";

const data = [
  {
    id: 1,
    src: "https://www.javaid-leather.ru/images/slider/naturalnaya-kozha_8.jpg",
    headline: "Натуральная кожа для пошива изделий",
    body: "Натуральная кожа для пошива изделий по цене производителя. Новые коллекции кожевенных заводов Италии, Турции и Кореи в Москве в магазине Javaid Leather на Щербаковской.",
    cta: "Поспешите!",
  },
  {
    id: 2,
    src: "https://www.javaid-leather.ru/images/slider/naturalnaya-kozha_5.jpg",
    headline: "Черная кожа - наш выбор!",
    body: "Черный цвет. Элегантный. Красивый",
    cta: "Черная кожа",
  },
];

const Slider = () => {
  const [curSlide, setCurSlide] = useState(0);

  const goToPrev = useCallback(() => {
    setCurSlide(curSlide === 0 ? data.length - 1 : (prev) => prev - 1);
  }, [curSlide]);

  const goToNext = useCallback(() => {
    setCurSlide(curSlide === data.length - 1 ? 0 : (prev) => prev + 1);
  }, [curSlide]);

  return (
    <div className="relative overflow-x-hidden frame">
      <div
        className="slider"
        style={{
          transform: `translateX(-${100 * curSlide}vw)`,
          width: `${100 * data.length}vw`,
        }}
      >
        {data.map((image, index) => (
          <Slide key={index} image={image} />
        ))}
      </div>

      <div className="navigators bottom-10 sm:bottom-20">
        <button onClick={goToPrev} className="navigators-btn">
          <BsArrowLeft />
        </button>
        <button onClick={goToNext} className="navigators-btn">
          <BsArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Slider;
