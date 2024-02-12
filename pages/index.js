import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import FeedbackForm from "@components/FeedbackForm";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Daimyo of the South</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Daimyo of the South" />
        <hr />
        <p className="description">
          submissions can be found in the Netlify Admin site.
        </p>
        <FeedbackForm />
      </main>
      <Footer />
    </div>
  );
}
