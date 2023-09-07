import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import CustomerStyleTwo from "../components/Common/CustomerStyleTwo";
import Customers from "../components/Common/Customers";
import SubscribeStyleThree from "../components/Common/SubscribeStyleThree";
import Testimonial from "../components/Common/Testimonial";
import Footer from "../components/Layouts/Footer";
import { useTranslation } from 'react-i18next';

const Partner = () => {
  const {t}= useTranslation();
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle={t("Partners")}
        breadcrumbTextOne={t("Home")}
        breadcrumbTextTwo={t("Partners")}
        breadcrumbUrl="/"
        bgImage="/images/page-title-bg-3.jpg"
      />

      <CustomerStyleTwo />

      <Customers />

      {/* <div className="ptb-100">
        <SubscribeStyleThree />
      </div> */}

      <Testimonial />

      <Footer />
    </>
  );
};

export default Partner;
