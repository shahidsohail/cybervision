import React from "react";
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";
import "../styles/bootstrap.min.css";
import '../styles/flaticon.css';
import '../styles/fontawesome.min.css';
import "react-accessible-accordion/dist/fancy-example.css";
import 'react-tabs/style/react-tabs.css';
import "swiper/css/bundle";
import { I18nextProvider } from 'react-i18next';

// Globals CSS
import "../styles/style.css";
import "../styles/responsive.css";

import Head from "next/head";
import GoTop from "../components/Shared/GoTop";
import i18n from '../i18n';

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <title>Cyber Vision | CyberVision | Cyber Security Company in Riyadh, Saudi Arabia</title>
        <meta name="description" content="CyberVision.com | CyberVision| Cyber Vision | Cyber Security Company in Riyadh with Expertise in Custom Security Services. | IT Managed Services | GRC Services | Cloud Computing | CyberSecurity Consulting | Monitoring Optimize Management "></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:url" content="https://cybervision.com.sa/" />
      </Head>

      <I18nextProvider i18n={i18n}>
        <Component {...pageProps} />
      </I18nextProvider>
      {/* Go Top Button */}
      <GoTop />
    </>
  );
}

export default MyApp;
