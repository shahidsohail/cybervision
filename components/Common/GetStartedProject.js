import React from "react";
import Link from 'next/link';
import { useTranslation } from 'react-i18next';


const GetStartedProject = () => {
  const {t}= useTranslation();
  return (
    <>
      <div className="productive-section pt-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="productive-content">
                <span>{t("Let’s Get Started")}</span>
                <h3>{t("Are you ready for a better, more productive business")} </h3>
                <p>
                {t("As technology struggles to stay ahead of hackers, cybersecurity has emerged as one of the fastest growing markets, worth more than $150 billion today and expected to more than double by 2026. A data breach can cost a big business billions of dollars, and if you’re trained in cybersecurity, you already know that your skills are in huge demand. If you’re not trained, getting cybersecurity education and certification is not too difficult, and a key investment if you start your own cybersecurity business.")}
                
                </p>

                <div className="productive-btn">
                  <Link href="/services">
                    <a class="default-btn">
                    {t("Let’s Get Started")}
                      <span></span>
                    </a>
                  </Link>

                  <Link href="/contact">
                    <a class="default-btn">
                    {t("Contact Us")}
                      <span></span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="productive-image">
                <img src="/images/productive.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetStartedProject;
