import React from "react";
import Link from "next/link";
import { useTranslation } from 'react-i18next';

const AboutUsContent = () => {
const {t} = useTranslation();
  return (
    <>
      <div className="about-section ptb-100">
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
                {t("Cyber Vision is a premier provider of comprehensive cybersecurity solutions in the Kingdom of Saudi Arabia. Our inception was driven by a clear and compelling objective: to cater to the cybersecurity needs of businesses of all scales - small, medium, and large. We are dedicated to safeguarding the interests of our clients by covering world-class consulting services and cutting-edge solutions in the cybersecurity domain. Our founding team comprises seasoned professionals with profound expertise and rich experience in the cybersecurity field, which serves as the bedrock of our service excellence.")}
                </p>

                <ul className="about-list">
                  <li>
                    <i className="flaticon-tick"></i>
                    {t("Professional Consultancy Service")}
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    {t("24/7 Support Center")}
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    {t("Custom Service & Operation")}
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    {t("Advanced Advisory Team")}
                  </li>
                </ul>
                
                  <p className="comment-notes red">
                  {t("For more details please download the brochure in your preferred language")}<br/>
                    <a className="default-btn" href="/files/CYBERVISIONprofileAR.pdf" download> 
                    {t("Arabic")}
                    </a>
                        <a className="default-btn" href="/files/CYBERVISIONprofileEN.pdf" download >English</a>
                    </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsContent;
