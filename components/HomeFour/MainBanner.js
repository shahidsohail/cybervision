import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";
import { useTranslation } from 'react-i18next';

const MainBanner = () => {
  const [toggler, setToggler] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/watch?v=gVMnccPk7g0"]}
      />

      <div className="main-banner-four">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                  <div className="main-banner-content">
                    <h1>Cyber ​​Vision</h1>
                    <p>
                      {t("mainBannerDetails")}
                    </p>

                    <div className="banner-btn">
                      <Link href="/about-us">
                        <a className="default-btn-one">
                        {t("About Us")} <span></span>
                        </a>
                      </Link>

                      <div
                        onClick={() => setToggler(!toggler)}
                        className="video-btn popup-youtube"
                      >
                        <i className="fa fa-play"></i>
                        {t("Watch Video")}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-12">
                  <div className="banner-image">
                    <img src="/images/home-four/main-image4.png" alt="image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="creative-shape">
          <img src="/images/main-banner-shape/home-shape-4.png" alt="image" />
        </div>
        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
