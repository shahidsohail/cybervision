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
                <h2>{t("Focused On Actionable Insights")}</h2>
                <p>
                {t("Cyber ​​Vision Company is based on providing comprehensive cyber security management services, as it employs the best talents in the field of technology to provide innovative cyber security services by benefiting from leading expertise in the field of comprehensive information security management.")}
                </p>

                <ul className="about-list">
                  <li>
                    <i className="flaticon-tick"></i>
                    {t("Professional Consultancy Service")}
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    {t("24/7 Support Center")}24/7 Support Center
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    {t("Custom Service & Operation")}Custom Service & Operation
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
