import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

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
            <SwiperSlide>
              <div className="partner-item">
                <img src="/images/partner/1.png" alt="image" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <img src="/images/partner/2.png" alt="image" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <img src="/images/partner/3.png" alt="image" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <img src="/images/partner/4.png" alt="image" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <img src="/images/partner/5.png" alt="image" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <img src="/images/partner/6.png" alt="image" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <img src="/images/partner/7.png" alt="image" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <img src="/images/partner/8.png" alt="image" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <img src="/images/partner/9.png" alt="image" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <img src="/images/partner/10.jpg" alt="image" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="partner-item">
                <img src="/images/partner/11.png" alt="image" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="partner-item">
                <img src="/images/partner/12.png" alt="image" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="partner-item">
                <img src="/images/partner/13.png" alt="image" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="partner-item">
                <img src="/images/partner/14.png" alt="image" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="partner-item">
                <img src="/images/partner/15.png" alt="image" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="partner-item">
                <img src="/images/partner/16.png" alt="image" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="partner-item">
                <img src="/images/partner/17.png" alt="image" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="partner-item">
                <img src="/images/partner/18.png" alt="image" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="partner-item">
                <img src="/images/partner/19.png" alt="image" />
              </div>
            </SwiperSlide>

          </Swiper>
        </div>
      </div>
    </>
  );
};

export default CustomerStyleTwo;
