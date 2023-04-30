import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-20 text-gray-300 bg-black">
      <div className="grid w-full grid-cols-1 gap-16 pb-20 md:grid-cols-2 lg:grid-cols-4 wrapper md:gap-10 lg:gap-5 xl:gap-10 2xl:px-20 ">
        <div className="flex flex-col items-start footer-col-1">
          <Link
            href="/"
            className="text-4xl font-semibold duration-300 md:text-2xl text-rose-500 hover:text-white"
          >
            Магазин Кожи.
          </Link>
        </div>
        <div className="flex flex-col items-start footer-col-2">
          <p className="tracking-wider text-gray-400 uppercase follow-text">{`Следите за нами в соц. сетях`}</p>
          <div className="social-icons">
            <div className="icon-circle">
              <FaFacebookF className="mx-auto text-rose-100" />
            </div>
            <div className="icon-circle">
              <FaInstagram className="mx-auto text-rose-100" />
            </div>
            <div className="icon-circle">
              <FaLinkedinIn className="mx-auto text-rose-100" />
            </div>
            <div className="icon-circle">
              <FaTwitter className="mx-auto text-rose-100" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start footer-col-3">
          <p className="font-medium tracking-wider uppercase text-rose-500">
            Навигация
          </p>
          <div className="flex justify-start gap-10 mt-3 nav-link flex-col-2">
            <div className="flex flex-col gap-1 text-left uppercase link-col-left">
              <Link href="/" className="footer-nav-links">
                Главная
              </Link>
              <Link href="/products" className="footer-nav-links">
                Магазин
              </Link>
            </div>
            <div className="flex flex-col gap-1 text-left uppercase link-col-right">
              <Link href="/about" className="footer-nav-links">
                О Магазине
              </Link>
              <Link href="/contact" className="footer-nav-links">
                Контакты
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-3 footer-col-4 xl:items-center">
          <p className="tracking-wider text-gray-400 uppercase">
            Нужна консультация?
          </p>
          <button className="px-6 py-4 text-sm font-medium uppercase duration-300 rounded-full footer-btn bg-rose-700 hover:text-rose-500 hover:bg-rose-50">
            + Написать сообщение
          </button>
          <p className="text-lg font-medium">contact@euphoria.com</p>
        </div>
      </div>

      <p className="pt-20 text-center text-gray-400 uppercase border-t copyright border-gray-500/40 wrapper">
        &copy; {new Date().getFullYear()} Магазин Кожи. Все права сохранены.
      </p>
    </footer>
  );
};

export default Footer;
