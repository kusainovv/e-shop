import Link from "next/link";

const Slide = ({ image }) => {
  return (
    <div className="slide" style={{ backgroundImage: `url(${image.src})` }}>
      <div className="container flex flex-col items-start justify-center h-full gap-5 mx-8 slide-text md:mx-10 xl:mx-20 text-violet-50">
        <h1 className="z-10 text-4xl font-semibold uppercase md:text-6xl lg:text-7xl space-font">
          {image.headline}
        </h1>
        <p className="z-20 w-2/3 text-sm lg:w-1/2 md:text-base lg:text-lg xl:text-xl">
          {image.body}
        </p>
        <div
          className="cta-btn border-[1px] uppercase h-12 w-64 md:h-14 md:w-72 mt-5 duration-300 font-medium"
        >
          <span className="absolute z-30 w-full text-center top-[30%] text-sm md:text-base">
            {image.cta}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Slide;
