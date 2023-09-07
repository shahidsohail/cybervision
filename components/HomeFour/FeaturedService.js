import React from "react";
import { useTranslation } from 'react-i18next';

const FeaturedService = () => {
  const {t} = useTranslation();
  return (
    <>
      <div className="software-section pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="software-content">
                <span>{t("Our Featured Services")}</span>
                <h2>{t("Our Services")}</h2>
                <p>
               
{t("Our services include consulting and cybersecurity services, but are not limited to governance, risk, compliance, security products, penetration testing, infrastructure security solutions and vulnerability assessment. We also provide design, infrastructure review, gap analysis and SWOT analysis that will allow the customer to meet the requirements of SAMA (Central Bank of Saudi Arabia). and NCA (National Cyber ​​Security Authority) and strengthening the security posture of the facility.")}
                </p>

                <ul className="features-list">
                  {/* <li>
                    <span>Software Development</span>
                  </li> */}
                  <li>
                    <span>{t("Managed Services")}</span>
                  </li>
                  <li>
                    <span>{t("GRC Services")}</span>
                  </li>
                  <li>
                    <span>{t("Special Integrated Solutions")}</span>
                  </li>
                  <li>
                    <span>{t("Data Centers")}</span>
                  </li>
                  {/* <li>
                    <span>IT Security Services</span>
                  </li> */}
                  {/* <li>
                    <span>Data Analytics</span>
                  </li> */}
                  <li>
                    <span>{t("Cloud Services")}</span>
                  </li>
                  <li>
                    <span>{t("Cyber Security")}</span>
                  </li>
                  <li>
                    <span>{t("Digital Signature")}</span>
                  </li>
                  <li>
                    <span>{t("Collaboration")}</span>
                  </li>
                  
                </ul>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="software-image">
                <img src="/images/software.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedService;
