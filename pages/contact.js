import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { toast } from "react-toastify";

const ContactPage = () => {
  const formRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();
    const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID;
    const appTemplateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const appPublicId = process.env.NEXT_PUBLIC_USER_ID;

    emailjs
      .sendForm(serviceID, appTemplateId, formRef.current, appPublicId)
      .then(
        () => {
          toast.success("Message Sent!", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        },
        () => {
          toast.error("Something went wrong!", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      );

    //reset
    e.target.querySelector(".name").value = "";
    e.target.querySelector(".email").value = "";
    e.target.querySelector(".message").value = "";
  };

  return (
    <div className="min-h-screen my-20 wrapper">
      <h2 className="section-title">Свяжитесь с нами</h2>

      <div className="flex mt-10">
        <div className="flex flex-col w-full gap-10 lg:flex-row">
          <form onSubmit={sendEmail} className="w-full flex-[1]" ref={formRef}>
            <div className="gap-3">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block mb-2 text-gray-700 uppercase"
                >
                  Имя
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Напишите свое имя"
                  required
                  className="w-full p-4 text-gray-700 duration-300 border border-gray-300 outline-none appearance-none name focus:border-gray-600"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block mb-2 text-gray-700 uppercase"
                >
                  Почта
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Напишите свою почту"
                  required
                  className="w-full p-4 text-gray-700 duration-300 border border-gray-300 outline-none appearance-none email focus:border-gray-600"
                />
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block mb-2 text-gray-700 uppercase"
              >
                Сообщение
              </label>
              <textarea
                name="message"
                placeholder="Напишите ваше сообщение"
                required
                className="w-full h-40 p-4 text-gray-700 duration-300 border border-gray-300 outline-none appearance-none resize-none message focus:border-gray-600"
              />
            </div>
            <input
              required
              className="px-10 py-5 text-white uppercase duration-300 bg-black cursor-pointer hover:opacity-80"
              type="submit"
              value="Отправить"
            />
          </form>

          <div className="right flex flex-col gap-5 flex-[1]">
            <div>
              <p className="text-lg font-medium uppercase">
                Адресс для возврата инвентаря
              </p>
              <p>г. Саратов, ул. Орджоникидзе, д. 54</p>
            </div>
            <div>
              <p className="text-lg font-medium uppercase">Номер телефона:</p>
              <p className="underline text-rose-500 underline-offset-2">
                8 827 555 21 53
              </p>
            </div>
            <div>
              <p className="text-lg font-medium uppercase">Почта:</p>
              <p className="underline text-rose-500 underline-offset-2">
                магазин_крючок@yandex.com
              </p>
            </div>
            <div>
              <p className="text-lg font-medium uppercase">График работы:</p>
              <p>Пн-Вс: 09:00 - 23:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
