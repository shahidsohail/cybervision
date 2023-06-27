import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";

const MainBanner = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/watch?v=bk7McNUjWgw"]}
      />

      <div className="main-banner-four">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                  <div className="main-banner-content">
                    <h1>Cyber ​​vision concept</h1>
                    <p>
                    The Cyber ​​Vision Concept Company was built to meet the needs of small,
                    medium and large companies for cyber security work in the Kingdom of
                    Saudi Arabia in a comprehensive manner, and is specially designed to serve 
                    the interests of companies as consulting and services in the field of cyber
                     security.Cyber ​​Vision was established in 2022 in the 
                     Kingdom of Saudi Arabia based on highly experienced 
                     employees in the field of cyber security consulting and 
                     services.
                    </p>

                    <div className="banner-btn">
                      <Link href="/about-us">
                        <a className="default-btn-one">
                          About Us <span></span>
                        </a>
                      </Link>

                      <div
                        onClick={() => setToggler(!toggler)}
                        className="video-btn popup-youtube"
                      >
                        <i className="fa fa-play"></i>
                        Watch Video
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
