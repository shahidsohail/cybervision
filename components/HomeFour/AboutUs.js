import React from "react";
import Link from "next/link";
import { useTranslation } from 'react-i18next';

const AboutUs = () => {
  const {t} = useTranslation();
  return (
    <>
      <div className="about-section pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-image">
                <img src="/images/about.png" alt="image" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-content">
                <span>{t("About Us")}</span>
                {/* <h2>{t("Focused On Actionable Insights")}</h2> */}
                <p>
                Cyber Vision is a premier provider of comprehensive cybersecurity solutions in the Kingdom of Saudi Arabia.<br />Our inception was driven by a clear and compelling objective: to cater to the cybersecurity needs of businesses of all scales - small, medium, and large. We are dedicated to safeguarding the interests of our clients by covering world-class consulting services and cutting-edge solutions in the cybersecurity domain.<br />Our founding team comprises seasoned professionals with profound expertise and rich experience in the cybersecurity field, which serves as the bedrock of our service excellence. 
                </p>

                <ul className="about-list">
                  <li>
                    <i className="flaticon-tick"></i>
                    Professional Consultancy Service
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    24/7 Support Center
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Custom Service & Operation
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Advanced Advisory Team
                  </li>
                </ul>

                <Link href="/about-us">
                  <a className="default-btn">
                    Read More <span></span>
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

export default AboutUs;
