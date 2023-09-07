import React from "react";
import { useRouter } from 'next/router'
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import ServiceDetailsContent from "../../components/Services/ServiceDetailsContent";
import Footer from "../../components/Layouts/Footer";
import serviceData from "../../utils/service-details" 
import { useTranslation } from 'react-i18next';

const ServiceDetails = () => {
  const {t}= useTranslation();
  const router = useRouter();
  const link = router.query.serviceDetails;
 const service = serviceData.find((key)=>{
    return key.link === link;
  })
  return (
    <>
      <Navbar />

      <div className="ServiceDetails-banner">
          <img src={`/images/services/${service?.image}`} />
      </div>


      <ServiceDetailsContent service = {service} />

      <Footer />
    </>
  );
};

export default ServiceDetails;
