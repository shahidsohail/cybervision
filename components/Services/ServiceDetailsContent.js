import React from "react";
import HTMLString from 'react-html-string';
import { useTranslation } from 'react-i18next';

const ServiceDetailsContent = ({service}) => {
  const {t}= useTranslation();

  return (
    <>
    
      <div className="services-details-area ptb-100">
        <div className="container">
          <div className="services-details-overview">
          {service?.categoty?.map((key,index)=>{
            return (<>
              <h2>{t(key.heading)}</h2>
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="services-details-desc">
                  <HTMLString html={t( key.description)} />
                  </div>
                </div>

                <div className="col-lg-6 col-md-12">
                  <div className="services-details-image">
                    <img
                      src={`/images/services/${key.image}`}
                      alt="image"
                    />
                  </div>
                </div>
            </div>
              
               {key.heading == 'Governance, Risk management & Compliance'?
                <div>
                  <h2><HTMLString html={t('Governance')}></HTMLString></h2>
                  <div className="row">
                    <div className="col-lg-6 col-md-12">
                    <div className="services-details-desc">
                    <HTMLString html={ t('Corporate governance consists of the set of processes, policies, objectives and laws that determine how a corporation is controlled.')} />
                    </div>
                  </div>

                    <div className="col-lg-6 col-md-12">
                      <div className="services-details-image">
                        <img
                          
                          src={`/images/services/ourservices/${'Governance.jpg'}`}
                          alt="image"
                        />
                      </div>
                    </div>
                  
                  </div>

                      <h2><HTMLString html={t('Risk')}></HTMLString></h2>
                      <div className="row">
                        <div className="col-lg-6 col-md-12">
                        <div className="services-details-desc">
                        <HTMLString html={t('Risk pertains to an auditor not unearthing mistakes or deliberate miscalculations (i.e. fraud) in financial statements.')} />
                        </div>
                      </div>

                        <div className="col-lg-6 col-md-12">
                          <div className="services-details-image">
                            <img
                              
                              src={`/images/services/ourservices/${'risk-management.jpeg'}`}
                              alt="image"
                            />
                          </div>
                        </div>
                      
                      </div>
                      <h2><HTMLString html={t('Compliance')}></HTMLString></h2>
                      <div className="row">
                        <div className="col-lg-6 col-md-12">
                        <div className="services-details-desc">
                        <HTMLString html={t('Compliance is adherence to a business’s regulatory procedures.')} />
                        </div>
                      </div>

                        <div className="col-lg-6 col-md-12">
                          <div className="services-details-image">
                            <img
                              
                              src={`/images/services/ourservices/${'Compliance.jpg'}`}
                              alt="image"
                            />
                          </div>
                        </div>
                      
                      </div>
                





                </div>
                
                :''
               }
            
           
            
            </>
            );
          })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsContent;
