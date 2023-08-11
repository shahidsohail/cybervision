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
                  3151 Malqa, Anas Bin Malik street, Riyadh, Saudi Arabia
                  </p>
                 
                   {/* Your iframe code goes here */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97499.1168707071!2d46.5733876311096!3d24.749782646164277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2ee541be8d1ea9%3A0xfde1f465f8c5306c!2z2LHZhdiyIDM5!5e0!3m2!1sen!2s!4v1690355408556!5m2!1sen!2s"
                    
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-contact-box">
                <i className="fa fa-envelope"></i>
                <div className="content-title">
                  <h3>Email</h3>
                  <p><a href="mailto:info@cybervision.com.sa">info@cybervision.com.sa</a></p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-contact-box">
                <i className="fa fa-phone"></i>
                <div className="content-title">
                  <h3>Phone</h3>
                  <p><img src="/images/whatsapp.png"/><a href="https://api.whatsapp.com/send?phone=96655709900" target="_blank">+96655709900</a>
                  </p>
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
