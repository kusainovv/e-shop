/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useCallback, useRef, useState } from "react";
import { BsBag } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { Dropdown, Space } from 'antd';
import img from '../images/logo.png';
import Image from "next/image";

const items = [
  {
    key: '1',
    label: (
      <Link href='/products/bag'>сумки</Link>
    ),
  },
  {
    key: '2',
    label: (
      <Link href='/products/wallet'>кошелёк</Link>
    ),
  },
  {
    key: '3',
    label: (
      <Link href='/products/belt'>ремень</Link>
    ),
  },
  {
    key: '4',
    label: (
      <Link href='/products/travel_bag'>дорожная сумка</Link>
    ),
  },
]

const Navbar = () => {
  const { data: session } = useSession();
  const products = useSelector((state) => state.myShop.products);
  const [toggleOpen, setToggleOpen] = useState(false);

  const handleToggle = useCallback(() => {
    if (window.innerWidth > 1023) {
      return;
    }

    setToggleOpen(!toggleOpen);
    document.body.classList.toggle("lock-scroll");
  }, [toggleOpen]);

  return (
    <header className="flex items-center justify-between h-20 wrapper">
        <Link href="/" className="flex items-center text-xl font-semibold">
          <Image src={img} alt='logo' width={140} height={58} />
          Магазин Кожи
        </Link>

      <nav onClick={handleToggle} className="nav-links">
        <ul
          className={`${
            toggleOpen ? "flexColMod" : "hidden lg:flex gap-5 uppercase"
          }`}
        >
          <li>
            <Link href="/" className="linear-walkaways">
              Главная
            </Link>
          </li>
          <li>
          <Dropdown menu={{ items }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <Link href="/products" className="linear-walkaways">
                  Товары
                </Link>
              </Space>
            </a>
          </Dropdown>
          </li>
          <li>
            <Link href="/about" className="linear-walkaways">
              О Магазине
            </Link>
          </li>
          <li>
            <Link href="/contact" className="linear-walkaways">
              Контакты
            </Link>
          </li>
        </ul>
      </nav>

      <div className="flex gap-5 nav-links-right">
        {!session ? (
          <Link href="/user/login" className="uppercase linear-walkaways">
            Войти
          </Link>
        ) : (
          <Link href="/user/profile" className="uppercase linear-walkaways">
            Профиль
          </Link>
        )}

        <Link href="/cart" className="relative">
          <span>
            <BsBag />
          </span>
          <span className="counting-bubble">{products.length}</span>
        </Link>

        <span className="z-[3]">
          <FiMenu
            onClick={handleToggle}
            className={`${
              !toggleOpen ? "block" : "hidden"
            } text-2xl lg:hidden cursor-pointer`}
          />
          <AiOutlineClose
            onClick={handleToggle}
            className={`${
              toggleOpen ? "block" : "hidden"
            } text-2xl lg:hidden cursor-pointer`}
          />
        </span>
      </div>
    </header>
  );
};

export default Navbar;
