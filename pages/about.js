import { ImageAbout } from "@/components/ImageAbout";
import LogoItemForAbout from "@/components/LogoItemForAbout";
import Image from "next/image";
import img from '../images/logo.png';

const AboutPage = () => {
  const logos = [
    {
      id: 2,
      src: "https://static.vecteezy.com/system/resources/previews/001/192/065/original/circle-logo-turbine-png.png",
      title: "logo2",
    },
    {
      id: 2,
      src: "https://logos-world.net/wp-content/uploads/2020/09/Starbucks-Logo.png",
      title: "logo2",
    },
    {
      id: 3,
      src: "https://www.shutterstock.com/image-vector/circle-leaf-transparent-png-shape-260nw-2156342163.jpg",
      title: "logo3",
    },
    {
      id: 4,
      src: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Logo_vector.png",
      title: "logo4",
    },
    {
      id: 5,
      src: "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png",
      title: "logo5",
    },
    {
      id: 6,
      src: "https://img.freepik.com/vector-gratis/gradiente-ilustracion-pajaro-colorido_343694-1741.jpg",
      title: "logo6",
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="header">
        <Image
          priority
          unoptimized
          loader={() => "https://i.postimg.cc/QN53SCr8/XXL-1.webp"}
          src={"https://i.postimg.cc/QN53SCr8/XXL-1.webp"}
          width={50}
          height={25}
          alt={"Man Riding on Motorcycle"}
          className="w-full h-[48rem] object-cover brightness-50"
        />

        <p className="text-center absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] uppercase font-extralight text-white text-8xl">
          О Магазине
        </p>
      </div>

      <div className="wrapper">
        <div className="my-20 text-center">
          <Image src={img} alt='logo' width={240} height={58} className="m-auto" />
          <p className="p-5 text-xl font-semibold tracking-widest text-black uppercase">
            Магазин Кожи
          </p>
          <p className="text-4xl px-[20rem] pb-5 font-extralight">
            {`Мы "Магазин Кожи", который предлагает Вам огромный ассортимент
            кожанных изделий`}
          </p>
          <p className="px-[15rem] pb-5 text-xl font-light">
            {`Натуральная кожа для пошива изделий по цене производителя. Новые
            коллекции кожевенных заводов Италии, Турции и Кореи в Москве в
            магазине "Магазин Кожи" на Орджоникидзе. Покупайте шкурки
            натуральной кожи в розницу от одной пластины или оптом от одного
            рулона. Выбирайте в нашем каталоге и собирайте в корзину ваш
            онлайн-заказ. Мы посчитаем его стоимость, упакуем и доставим кожу в
            любую точку России.`}
          </p>
        </div>

        <div>
          <ImageAbout />
        </div>

        <div className="grid items-start justify-center grid-cols-2 p-20">
          <div className="text-4xl px-[5rem] pb-5 font-extralight">
            <p>Это фотографии нашего магазина.</p>
          </div>
          <div className="px-[5rem] pb-5 text-xl font-light">
            <p>
              <b>
                Чтобы найти наш магазин, вам нужно подойти ко 2-му подъезду со
                стороны двора.
              </b>
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-10 py-10 wrapper">
        <p className="p-5 text-xl font-semibold tracking-widest text-center text-black uppercase">
          Партнеры
        </p>

        <p className="text-4xl px-[5rem] pb-5 font-extralight text-center">
          У нас много партнеров, которым мы предлагаем наши услуги
        </p>

        <div className="p-10">
          <div className="grid grid-cols-3 mx-[30rem]">
            {logos.map((logo) => (
              <LogoItemForAbout key={logo.id} logo={logo} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
