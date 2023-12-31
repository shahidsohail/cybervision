import React from "react";

const SubscribeStyleThree = () => {
  return (
    <>
      <div className="subscribe-section p-0">
        <div className="container">
          <div className="subscribe-content-area mb-0">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <div className="subscribe-image">
                  <img src="/images/subscribe.png" alt="image" />
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="subscribe-content">
                  <h2>Don't Miss Our News And Updates</h2>
                  <p>
                    please subscribe our website for monthly updates and news
                  </p>
                </div>

                <form 
                  className="newsletter-form"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <input
                    type="email"
                    className="input-newsletter"
                    placeholder="Enter your email"
                    name="email"
                  />
                  <button type="submit">Subscribe Now</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubscribeStyleThree;
