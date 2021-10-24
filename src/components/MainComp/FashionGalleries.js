import React from "react";
const FashionGalleries = () => {
    return (
<>
    <section id="fashion-galleries">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="second-article-img">
              <div className="col-xs-6">
                <div></div>
              </div>
              <div className="col-xs-6">
                <div className="box-second-article">
                  <div className="col-xs-12">
                    <h2 className="number-of-article">02</h2>
                  </div>
                  <div className="col-xs-12">
                    <div className="fashion-article">Fashion galleries</div>
                  </div>
                  <div className="col-xs-12">
                    <h2 className="about-fashion">
                      Duis dignissim mi ut laoreet mollis. Nunc id tellus
                      finibus, eleifend mi vel, maximus justo. Maecenas mi
                      tortor, pellentesque a aliquam ut, fringilla eleifend
                      lectus. Maecenas ultrices tellus sit amet sem placerat
                      tempor.
                    </h2>
                  </div>
                  <div className="col-xs-12">
                    <div className="button-article      second">
                      <a href="">see the gallery</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-4 without-padding">
            <div className="first-bgc-article "></div>
          </div>
          <div className="col-xs-4 without-padding">
            <div className="second-bgc-article"></div>
          </div>
          <div className="col-xs-4 without-padding">
            <div className="third-bgc-article"></div>
          </div>
        </div>
      </div>
    </section>
  </>
    )
  
};
export default FashionGalleries