import Link from "next/link";
import { formatCurrency } from "@/utils/formatCurrency";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "@/components/CartItem";
import { clearCart } from "@/store/productSlice";
import { useState } from "react";
import { Button, Form, Input, Modal, notification } from "antd";

const CartPage = () => {
  const [menu, setMenu] = useState(false);

  const products = useSelector((state) => state.myShop.products);
  const dispatch = useDispatch();

  const total = products.reduce((prev, product) => {
    const r = Array.from({ length: product.quantity }).map(() => product).reduce((p, c) => {
      return +p + +c.price.split(',')[0].replace(/\D+/g, '')
    }, 0);

    return +prev + +r
  }, 0)

  const [email, setEmail] = useState('');

  const openNotification = () => {
    notification.open({
      message: '',
      description:
        'Мы отправим вам письмо для потдверждения почты'
    });
  };

  const validateMessages = {
    required: 'Поле ${label} обязательно!',
    types: {
      email: '${label} не валидный email!',
    }
  };

  return (
    <div className="cart-section wrapper my-20 min-h-screen max-[640px]:my-10 max-[640px]:text-[12px] max-[768px]:text-sm max-[1024px]:text-base max-[1024px]:px-5">
      <h2 className="section-title mb-10 max-[385px]:text-xl max-[640px]:text-center max-[640px]:text-2xl max-[640px]:mb-5 max-[1024px]:text-3xl">
        {products.length > 0 ? (
          <p>
            Корзина: ({products.length}) шт.
          </p>
        ) : (
          <p className="text-center">Корзина пуста</p>
        )}
      </h2>

      {products.length < 1 && (
        <div className="text-center">
          <Link
            href="/products"
            className="inline-block px-5 py-3 uppercase duration-300 border clear-cart hover:bg-cyan-500 hover:text-cyan-50 hover:border-cyan-500 "
          >
            Продолжить
          </Link>
        </div>
      )}

      {products.length > 0 && (
        <>
          <div className="cart-items-wrapper max-[385px]:text-[10px]">
            <div className="grid grid-cols-5 gap-10 pb-2 font-light uppercase border-b product-headlines">
              <div className="col-span-2 col-product">Товар</div>
              <div className="text-center col-unit-price">Цена</div>
              <div className="text-center col-quantity">Качество</div>
              <div className="ml-auto col-total-price">Всего</div>
            </div>

            <div className="flex flex-col products">
              {products?.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
            </div>
          </div>

          <div className="cart-lower flex justify-between items-start my-10 max-[640px]:my-5 max-[640px]:gap-5 max-[640px]:flex-col">
            <div className="flex justify-center items-center gap-5 max-[640px]:w-full">
              <button
                onClick={() => dispatch(clearCart())}
                className="clear-cart uppercase border p-3 hover:bg-rose-500 hover:text-rose-50 hover:border-rose-500 duration-300 max-[385px]:hidden max-[640px]:w-full"
              >
                Очистить корзину
              </button>
              <Link
                href="/products"
                className="clear-cart uppercase text-center border p-3 hover:bg-cyan-500 hover:text-cyan-50 hover:border-cyan-500 duration-300 max-[385px]:text-xs max-[640px]:w-full"
              >
                Продолжить покупки
              </Link>
            </div>

            <div className="flex flex-col items-start gap-5 max-[385px]: text-xs max-[640px]:w-full">
              <div className="top flex justify-between items-center w-full text-xl font-medium border-b max-[640px]:text-[12px]">
                <span className="uppercase">Итог: </span>
                <span>{total}руб</span>
              </div>
              <p className="text-gray-400  max-[640px]:hidden">
                В данный момент действует скидка
              </p>
              <button onClick={() => {
                setMenu(true);
              }} className="w-full py-5 font-medium tracking-widest text-center uppercase duration-300 checkout bg-cyan-500 text-cyan-50 hover:bg-cyan-600">
                Купить
              </button>
            </div>
          </div>
        </>
      )}

      <Modal footer={null} title="Оформите заказ" open={menu} onOk={() => {
        setMenu(true)
      }} onCancel={() => {
        setMenu(false);
      }}>
        <Form
            validateMessages={validateMessages}
            onSubmitCapture={(e) => {
              if (new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}').test(email)) {
                setMenu(false);
                openNotification();
              }
            }}  
        >
          <Form.Item
            name={['user', 'email']} label="Email" 
            rules={[
              {
                required: true,
                message: 'Email обязателен',
              },
              {
                message: ' ',
                validator: (_, value) => {
                  if (new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}').test(value)) {
                    return Promise.resolve();
                  } else {
                    return Promise.reject('Email обязателен');
                  }
                 }
               }
             ]}
            placeholder="Введите вашу почту"
          >
            <Input required type="email" onChange={(e) => {
              setEmail(e.target.value);
            }} />
          </Form.Item>
          
          <Form.Item>
            <Button style={{
              display: 'flex',
              marginLeft: 'auto',
              marginTop: '10px',
              background: 'rgb(9 84 253)',
              color: 'white'
            }} htmlType="submit">Отправить письмо</Button>
          </Form.Item>
        </Form>
      </Modal>

    </div>
  );
};

export default CartPage;
