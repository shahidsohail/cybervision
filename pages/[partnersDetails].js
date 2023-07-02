import React from "react";
import { useRouter } from 'next/router'
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import PartnerDetailsContent from "../components/Services/PartnerDetailsContent";
import Footer from "../components/Layouts/Footer";
import partnarDetails from "../utils/partners-details"

const ServiceDetails = () => {

  const router = useRouter();
  const link = router.query.partnersDetails;
 const partnar = partnarDetails.find((key)=>{
    return key.link === link;
  })
  return (
    <>
      <Navbar />
      <br/>
        <div class="partners-details-logo" style={{"box-shadow": "0px 0px 5px 0px rgba(0,0,0,0.1)",padding:"50px"}}>
          <img src={`/images/partner/${partnar?.image}`}/>
        </div>
      <PartnerDetailsContent  partnar = {partnar}/>

      <Footer />
    </>
  );
};

export default ServiceDetails;
