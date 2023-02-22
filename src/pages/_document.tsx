import Document, { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <Link rel="preconnect" href="https://fonts.gstatic.com" aria-label="font"/>
          <meta name="google-site-verification" content="3kYzG52_FPmJmGNDQfhOXmHVxDdxDIU48qVTitPizZo" />
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="theme-color" content="#317EFB" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="vi_VN" />
          <meta property="og:site_name" content="This website I made to train myself as well as want the employer to see my personal information, to see if I am suitable for the job, thank you for reading" />
          <meta name="description" content='This website I made to train myself as well as want the employer to see my personal information, to see if I am suitable for the job, thank you for reading.' />
          <meta property="og:description" content='This website I made to train myself as well as want the employer to see my personal information, to see if I am suitable for the job, thank you for reading.' />
          <meta property="og:url" content='https://tranduykhuong-alpha.vercel.app' />
          <meta property="og:image" content='https://res.cloudinary.com/dsqlqtyyp/image/upload/v1677069030/Mern-2022/303F6537-2C19-4157-B025-96BB974092F6_1_105_c_d7wcmz.jpg' />
          <meta property="og:image:alt" content="https://tranduykhuong-alpha.vercel.app" />
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image:width" content="800" />
          <meta property="og:image:height" content="600" />
          <meta property="og:title" content='Tran Duy Khuong' />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:title" content='Tran Duy Khuong' />
          <meta property="twitter:description" content='This website I made to train myself as well as want the employer to see my personal information, to see if I am suitable for the job, thank you for reading.' />
          <meta property="twitter:image" content='https://res.cloudinary.com/dsqlqtyyp/image/upload/v1677069030/Mern-2022/303F6537-2C19-4157-B025-96BB974092F6_1_105_c_d7wcmz.jpg' />
        </Head>
        <body className="bg-gradient-to-r from-green to-blue-400 dark:from-dark-500 dark:to-dark-700 dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;
