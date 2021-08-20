import Layout from '../components/Layout'
import '../styles/globals.css';
import '../styles/requestForm.css';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {QueryClient, QueryClientProvider } from 'react-query';
import {ReactQueryDevTools} from 'react-query/devtools';


const client = new QueryClient();   //to modify the query cache in react

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  
  return (
    <QueryClientProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      
    </QueryClientProvider>
  )
}

export default MyApp
