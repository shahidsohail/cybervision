import React from "react";
import HTMLString from 'react-html-string';


const ServiceDetailsContent = ({service}) => {
  return (
    <>
    
      <div className="services-details-area ptb-100">
        <div className="container">
          <div className="services-details-overview">
          {service?.categoty?.map((key,index)=>{
            return (<>
              <h2>{key.heading}</h2>
              <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="services-details-desc">
                <HTMLString html={key.description} />
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
