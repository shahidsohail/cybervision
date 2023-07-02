import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperNavButtons } from '../SwiperNavButton';
import partnarDetails from "../../utils/partners-details";

const CustomerStyleTwo = () => {
  return (
    <>
      <div className="partner-area">
        <div className="container">
          <Swiper
            spaceBetween={30}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              576: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1200: {
                slidesPerView: 5,
              },
            }}
            className="partner-slider"
          >
            {partnarDetails.map((key,value)=>{
              return (
              <SwiperSlide>
              <div className="partner-item">
                <a href={`/${key.link}`}>
                <img src={`/images/partner/${key.id}.png`} alt="image" />
                </a>
                
              </div>
            </SwiperSlide>
              );
            })}
            <SwiperNavButtons />
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default CustomerStyleTwo;
