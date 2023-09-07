import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import ContactInfo from "../components/Contact/ContactInfo";
import ContactForm from "../components/Contact/ContactForm";
import SubscribeStyleThree from "../components/Common/SubscribeStyleThree";
import Footer from "../components/Layouts/Footer";
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const {t}= useTranslation();
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle={t("Contact Us")}
        breadcrumbTextOne={t("Home")}
        breadcrumbTextTwo={t("Contact Us")}
        breadcrumbUrl="/"
        bgImage="/images/page-title-bg.jpg"
      />

      <ContactInfo />

      <ContactForm />

      {/* <div className="ptb-100">
        <SubscribeStyleThree />
      </div> */}

      <Footer />
    </>
  );
};

export default Contact;
