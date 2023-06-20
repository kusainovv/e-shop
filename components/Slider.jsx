import { useCallback, useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Slide from "./Slide";

const data = [
  {
    id: 1,
    src: "https://i.ibb.co/K6S0P8q/6d43eaaf72e63a2ee69a6363f7c1-sumki-i-aksessuary-dorozhnaya-muzhskaya-kozhanaya-sumka-sport.jpg",
    headline: "КрючОК - магазин для рыбалки и активного отдыха",
    body: "Любите рыбалку, любите туризм - отдых может стать делом всей Вашей жизни! Наш телефон 8-962-704-5966. Мы работаем для Вас с 9.00 до 21.00",
    cta: "Поспешите!",
  },
  {
    id: 2,
    src: "https://i.ibb.co/DDg0htc/best-fishing-times-twitter.jpg",
    headline: "Снасти, крючки, спец. защита",
    body: "В наличии теплые, непромокаемые, дышащие костюмы с мембраной Gamakatsu (Япония), зимние костюмы Alaskan (-25 С), (-30 С) - в таком костюме будет комфортно и тепло не только на рыбалке, охоте или активном отдыхе, но и в повседневной жизни!",
    cta: "Поспешите!",
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
