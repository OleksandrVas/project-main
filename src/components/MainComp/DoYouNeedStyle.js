import React from "react";
import StylistHomeIcon from "./../../container/Main/Img/stylist-homeicon.png"
import StylistHomeCabluck from "./../../container/Main/Img/stylist-home-cabluck.png";
import StylistHomeShoe from "./../../container/Main/Img/stylist-home-shoe.png";
const DoYouNeedStyle = () => {
    return (
      <>
  <section id="do-you-need-style">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 style-article">
              <div className="col-xs-6">
                <h2 className="about-who third-style">Do you need a stylist?</h2>
              </div>
              <div className="col-xs-6">
                <div className="button-article third-button-article ">
                  <a href="">contact me today</a>
                </div>
              </div>
            </div>
            <div className="col-xs-12 bgc-fourth-article-bgc">
              <div className="col-xs-6">
                <div className="box-style">
                  <h2>03</h2>
                  <h3>Take a close look at my services</h3>
                  <div className="icon-style">
                    <div className="style-by-icon">
                      <div className="col-xs-4">
                        <div className="style-icon-box">
                          <img src={StylistHomeIcon} alt="" />
                        </div>
                      </div>
                      <div className="col-xs-8">
                        <div className="box-info-style">
                          Duis dignissim mi ut laoreet mollis. Nunc id tellus
                          finibus, eleifend mi vel, maximus justo.
                        </div>
                      </div>
                    </div>
                    <div className="style-by-icon">
                      <div className="col-xs-4">
                        <div className="style-icon-box second-icon-style">
                          {" "}
                          <img src={StylistHomeCabluck} alt="" />
                        </div>
                      </div>
                      <div className="col-xs-8">
                        <div className="box-info-style">
                          Nam massa erat, aliquet a rutrum eu, sagittis ac nibh.
                          Pellentesque velit dolor, suscipit in ligula a, suscipit
                          rhoncus dui.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="button-article style-button">
                    <a href="">SEE ALL SERVICES</a>
                  </div>
                </div>
              </div>
              <div className="col-xs-6 position-style">
                <div>
                  <img src={StylistHomeShoe} alt="" height="400px" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </>
    );
  }

  export default DoYouNeedStyle
