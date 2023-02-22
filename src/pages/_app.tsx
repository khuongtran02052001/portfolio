import type { AppProps } from "next/app";
import Slidebar from "../components/Slidebar";
import Navbar from "../components/Navbar";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="grid grid-cols-12 gap-6 px-5 my-[1rem] lg:mb-0 md:mb-16 sm:px-20 md:px-32 lg:px-36 xl:px-48 transition-colors duration-500">
        <div className="h-full col-span-12 p-4 text-base text-center bg-gray-50 dark:bg-dark-500 lg:col-span-3 rounded-2xl shadow-custom-light dark:shadow-custom-dark">
          <Slidebar />
        </div>
        <div className="flex flex-col col-span-12 overflow-hidden bg-gray-50 dark:bg-dark-500 shadow-custom-light dark:shadow-custom-dark rounded-2xl lg:col-span-9">
          <Navbar />
          <AnimatePresence mode="wait">
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </div>
      </div>
    </ThemeProvider>
  );
}
export default MyApp;
