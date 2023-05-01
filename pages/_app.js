import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import { store, persistor } from "@/store";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps, session }) {
  return (
    <>
      <Head>
        <title>Магазин Кожи</title>
      </Head>

      <SessionProvider session={session}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ToastContainer />
            <Navbar />
            <Component {...pageProps} />
            <Footer />
          </PersistGate>
        </Provider>
      </SessionProvider>
    </>
  );
}
