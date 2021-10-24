import React from "react";
const ContactInfoBottom = () => {
    return (
  <section id="contact-info-bottom">
        <div className="container">
          <div className="row">
            <div className="col-xs-10 contact-info-box ">
              <div className="col-xs-4">
                <div className="col-xs-12">
                  <h2 className="stylist">Stylist</h2>
                </div>
                <div className="col-xs-12">
                  <div className="lorem-buttom">
                    Lorem ipsum dolor sit amet, consectetur adipcing elit, sed do
                  </div>
                </div>
              </div>
              <div className="col-xs-4">
                <ul className="bottom-li">
                  <li>
                    <a href="">Facebook</a>{" "}
                  </li>
                  <li>
                    <a href="">Twitter</a>{" "}
                  </li>
                  <li>
                    <a href="">Pinterest</a>{" "}
                  </li>
                  <li>
                    <a href="">Google+</a>{" "}
                  </li>
                </ul>
              </div>
              <div className="col-xs-4">
                <div className="col-xs-12 without-padding">
                  <h2 className="sign-up">Sign up for the newsletter </h2>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Type in your email "
                    className="sign-up-input"
                  />
                </div>
                <button className="subscribe-botton">Subscibe</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
      
    
  };
  export default ContactInfoBottom