import React from "react";
import { useTranslation } from 'react-i18next';


const FunFacts = () => {
  const {t} = useTranslation();
  return (
    <>
      <div className="fun-facts-area ptb-100">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="single-fun-fact">
                <h3>
                  30
                  <span className="sign-icon">+</span>
                </h3>
                <p>{t("Satisfied Customer")}</p>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="single-fun-fact">
                <h3>
                  20
                  <span className="sign-icon">+</span>
                </h3>
                <p>{t("Partners")}</p>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="single-fun-fact">
                <h3>
                  20
                  <span className="sign-icon">+</span>
                </h3>
                <p>{t("Services")}</p>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="single-fun-fact">
                <h3>
                  3
                  <span className="sign-icon">+</span>
                </h3>
                <p>{t("Branches")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FunFacts;
