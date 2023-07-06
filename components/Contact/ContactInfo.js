import React from "react";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-box pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-contact-box">
                <i className="fa fa-map-marker"></i>
                <div className="content-title">
                  <h3>Address</h3>
                  <p>
                    272 Riyadh, Saudi Arabia
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-contact-box">
                <i className="fa fa-envelope"></i>
                <div className="content-title">
                  <h3>Email</h3>
                  <p>info@cybervision.com.sa</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-contact-box">
                <i className="fa fa-phone"></i>
                <div className="content-title">
                  <h3>Phone</h3>
                  <p>+96655709900</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
