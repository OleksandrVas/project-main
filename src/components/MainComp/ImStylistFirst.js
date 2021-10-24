import React from "react";
import ButtonVievMoreInfo from "./MainButtonVievMoreInfo";
const ImStylistFirst = () => {
    return (
      <>
        <section id="im-stilist-firstr">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h2 className="number-of-article">01</h2>
              </div>
              <div className="col-xs-12">
                <h2 className="about-who">I am a stylist</h2>
              </div>
              <div className="col-xs-12">
                <div className="about-work">My job is to make you beautiful</div>
              </div>
  
              <div className="col-xs-12">
                <div className="box-about">
                  <div className="info-stilist">
                    Amagna ac pede. Mauris suscipit mauris. Nam quis erat id
                    tortor. Phasellus at nibh nulla nulla, egestas quam eu tortor
                    orci, eros. Mauris neque. Pellentesque dolor. Mauris in est.
                  </div>
                  <div className="info-stilist">
                    Amagna ac pede. Mauris suscipit mauris. Nam quis erat id
                    tortor. Phasellus at nibh nulla nulla, egestas quam eu tortor
                    orci, eros. Mauris neque. Pellentesque dolor. Mauris in est.
                  </div>
                </div>
              </div>
              <div className="col-xs-12">
                <div className="button-article">
                  <ButtonVievMoreInfo />
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };

  export default ImStylistFirst