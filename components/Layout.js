import Head  from 'next/head';
import { saveUtmFromParams } from '../services';


export default function Layout({ children }) {
    saveUtmFromParams();
    return (
       <>
            <Head>
            <meta property="og:title" content="SMS Marketing for Ecommerce | Voyage Mobile"></meta>
            <title>Voyage SMS: Text Marketing for eCommerce | Privacy policy</title>
                <link rel="icon" type="image/png" sizes="32x32" href="/images/fevicon32.png"></link>
                 <script
                     dangerouslySetInnerHTML={{
                     __html: `
                     (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                     new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                     j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                     'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                     })(window,document,'script','dataLayer','GTM-MZSHGDP');
                 `,
                     }}
                 />

                 {/* Global Site Tag (gtag.js) - Google Analytics */}
                <script
                    async
                    src={`https://www.googletagmanager.com/gtag/js?id=739656360`}
                />
                <script
                    dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '739656360', {
                    page_path: window.location.pathname,
                    });
                `,
                    }}
                />
            </Head>
            { children }
       
           
       </>
    )
}
