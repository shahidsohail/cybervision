import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      {/* Top Footer Section */}
      <footer className="footer-section ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <div className="footer-heading">
                  <h3>About Us</h3>
                </div>
                <p>
                Cyber ​​Vision is based on providing comprehensive 
                cyber security management services, as it employed the best 
                talents in the field of technology to provide innovative cyber 
                security services by benefiting from leading expertise in the 
                field of comprehensive information security management.
                </p>

                <ul className="footer-social">
                  <li>
                    <a href="https://www.facebook.com/profile.php?id=61550313033057" target="_blank">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>

                  <li>
                    <a href="https://twitter.com/CyberVision_sa" target="_blank">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>

                  <li>
                    <a href="https://www.youtube.com/channel/UCOSqGuU2BZuy3ueyRIaiP3Q/" target="_blank">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </li>

                  <li>
                    <a href="https://www.linkedin.com/company/cyber-vision-ksa/" target="_blank">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <div className="footer-heading">
                  <h3>Important Links</h3>
                </div>

                <ul className="footer-quick-links">
                  <li>
                    <Link href="/about-us">
                      <a>About Us</a>
                    </Link>
                  </li> 
                  <li>
                    <Link href="/services">
                      <a>Services</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a>Contact</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://livethreatmap.radware.com/" >
                      <a target="_blank">Live Cyber Attack Threat</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://cybermap.kaspersky.com/" >
                      <a target="_blank">Kaspersky Cyber Threat Map</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <div className="footer-heading">
                  <h3>Featured Service</h3>
                </div>

                <ul className="footer-quick-links">
                  <li>
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="/blog">
                      <a>Blog</a>
                    </Link>
                  </li> */}
                  <li>
                    <Link href="/services">
                      <a>Services</a>
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="/partner">
                      <a>Client</a>
                    </Link>
                  </li> */}
                  <li>
                    <Link href="/contact">
                      <a>Contact</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <div className="footer-heading">
                  <h3>Contact Info</h3>
                </div>

                <div className="footer-info-contact">
                  <i className="flaticon-call-answer"></i>
                  <h3>Phone</h3>
                  <p><img src="/images/whatsapp.png"/><span><a href="https://api.whatsapp.com/send?phone=966557009900" target="_blank">+966557009900</a></span>
                  </p>
                </div>

                <div className="footer-info-contact">
                  <i className="flaticon-envelope"></i>
                  <h3>Email</h3>
                  <span><a href="mailto:info@cybervision.com.sa">
                    info@cybervision.com.sa</a></span>
                </div>

                <div className="footer-info-contact">
                  <i className="flaticon-maps-and-flags"></i>
                  <h3>Address</h3>
                  <span>3151 Malqa, Anas Bin Malik street, Riyadh, Saudi Arabia</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        <div className="partner-shape-img1">
          <img src="/images/shape/partnar-shape-2.png" alt="image" />
        </div>
      </footer>
      {/* End Top Footer Section */}

      {/* Bottom Footer Section */}
      <div className="copyright-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <p>
                &copy; {currentYear} All rights reserved to Cyber Vision
                {/* All Rights Reserved by
                <a href="https://envytheme.com/" target="_blank">
                  EnvyTheme
                </a> */}
              </p>
            </div>

            {/* <div className="col-lg-6 col-md-6">
              <ul>
                <li>
                  <Link href="/terms-condition">
                    <a>Terms & Conditions</a>
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy">
                    <a>Privacy Policy</a>
                  </Link>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
        <div className="whatsapp-container">
        <Link href="https://wa.me/+966557009900" target="_blank">
        <a target="_blank">
        <img src="/images/whatsapp-button.png" alt="WhatsApp icon" />
        </a>
        </Link>
      </div>
      </div>
      
      {/* End Bottom Footer Section */}
    </>
  );
};

export default Footer;
