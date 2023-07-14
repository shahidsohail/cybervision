import React from "react";

const FeaturedService = () => {
  return (
    <>
      <div className="software-section pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="software-content">
                <span>Our Featured Services</span>
                <h2>Our Services</h2>
                <p>
                Our services include consulting and cybersecurity services, 
                but not limited to governance, risk, compliance, security 
                products, penetration testing, infrastructure security solutions
                 and vulnerability assessment. We also provide design, 
                 infrastructure review, gap analysis and SWOT analysis that 
                 will allow the customer to meet the requirements of SAMA 
                 (Central Bank of Saudi Arabia). and NCA (National Cyber
                  ​​Security Authority) and strengthening the security posture of 
                  the facility.
                </p>

                <ul className="features-list">
                  {/* <li>
                    <span>Software Development</span>
                  </li> */}
                  <li>
                    <span>Special Integrated Solutions</span>
                  </li>
                  <li>
                    <span>Data Centers</span>
                  </li>
                  {/* <li>
                    <span>IT Security Services</span>
                  </li> */}
                  {/* <li>
                    <span>Data Analytics</span>
                  </li> */}
                  <li>
                    <span>Cloud Services</span>
                  </li>
                  <li>
                    <span>Cyber Security</span>
                  </li>
                  <li>
                    <span>Digital Signature</span>
                  </li>
                  <li>
                    <span>Collaboration</span>
                  </li>
                  <li>
                    <span>Managed Services</span>
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
