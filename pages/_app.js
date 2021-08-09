import Layout from '../components/Layout'
import '../styles/globals.css';
import '../styles/requestForm.css';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


function MyApp({ Component, pageProps }) {

  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
      
  )
}

export default MyApp
