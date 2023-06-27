import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
// import FeaturedService from "../components/Services/FeaturedService";
import FeaturedService from "../components/HomeFour/FeaturedService";
import ServicesContent from "../components/Services/ServicesContent";
import OurServices from "../components/HomeFour/OurServices";
import SubscribeStyleThree from "../components/Common/SubscribeStyleThree";
import Footer from "../components/Layouts/Footer";

const Services = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Services"
        breadcrumbTextOne="Home"
        breadcrumbTextTwo="Services"
        breadcrumbUrl="/"
        bgImage="/images/page-title-bg-4.jpg"
      />

      

      <OurServices />
      <FeaturedService />
      {/* <ServicesContent /> */}

      <div className="pb-100">
        <SubscribeStyleThree />
      </div>

      <Footer />
    </>
  );
};

export default Services;
