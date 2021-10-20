import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CareersPageHeroBanner from "../../components/CareersPageHeroBanner";
import CareersPageOpeningsBlock from "../../components/CareersPageOpeningsBlock";
import AboutPageSignupBlock from "../../components/AboutPageSignupBlock";
import AboutPageBottomBlock from "../../components/AboutPageBottomBlock";
import Head from "next/head";
import RequestForm from "../../components/RequestForm";
import { useState } from "react";

const LEVER_URL = process.env.LEVER_URL;
const LEVER_API_KEY = process.env.LEVER_API_KEY;



export const getStaticProps = async () => {
 
  const res = await fetch(`${LEVER_URL}?key=${LEVER_API_KEY}`);
  const openings = await res.json();



  return {
    props: {openings}
  }
}






export default function Careers({openings}) {
  const [formState, setFormState] = useState("close");

  //console.log("job openings", {openings});

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
        <meta content="width=device-width, initial-scale=1.0,maximum-scale=1.0, viewport-fit=cover" name="viewport"/>
        <title>Voyage SMS: Text Marketing for eCommerce</title>
      </Head>
      <div className="main" id="main-target" data-scroll-container>
        <RequestForm formState={formState} setFormState={setFormState} />
        <Header setFormState={setFormState} />
        <CareersPageHeroBanner />
        <CareersPageOpeningsBlock openings={openings} />
        <AboutPageSignupBlock setFormState={setFormState} />
        <AboutPageBottomBlock  />
        <Footer setFormState={setFormState} />
      </div>
    </>
  );
}
