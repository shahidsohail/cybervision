import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { useTranslation } from 'react-i18next';

const Testimonial = () => {
  const {t}= useTranslation();
  return (
    <>
      <div className="testimonial-section ptb-100">
        <div className="container">
          <div className="section-title">
            <span>{t("Testimonials")}</span>
            <h2>{t("Our Clients")}</h2>
          </div>

          <Swiper
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="testimonial-slider"
          >
            <SwiperSlide>
              <div className="testimonial-single-item">
                <div className="testimonial-image">
                  <img src="/images/clients/king.jpeg" alt="image" />
                </div>

                <div className="testimonial-info">
                  <h3>{t("King Abdullah")}</h3>
                  <span>{t("King Abdullah Foundation For Humintarian activities")}</span>
                </div>

                <div className="testimonial-content">
                  <div className="icon">
                    <i className="flaticon-quote"></i>
                  </div>
                  <p>
                    <a href="https://kahf.org.sa" target="_blank">{t("King Abdullah Foundation For Humintarian activities")}</a>
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonial-single-item">
                <div className="testimonial-image">
                  <img src="/images/clients/Muthalathat.png" alt="Muthalathat" />
                </div>

                <div className="testimonial-info">
                  <h3>{t("Muthalathat")}</h3>
                  <span>{t("Muthalathat")}</span>
                </div>

                <div className="testimonial-content">
                  <div className="icon">
                    <i className="flaticon-quote"></i>
                  </div>
                  <p>
                    <a href="https://muthalathat.com.sa/">{t("Muthalathat")}</a>
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonial-single-item">
                <div className="testimonial-image">
                  <img src="/images/clients/MCclient.png" alt="Muthalathat" />
                </div>

                <div className="testimonial-info">
                  <h3>MC</h3>
                  <span>{t("Mazrua Company")}</span>
                </div>

                <div className="testimonial-content">
                  <div className="icon">
                    <i className="flaticon-quote"></i>
                  </div>
                  <p>
                    <a href="#">{t("Mazrua Company")}</a>
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonial-single-item">
                <div className="testimonial-image">
                  <img src="/images/clients/NationalCreativityInvestmentCo.jpg" alt="National Creativity Investment Co" />
                </div>

                <div className="testimonial-info">
                  <h3>National Creativity Investment Co.</h3>
                  <span>National Creativity Investment Co.</span>
                </div>

                <div className="testimonial-content">
                  <div className="icon">
                    <i className="flaticon-quote"></i>
                  </div>
                  <p>
                    <a href="#">{t("National Creativity Investment Co.")}</a>
                  </p>
                </div>
              </div>
            </SwiperSlide>

            
          </Swiper>
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
      </div>
    </>
  );
};

export default Testimonial;
