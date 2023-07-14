import React from "react";
import Link from "next/link";

const OurServices = () => {
  return (
    <>
      <div className="services-section pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span>Our Services</span>
            <h2>Expolre Our Services</h2>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-services-box">
                <div className="icon">
                  <img src="../../images/cybersecurity.png" />
                  {/* <i className="flaticon-big-data"></i> */}
                </div>

                <h3>Cyber ​​security services</h3>
                <p>The Infrastructure Design and Review provides an analysis of...
                </p>

                <Link href="/services/cyber-security">
                  <a className="service-btn">
                    Read More
                    <i className="flaticon-right"></i>
                  </a>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-services-box">
                <div className="icon">
                <img src="../../images/cybersecurity1.png" />
                  {/* <i className="flaticon-data-analytics"></i> */}
                </div>

                <h3>Our services</h3>
                <p>Our services include consulting and cybersecurity services, but not limited to....
                </p>

                <Link href="/services/ourServices">
                  <a className="service-btn">
                    Read More
                    <i className="flaticon-right"></i>
                  </a>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-document"></i>
                </div>
                <h3>Converged Networks</h3>
                <p>
                With an extensive experience of deploying transmission networks for ..
                </p>

                <Link href="/services/converged-networks">
                  <a className="service-btn">
                    Read More
                    <i className="flaticon-right"></i>...
                  </a>
                </Link>
              </div>
            </div>
{/* 
            <div className="col-lg-4 col-md-6">
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
            </div> */}
{/* 
            <div className="col-lg-4 col-md-6">
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
            </div> */}
{/* 
            <div className="col-lg-4 col-md-6">
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
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
