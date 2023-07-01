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
            <h2>What Our Client Say</h2>
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
                  <img src="/images/clients/client1.jpg" alt="image" />
                </div>

                <div className="testimonial-info">
                  <h3>Richard Denial</h3>
                  <span>IT Executive</span>
                </div>

                <div className="testimonial-content">
                  <div className="icon">
                    <i className="flaticon-quote"></i>
                  </div>
                  <p>
                  "Cyber ​​security services has performed a number of virtual services 
                  for our institution, vulnerability assessment, penetration 
                  test, IT audit, and continued with weekly consultant calls. 
                  Not once have I noticed a disruption in services, 
                  weekly consultant calls are still made, reports have been 
                  delivery timely and the Virtual IT Audit went incredibly 
                  smooth!"
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonial-single-item">
                <div className="testimonial-image">
                  <img src="/images/clients/client2.jpg" alt="image" />
                </div>

                <div className="testimonial-info">
                  <h3>Sarah Taylor</h3>
                  <span>Lead Architecure</span>
                </div>

                <div className="testimonial-content">
                  <div className="icon">
                    <i className="flaticon-quote"></i>
                  </div>
                  <p>
                  "Cyber ​​security services auditors are easy to work with, patient, 
                  and provide information in a timely manner.
                   They actually act more like a partner because even though 
                   they have to write up items, they take the time to ensure 
                   it is understood what needs correcting and why. There were
                    no surprises in our report because findings had been 
                    discussed while the auditors were onsite. Cyber ​​security services auditors do a
                     great job preparing us for regulatory exams."
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonial-single-item">
                <div className="testimonial-image">
                  <img src="/images/clients/client3.jpg" alt="image" />
                </div>
                <div className="testimonial-info">
                  <h3>Alastair Cook</h3>
                  <span>Marketing Manager</span>
                </div>
                <div className="testimonial-content">
                  <div className="icon">
                    <i className="flaticon-quote"></i>
                  </div>
                  <p>
                  "Cyber ​​security services is really good at what they do! Whether your business 
                  utilizes them for IT testing, auditing, or their incredible TRAC program,
                  Cyber ​​security services receives an A+ from our bank. They have the tools and work ethic to 
                   ensure your exams go smoothly. Cyber ​​security services is simply as good as it gets!"
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
