import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MarketingPageClientBlock from "../../components/MarketingPageClientBlock";
import MarketingPageHeroBanner from "../../components/MarketingPageHeroBanner";
import MarketingPageStatsBlock from "../../components/MarketingPageStatsBlock";

import MarketingFeatureBlock from "../../components/MarketingFeatureBlock";
import MarketingPageIntegrationBlock from "../../components/MarketingPageIntegrationBlock";

import MarketingPageSignupBlock from "../../components/MarketingPageSignupBlock";
import Head from "next/head";
import RequestForm from "../../components/RequestForm";
// import { SmoothScrollProvider } from '../utils/smooth-scroll';
import dynamic from "next/dynamic";
// const RequestForm = dynamic(() => import("../components/RequestForm"), {
//   loading: () => null,
//   ssr: false,
// });

import { useState } from "react";

export default function Home() {
  const [formState, setFormState] = useState("close");

  return (
    <>
      <Head>
        <meta
          name="description"
          content="SMS marketing and text messaging for your ecommerce business. Get 40%+ CTR and 90%+ open rates. Get a demo today!"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="SMS Marketing for Ecommerce | Voyage Mobile"
        ></meta>
        <title>Voyage SMS: Text Marketing for eCommerce</title>
      </Head>
      <div className="main" id="main-target" data-scroll-container>
        <RequestForm formState={formState} setFormState={setFormState} />
        <Header setFormState={setFormState} />

        <MarketingPageHeroBanner />
        <MarketingPageClientBlock />
        <MarketingPageStatsBlock />
        <MarketingPageIntegrationBlock />
        <MarketingFeatureBlock />
        <MarketingPageSignupBlock />
        <Footer setFormState={setFormState} />
      </div>
    </>
  );
}
