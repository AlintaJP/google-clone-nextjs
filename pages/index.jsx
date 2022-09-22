import Head from "next/head";
import Header from "../components/home/Header";
import Form from "../components/home/Form";
import Footer from "../components/home/Footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google Clone</title>
        <meta name="description" content="Google Clone Built With NextJS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Form />
      <Footer />
    </div>
  );
}
