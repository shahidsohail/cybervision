import React from "react";
import Link from "next/link";
const AboutUsContent = () => {
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
                <span>About Us</span>
                <h2>Focused On Actionable Insights</h2>
                <p>
                Cyber ​​Vision Company is based on providing comprehensive 
                cyber security management services, as it employs the best 
                talents in the field of technology to provide innovative cyber 
                security services by benefiting from leading expertise in the field 
                of comprehensive information security management. 
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
                
                  <p className="comment-notes red">
                    For more details please download the brochure in your preferred language<br/>
                    <a className="default-btn" href="/files/CYBERVISIONprofileAR.pdf" download> 
                        Arabic
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
