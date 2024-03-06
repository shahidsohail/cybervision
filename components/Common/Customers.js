import React from "react";
import Link from "next/link";
import { useTranslation } from 'react-i18next';

const Customers = () => {
  const {t}= useTranslation();
  return (
    <>
      <div className="partner-section pt-100 pb-70">
        <div className="container">
          <div className="partner-title">
            <span>{t("Partners")}</span>
            <h2>{t("Discover partner Successful Stories")}</h2>
          </div>

          <div className="partner-list">
            <div 
              className="partner-item"
              data-aos="zoom-in"
              data-aos-delay="50"
              data-aos-duration="1200"
            >
              <img src="/images/partner/1.png" alt="image" />
            </div>

            <div 
              className="partner-item"
              data-aos="zoom-in"
              data-aos-delay="450"
              data-aos-duration="1200"
            >
              <img src="/images/partner/14.png" alt="image" /> {/* juniper */}
            </div>
            

            

            <div 
              className="partner-item"
              data-aos="zoom-in"
              data-aos-delay="450"
              data-aos-duration="1200"
            >
              <img src="/images/partner/16.png" alt="TrendMicro" /> {/* TrendMicro */}
            </div>


            <div 
              className="partner-item"
              data-aos="zoom-in"
              data-aos-delay="250"
              data-aos-duration="1200"
            >
              <img src="/images/partner/20.png" alt="Eagle" />
            </div>


            <div 
              className="partner-item"
              data-aos="zoom-in"
              data-aos-delay="100"
              data-aos-duration="1200"
            >
              <img src="/images/partner/2.png" alt="juniper" /> {/* juniper */}
            </div>


            <div 
              className="partner-item"
              data-aos="zoom-in"
              data-aos-delay="150"
              data-aos-duration="1200"
            >
              <img src="/images/partner/3.png" alt="image" />
            </div>

            <div 
              className="partner-item"
              data-aos="zoom-in"
              data-aos-delay="200"
              data-aos-duration="1200"
            >
              <img src="/images/partner/4.png" alt="image" />
            </div>

            

            <div 
              className="partner-item"
              data-aos="zoom-in"
              data-aos-delay="250"
              data-aos-duration="1200"
            >
              <img src="/images/partner/5.png" alt="image" />
            </div>

            <div 
              className="partner-item"
              data-aos="zoom-in"
              data-aos-delay="300"
              data-aos-duration="1200"
            >
              <img src="/images/partner/6.png" alt="image" />
            </div>

            <div 
              className="partner-item"
              data-aos="zoom-in"
              data-aos-delay="350"
              data-aos-duration="1200"
            >
              <img src="/images/partner/7.png" alt="image" />
            </div>

            <div 
              className="partner-item"
              data-aos="zoom-in"
              data-aos-delay="400"
              data-aos-duration="1200"
            >
              <img src="/images/partner/8.png" alt="image" />
            </div>

            <div 
              className="partner-item"
              data-aos="zoom-in"
              data-aos-delay="450"
              data-aos-duration="1200"
            >
              <img src="/images/partner/9.png" alt="image" />
            </div>


            <div 
              className="partner-item"
              data-aos="zoom-in"
              data-aos-delay="450"
              data-aos-duration="1200"
            >
              <img src="/images/partner/10.jpg" alt="image" />
            </div>

            <div 
              className="partner-item"
              data-aos="zoom-in"
              data-aos-delay="450"
              data-aos-duration="1200"
            >
              <img src="/images/partner/11.png" alt="image" />
            </div>

            <div 
              className="partner-item"
              data-aos="zoom-in"
              data-aos-delay="450"
              data-aos-duration="1200"
            >
              <img src="/images/partner/12.png" alt="image" />
            </div>

            <div 
              className="partner-item"
              data-aos="zoom-in"
              data-aos-delay="450"
              data-aos-duration="1200"
            >
              <img src="/images/partner/13.png" alt="image" />
            </div>

           

            <div 
              className="partner-item"
              data-aos="zoom-in"
              data-aos-delay="450"
              data-aos-duration="1200"
            >
              <img src="/images/partner/15.png" alt="image" />
            </div>

            

            <div 
              className="partner-item"
              data-aos="zoom-in"
              data-aos-delay="450"
              data-aos-duration="1200"
            >
              <img src="/images/partner/17.png" alt="image" />
            </div>

            <div 
              className="partner-item"
              data-aos="zoom-in"
              data-aos-delay="450"
              data-aos-duration="1200"
            >
              <img src="/images/partner/18.png" alt="image" />
            </div>

            <div 
              className="partner-item"
              data-aos="zoom-in"
              data-aos-delay="450"
              data-aos-duration="1200"
            >
              <img src="/images/partner/19.png" alt="image" />
            </div>

            <div 
              className="partner-item"
              data-aos="zoom-in"
              data-aos-delay="450"
              data-aos-duration="1200"
            >
              <img src="/images/partner/Splunk.svg" alt="Splunk" />
            </div>

            <div 
              className="partner-item"
              data-aos="zoom-in"
              data-aos-delay="450"
              data-aos-duration="1200"
            >
              <img src="/images/partner/Bluefinn.png" alt="Bluefinn" />
            </div>

            <div 
              className="partner-item"
              data-aos="zoom-in"
              data-aos-delay="450"
              data-aos-duration="1200"
            >
              <img src="/images/partner/RSA.png" alt="RSA" />
            </div>

            <div 
              className="partner-item"
              data-aos="zoom-in"
              data-aos-delay="450"
              data-aos-duration="1200"
            >
              <img src="/images/partner/infoblox.png" alt="infoblox" />
            </div>
          </div>
        </div>

        <div className="partner-shape">
          <img src="/images/shape/partnar-shape-1.png" alt="main-image" />
        </div>
        <div className="partner-shape-img1">
          <img src="/images/shape/partnar-shape-2.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default Customers;
