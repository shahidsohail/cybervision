import React from "react";
const PerviceDetailsContent = ({partnar}) => {
  return (
    <>
      <div className="services-details-area" style={{padding: "50px 0 50px"}}>
        <div className="container">
          <div className="services-details-overview">
          <h2 className="text-center">{partnar?.name}</h2>
          <br/>
            <div className="row align-items-center">
              {partnar?.type?.map((key,value)=>{
                  return (
                    <div className="col-lg-6 col-md-12">
                <div className="services-details-desc"
                style={{"box-shadow": "0px 0px 10px 0px rgba(0,0,0,0.5)",
                        "padding":"20px",
                        "margin":"20px"

                      }}  
                >
                  <h3>{key?.name}</h3>
                  <br/>
                  <div className="row">
                    <div className="col-md-4">
                      <img src={`/images/partner/${key.image}`} width={150}
                      style={{    "display": "block",
                                  "margin": "0 auto"
                            }}
                      />
                    </div>
                    <div className="col-md-8 about-content">
                      <ul className="about-list" style={{marginTop :"0px"}}>
                        {key?.listitems.map((item , index)=>{
                          return(
                            <li>
                            <i className="flaticon-tick"></i>
                                {item}
                          </li>
                          );
                        })}
                        
                    </ul>
                    </div>

                  </div>
                    
                </div>
              </div>
                  );
              })
              }
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PerviceDetailsContent;
