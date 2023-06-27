import React from "react";
import Link from "next/link";

const OurServices = () => {
  return (
    <>
      <div className="services-section pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span>Our Services</span>
            <h2>Expolre Our Data Services</h2>
          </div>

          <div className="row">
            <div 
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-big-data"></i>
                </div>

                <h3>Big Data</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  ut enim ad minim.
                </p>

                <Link href="/service-details">
                  <a className="service-btn">
                    Read More
                    <i className="flaticon-right"></i>
                  </a>
                </Link>
              </div>
            </div>

            <div 
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-data-analytics"></i>
                </div>

                <h3>Data Analytics</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  ut enim ad minim.
                </p>

                <Link href="/service-details">
                  <a className="service-btn">
                    Read More
                    <i className="flaticon-right"></i>
                  </a>
                </Link>
              </div>
            </div>

            <div 
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-document"></i>
                </div>
                <h3>Managed Analytics</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  ut enim ad minim.
                </p>

                <Link href="/service-details">
                  <a className="service-btn">
                    Read More
                    <i className="flaticon-right"></i>
                  </a>
                </Link>
              </div>
            </div>

            <div 
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-chart"></i>
                </div>
                <h3>Business Intelligence</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  ut enim ad minim.
                </p>

                <Link href="/service-details">
                  <a className="service-btn">
                    Read More
                    <i className="flaticon-right"></i>
                  </a>
                </Link>
              </div>
            </div>

            <div 
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-science"></i>
                </div>
                <h3>Data Science</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  ut enim ad minim.
                </p>

                <Link href="/service-details">
                  <a className="service-btn">
                    Read More
                    <i className="flaticon-right"></i>
                  </a>
                </Link>
              </div>
            </div>

            <div 
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="700"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-data-management"></i>
                </div>
                <h3>Data Management</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  ut enim ad minim.
                </p>

                <Link href="/service-details">
                  <a className="service-btn">
                    Read More
                    <i className="flaticon-right"></i>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
