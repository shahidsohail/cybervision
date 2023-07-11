import React from "react";
import Link from "../../utils/ActiveLink";

const Navbar = () => {
  const [menu, setMenu] = React.useState(true);
  const toggleNavbar = () => {
    setMenu(!menu);
  };
  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div id="navbar" className="navbar-area">
        <div className="main-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link href="/">
                <a className="navbar-brand" style={{width:"70px",color: "#1671cc",display:"flex","align-items": "center"}}>
                  <img
                    src="/images/logo.png"
                    className="white-logo"
                    alt="logo"
                  />
                  <img
                    src="/images/logo.png"
                    className="black-logo"
                    alt="logo"
                  />
                Cyber ​​vision
                </a>
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav m-auto">
                  <li className="nav-item">
                    <Link href="/">
                      <a className="nav-link">
                        Home 
                        {/* <i className="fas fa-chevron-down"></i> */}
                      </a>
                    </Link>

                    {/* <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/" activeClassName="active">
                          <a className="nav-link">Home One</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/index2" activeClassName="active">
                          <a className="nav-link">Home Two</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/index3" activeClassName="active">
                          <a className="nav-link">Home Three</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/index4" activeClassName="active">
                          <a className="nav-link">Home Four</a>
                        </Link>
                      </li>
                    </ul> */}
                  </li>

                  <li className="nav-item">
                    <Link href="/about-us" activeClassName="active">
                      <a className="nav-link">About us</a>
                    </Link>
                  </li>
            {/* for desktop start */}
                  <li className="nav-item isMobile">
                    <Link href="#">
                      <a className="nav-link">
                        Services <i className="fas fa-chevron-down"></i>
                      </a>
                    </Link>
                  
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/services" activeClassName="active">
                          <a className="nav-link">
                            Special Integrated Solutions <i className="fas fa-chevron-right"></i>
                            </a>
                        </Link>

                        <ul className="dropdown-menu" style={{"left": "200px"}}>
                          <li className="nav-item">
                            <Link href="/services/converged-networks" activeClassName="active">
                              <a className="nav-link">Converged Networks</a>
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link href="/services/vsat-radio-wireless-new" activeClassName="active">
                              <a className="nav-link">VSAT, Radio & Wireless</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="/services/low-current" activeClassName="active">
                              <a className="nav-link">Low Current</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="/services/physical-security" activeClassName="active">
                              <a className="nav-link">Physical Security</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="/services/audio-visual" activeClassName="active">
                              <a className="nav-link">Audio Visual</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="/services/smart-aviations" activeClassName="active">
                              <a className="nav-link">Smart Aviation</a>
                            </Link>
                          </li>
                        </ul>

                      </li>

                      <li className="nav-item">
                        <Link href="/services/data-centers" activeClassName="active">
                          <a className="nav-link">Data Centers</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/services/cloud-services" activeClassName="active">
                          <a className="nav-link">Cloud Services</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/services/cyber-security" activeClassName="active">
                          <a className="nav-link">Cyber Security</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/services/digital-signature" activeClassName="active">
                          <a className="nav-link">Digital Signature</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/services/customer-experience-solutions" activeClassName="active">
                          <a className="nav-link">Customer Experience</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/services/unified-collaborations" activeClassName="active">
                          <a className="nav-link">Collaboration</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/services/managed-services" activeClassName="active">
                          <a className="nav-link">Managed Services</a>
                        </Link>
                      </li>
                    </ul>
                  </li>
             {/* for desktop END  */}
             {/* hidedesktop
             &nbsp; -  */}

             {/* for mobile  start */}
             <li className="nav-item hidedesktop">
                    <Link href="#">
                      <a className="nav-link">
                        Services <i className="fas fa-chevron-down"></i>
                      </a>
                    </Link>
                  
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/services" activeClassName="active">
                          <a className="nav-link">
                            Special Integrated Solutions
                            </a>
                        </Link>
                        <ul style={{"list-style-type": "square", marginLeft:"30px"}}>
                          <li className="nav-item">
                            <Link href="/services/converged-networks" activeClassName="active">
                              <a className="nav-link">Converged Networks</a>
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link href="/services/vsat-radio-wireless-new" activeClassName="active">
                              <a className="nav-link">VSAT, Radio & Wireless</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="/services/low-current" activeClassName="active">
                              <a className="nav-link">Low Current</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="/services/physical-security" activeClassName="active">
                              <a className="nav-link">Physical Security</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="/services/audio-visual" activeClassName="active">
                              <a className="nav-link">Audio Visual</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="/services/smart-aviations" activeClassName="active">
                              <a className="nav-link">Smart Aviation</a>
                            </Link>
                          </li>
                        </ul>

                      </li>

                      <li className="nav-item">
                        <Link href="/services/data-centers" activeClassName="active">
                          <a className="nav-link">Data Centers</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/services/cloud-services" activeClassName="active">
                          <a className="nav-link">Cloud Services</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/services/cyber-security" activeClassName="active">
                          <a className="nav-link">Cyber Security</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/services/digital-signature" activeClassName="active">
                          <a className="nav-link">Digital Signature</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/services/customer-experience-solutions" activeClassName="active">
                          <a className="nav-link">Customer Experience</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/services/unified-collaborations" activeClassName="active">
                          <a className="nav-link">Collaboration</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/services/managed-services" activeClassName="active">
                          <a className="nav-link">Managed Services</a>
                        </Link>
                      </li>
                    </ul>
                  </li>
              {/* for mobile  */}
{/* 
                  <li className="nav-item">
                    <Link href="#">
                      <a className="nav-link">
                        Projects <i className="fas fa-chevron-down"></i>
                      </a>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/projects" activeClassName="active">
                          <a className="nav-link">Projects</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/project-details" activeClassName="active">
                          <a className="nav-link">Project Details</a>
                        </Link>
                      </li>
                    </ul>
                  </li> */}
                  <li className="nav-item">
                    <Link href="/partner" activeClassName="active">
                      <a className="nav-link">Partner</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                        <Link href="/team" activeClassName="active">
                          <a className="nav-link">Clients</a>
                        </Link>
                      </li>
                  {/* <li className="nav-item">
                    <Link href="#">
                      <a className="nav-link">
                        Pages <i className="fas fa-chevron-down"></i>
                      </a>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/about-us" activeClassName="active">
                          <a className="nav-link">About Us</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/team" activeClassName="active">
                          <a className="nav-link">Team</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/services" activeClassName="active">
                          <a className="nav-link">Services</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/service-details" activeClassName="active">
                          <a className="nav-link">Service Details</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/projects" activeClassName="active">
                          <a className="nav-link">Projects</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/project-details" activeClassName="active">
                          <a className="nav-link">Project Details</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/pricing" activeClassName="active">
                          <a className="nav-link">Pricing</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/partner" activeClassName="active">
                          <a className="nav-link">Partner</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/faq" activeClassName="active">
                          <a className="nav-link">FAQ</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/coming-soon" activeClassName="active">
                          <a className="nav-link">Coming Soon</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/404" activeClassName="active">
                          <a className="nav-link">404 Error Page</a>
                        </Link>
                      </li>
                    </ul>
                  </li> */}

                  {/* <li className="nav-item">
                    <Link href="#">
                      <a className="nav-link">
                        Blog <i className="fas fa-chevron-down"></i>
                      </a>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/blog" activeClassName="active">
                          <a className="nav-link">Blog Grid</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/blog2" activeClassName="active">
                          <a className="nav-link">Blog Right Sidebar</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/blog3" activeClassName="active">
                          <a className="nav-link">Blog Left Sidebar</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/blog-details" activeClassName="active">
                          <a className="nav-link">Blog Details</a>
                        </Link>
                      </li>
                    </ul>
                  </li> */}
                
                  <li className="nav-item hidedesktop">
                  <Link href="https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=4765445b-32c6-49b0-83e6-1d93765276ca&redirect_uri=https%3A%2F%2Fwww.office.com%2Flandingv2&response_type=code%20id_token&scope=openid%20profile%20https%3A%2F%2Fwww.office.com%2Fv2%2FOfficeHome.All&response_mode=form_post&nonce=638245892587893727.NjM2Y2FhOGYtNTcxMi00ZmIyLWJmNmUtNzA5ODY5ZTAzYzhjMTJmODAyMTgtMmRhMy00NThiLTg2Y2YtNGE3NWUxNDI4ODMw&ui_locales=en-US&mkt=en-US&client-request-id=3f7c0214-7b1f-44cb-8e12-ce042dfa6e31&state=Xet1Wf2Ozc2rfrOjKP0nvk_OhHyVU8UFAtkvczG9zFSQ-u3rSkGPAgu_PNie_9i4bYfTrCVFrypqwdHKQMtF9o8oi-F2cPWScmAW5MgpiA4CwjkoHVwQlNMxN76HmjeTgMY1WFrEZW73QBcVkFMjO0PP-Wg13CnoxP8eDdnHcVcJFSU-NXBcBEQcjzD4S3zHPiLHr7G53NdeWihGWI8XvWR1iCWwhKouHE2iLBk9hrIc7XVQFH">
                    <a className="nav-link" target="_blank">
                    Employee Login
                      <span></span>
                    </a>
                  </Link>
                  </li>
                  <li className="nav-item hidedesktop">
                  <Link href="/contact">
                    <a className="nav-link">
                    Contact Us
                      <span></span>
                    </a>
                  </Link>
                  </li>
                </ul>

                <div className="others-options isMobile">
                <Link href="https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=4765445b-32c6-49b0-83e6-1d93765276ca&redirect_uri=https%3A%2F%2Fwww.office.com%2Flandingv2&response_type=code%20id_token&scope=openid%20profile%20https%3A%2F%2Fwww.office.com%2Fv2%2FOfficeHome.All&response_mode=form_post&nonce=638245892587893727.NjM2Y2FhOGYtNTcxMi00ZmIyLWJmNmUtNzA5ODY5ZTAzYzhjMTJmODAyMTgtMmRhMy00NThiLTg2Y2YtNGE3NWUxNDI4ODMw&ui_locales=en-US&mkt=en-US&client-request-id=3f7c0214-7b1f-44cb-8e12-ce042dfa6e31&state=Xet1Wf2Ozc2rfrOjKP0nvk_OhHyVU8UFAtkvczG9zFSQ-u3rSkGPAgu_PNie_9i4bYfTrCVFrypqwdHKQMtF9o8oi-F2cPWScmAW5MgpiA4CwjkoHVwQlNMxN76HmjeTgMY1WFrEZW73QBcVkFMjO0PP-Wg13CnoxP8eDdnHcVcJFSU-NXBcBEQcjzD4S3zHPiLHr7G53NdeWihGWI8XvWR1iCWwhKouHE2iLBk9hrIc7XVQFH">
                    <a className="default-btn" target="_blank">
                    Employee Login
                      <span></span>
                    </a>
                  </Link>
                  <Link href="/contact">
                    <a className="default-btn">
                    Contact Us
                      <span></span>
                    </a>
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
