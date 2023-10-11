import React from "react";
import Link from "next/link";
import { useTranslation } from 'react-i18next';

const OurServices = () => {
  const {t}= useTranslation();
  return (
    <>
      <div className="services-section pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span>{t("Our Services")}</span>
            <h2>{t("Expolre Our Services")}</h2>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-services-box">
                <div className="icon">
                  <img src="../../images/cybersecurity.png" />
                  {/* <i className="flaticon-big-data"></i> */}
                </div>

                <h3>{t("Cyber ​​security services")}</h3>
                <p>
                {t("The Infrastructure Design and Review provide an analysis of…")}
                </p>

                <Link href="/services/cyber-security">
                  <a className="service-btn">
                     {t("Read More")}
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

                <h3>{t("Our Services")}</h3>
                <p>{t("Our services include consulting and cybersecurity services, but are not limited to....")}
                </p>

                <Link href="/services/ourServices">
                  <a className="service-btn">
                  {t("Read More")}
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
                <h3>{t("Success Stories")}</h3>
                <p>
                {t("SANG_MDA_MoJ SANG Infrastructure To support the DWDM Network stability ..")}
                </p>

                {/* <Link href="/services/ourSuccess">
                  <a className="service-btn">
                  {t("Read More")}
                    <i className="flaticon-right"></i>...
                  </a>
                </Link> */}
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
