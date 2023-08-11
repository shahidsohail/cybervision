import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const Testimonial = () => {
  return (
    <>
      <div className="testimonial-section ptb-100">
        <div className="container">
          <div className="section-title">
            <span>Testimonials</span>
            <h2>Our Clients</h2>
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
                  <h3>King Abdullah</h3>
                  <span>Foundation for Humanitarian Activities</span>
                </div>

                <div className="testimonial-content">
                  <div className="icon">
                    <i className="flaticon-quote"></i>
                  </div>
                  <p>
                    <a href="https://kahf.org.sa" target="_blank">King Abdullah Foundation for Humanitarian Activities</a>
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
                  <h3>Muthalathat</h3>
                  <span>Muthalathat</span>
                </div>

                <div className="testimonial-content">
                  <div className="icon">
                    <i className="flaticon-quote"></i>
                  </div>
                  <p>
                    <a href="https://muthalathat.com.sa/">Muthalathat</a>
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
                  <span>MAZRUA & COMPANY</span>
                </div>

                <div className="testimonial-content">
                  <div className="icon">
                    <i className="flaticon-quote"></i>
                  </div>
                  <p>
                    <a href="#">MAZRUA & COMPANY</a>
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
