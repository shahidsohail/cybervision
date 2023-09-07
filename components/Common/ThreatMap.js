import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { useTranslation } from 'react-i18next';

const ThreatMap = () => {
  const {t} = useTranslation();
  return (
    <>
      <div className="testimonial-section ptb-100">
        <div className="container">
          <div className="section-title">
             <span>
             {t("Discover Radware's Live Threat Map for real-time updates on cyberattacks, including Norse & DDoS attacks. Stay informed with our global cyber map.")}
             </span>
            <h2>{t("Live Cyber Attack Threat Map | Radware")}</h2>
          </div>

          
        </div>

        {/* Shape Images */}
        <div className="testimonial-shape">
          <img src="/images/shape/testimonial-shape-1.png" alt="main-image" />
        </div>
        <div className="testimonial-shape-img1">
          <img src="/images/shape/testimonial-shape-2.png" alt="main-image" />
        </div>
        <div className="testimonial-shape-img2">
          <img src="/images/shape/testimonial-shape-3.png" alt="main-image" />
        </div>

 {/* Your iframe code goes here */}
 <iframe
        src="https://livethreatmap.radware.com/"
        width="100%"
        height="640"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      </div>
    </>
  );
};

export default ThreatMap;
