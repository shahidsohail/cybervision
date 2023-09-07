import React from "react";
import Link from "next/link";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useTranslation } from 'react-i18next';

const SolutionsTab = () => {
  const {t}= useTranslation();
  return (
    <>
      <div className="tab-section ptb-100">
        <div className="container">
          <div className="solutions-list-tab">
            <Tabs>
              <TabList>
                <Tab>{t("Cyber ​​security services")}</Tab>
                <Tab>{t("Our Services")}</Tab>
                {/* <Tab>Analytics AI</Tab>
                <Tab>Cloud Deployment</Tab> */}
              </TabList>

              <TabPanel>
                <div className="row align-items-center">
                  <div className="col-lg-7">
                    <div className="tab-solution-content">
                      <h3>{t("Cyber ​​security services")}</h3>
                      <p>
                      {t("The infrastructure design and review provide a SWOT analysis that will allow the client to meet SAMA and NCA requirements and enhance the client's cybersecurity posture.")}
                      
                      </p>

                      <ul className="tab-list">
                        <li>
                          <i className="flaticon-tick-1"></i>
                          {t("Innovation idea the latest business technology")}
                        </li>
                        <li>
                          <i className="flaticon-tick-1"></i>
                          {t("Safe secure services for user")}
                        </li>
                        <li>
                          <i className="flaticon-tick-1"></i>
                          {t("24/7 support")}
                        </li>
                      </ul>

                      <div className="tab-btn">
                        <Link href="/service-details">
                          <a className="default-btn">
                          {t("Read More")}  <span></span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-5">
                    <div className="tab-image-right">
                      <img src="/images/tab-solution.png" alt="image" />
                    </div>
                  </div>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="row align-items-center">
                  <div className="col-lg-5">
                    <div className="tab-image-left">
                      <img src="/images/tab-solution.png" alt="image" />
                    </div>
                  </div>

                  <div className="col-lg-7">
                    <div className="tab-solution-content">
                      <h3>{t("Our Services")}</h3>
                      <p>
                      {t("Our services include consulting and cybersecurity services, but are not limited to governance, risk, compliance, security products, penetration testing, infrastructure security solutions and vulnerability assessment. We also provide design, infrastructure review, gap analysis and SWOT analysis that will allow the customer to meet the requirements of SAMA (Central Bank of Saudi Arabia). and NCA (National Cyber ​​Security Authority) and strengthening the security posture of the facility.")}
                      </p>

                      <ul className="tab-list">
                        <li>
                          <i className="flaticon-tick-1"></i>
                          {t("Innovation idea the latest business technology")}
                        </li>
                        <li>
                          <i className="flaticon-tick-1"></i>
                          {t("Safe secure services for user")}
                        </li>
                        <li>
                          <i className="flaticon-tick-1"></i>
                          {t("24/7 support")}
                        </li>
                      </ul>

                      <div className="tab-btn">
                        <Link href="/service-details">
                          <a className="default-btn">
                          {t("Read More")} <span></span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
{/* 
              <TabPanel>
                <div className="row align-items-center">
                  <div className="col-lg-7">
                    <div className="tab-solution-content">
                      <h3>Analytics AI & Data Platform Solutions</h3>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut
                        odit aut fugit, sed quia consequuntur magni dolores eos
                        qui ratione.
                      </p>

                      <ul className="tab-list">
                        <li>
                          <i className="flaticon-tick-1"></i>
                          Innovation idea the latest business technology
                        </li>
                        <li>
                          <i className="flaticon-tick-1"></i>
                          Safe secure services for your online email account
                        </li>
                        <li>
                          <i className="flaticon-tick-1"></i>
                          Digital content marketing online
                        </li>
                      </ul>

                      <div className="tab-btn">
                        <Link href="/service-details">
                          <a className="default-btn">
                            Read More <span></span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-5">
                    <div className="tab-image-right">
                      <img src="/images/tab-solution.png" alt="image" />
                    </div>
                  </div>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="row align-items-center">
                  <div className="col-lg-5">
                    <div className="tab-image-left">
                      <img src="/images/tab-solution.png" alt="image" />
                    </div>
                  </div>

                  <div className="col-lg-7">
                    <div className="tab-solution-content">
                      <h3>Cloud Deployment AI & Data Platform Solutions</h3>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut
                        odit aut fugit, sed quia consequuntur magni dolores eos
                        qui ratione.
                      </p>

                      <ul className="tab-list">
                        <li>
                          <i className="flaticon-tick-1"></i>
                          Innovation idea the latest business technology
                        </li>
                        <li>
                          <i className="flaticon-tick-1"></i>
                          Safe secure services for your online email account
                        </li>
                        <li>
                          <i className="flaticon-tick-1"></i>
                          Digital content marketing online
                        </li>
                      </ul>

                      <div className="tab-btn">
                        <Link href="/service-details">
                          <a className="default-btn">
                            Read More <span></span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel> */}
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default SolutionsTab;
