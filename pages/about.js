import { ImageAbout } from "@/components/ImageAbout";
import LogoItemForAbout from "@/components/LogoItemForAbout";
import Image from "next/image";
import img from "../images/logo.png";

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
          loader={() => "https://i.ibb.co/mBTRFFT/fishing-top-1920.jpg"}
          src={"https://i.ibb.co/mBTRFFT/fishing-top-1920.jpg"}
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
          <Image
            src={img}
            alt="logo"
            width={240}
            height={58}
            className="m-auto"
          />
          <p className="p-5 text-xl font-semibold tracking-widest text-black uppercase">
            Магазин "КрючОК"
          </p>
          <p className="text-4xl px-[20rem] pb-5 font-extralight">
            {`Мы "Магазин "Крючок", который предлагает Вам огромный ассортимент рыбаловочных изделий`}
          </p>
          <p className="px-[15rem] pb-5 text-xl font-light">
            {`В нашем магазине Вы сможете найти все, что необходимо для хорошей рыбалки, туризма и активного отдыха, товары как отечественных производителей, так и зарубежных ведущих фирм! Спиннинги, катушки, приманки и другие рыболовные снасти. Экипировка и снаряжение для рыбалки и активного отдыха - большой выбор термобелья для мужчин и женщин!Демисезонные и зимние костюмы, перчатки, шапки, маски, балаклавы.`}
          </p>
        </div>

        <div>
          <ImageAbout />
        </div>

        <div className="grid items-start justify-center grid-cols-2 p-20">
          <div className="text-4xl px-[5rem] pb-5 font-extralight">
            <p>Это фотографии наших клиентов.</p>
          </div>
          <div className="px-[5rem] pb-5 text-xl font-light">
            <p>
              <b>
                Чтобы получить скидку 5% выложите фотографию с нашим инвентарём!
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
