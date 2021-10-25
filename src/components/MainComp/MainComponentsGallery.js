import React from "react";
import classes from "./MainComponentsGallery.module.css"
import GalleryBox from "./GalleryBox";


const MainComponentsGallery = () => {

    return (
        <>
            <div className={classes.gallery}>
                <div className="col-xs-12 ">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-6">
                                <div className={classes.boxImg}><img
                                    src={"https://themes.muffingroup.com/be/stylist/wp-content/uploads/2017/12/stylist-home-girl2.jpg"}
                                    className={classes.img}/></div>

                            </div>
                            <div className="col-xs-6">
                                <div className={classes.boxInfo}>
                                    <GalleryBox
                                        number="01"
                                        text="Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus."
                                    />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12">
                    <div className={classes.boxF} id={classes.firstId}>
                        <div className="container">
                            <div className="row">

                                <div className="col-xs-6">
                                    <div className={classes.boxInfo} id={classes.first}>
                                        <GalleryBox
                                            number="02"
                                            text="Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus."
                                        />
                                    </div>

                                </div>
                                <div className="col-xs-6">
                                    <div className={classes.boxImg}>
                                        <img
                                            src={"https://themes.muffingroup.com/be/stylist/wp-content/uploads/2017/12/stylist-gallery-woman1.jpg"}
                                            className={classes.img}/></div>

                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="col-xs-12">
                    <div className={classes.boxF} id={classes.secondId}>
                        <div className="container">
                            <div className="row">


                                <div className="col-xs-6">
                                    <div className={classes.boxImg} id={classes.secondImg}>
                                        <img
                                            src={"https://themes.muffingroup.com/be/stylist/wp-content/uploads/2017/12/stylist-home-girl1.jpg"}
                                            className={classes.img}/></div>

                                </div>
                                <div className="col-xs-6">
                                    <div className={classes.boxInfo} id={classes.second}>
                                        <GalleryBox
                                            number="03"
                                            text="Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus."
                                        />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="col-xs-12">
                    <div className={classes.boxF} id={classes.thirdId}>
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-6">
                                    <div className={classes.boxInfo} id={classes.third}>
                                        <GalleryBox
                                            number="04"
                                            text="Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus."
                                        />
                                    </div>
                                </div>
                                <div className="col-xs-6">
                                    <div className={classes.boxImg} id={classes.thirdImg}>
                                        <img
                                            src={"https://themes.muffingroup.com/be/stylist/wp-content/uploads/2017/12/stylist-home-girl3.jpg"}
                                            className={classes.img}/></div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="col-xs-12 ">
                    <div id={classes.fouthId}>
                        <div className="container">
                        <div className="row">
                            <div className="col-xs-6">
                                <div className={classes.boxImg} ><img
                                    src={"https://themes.muffingroup.com/be/stylist/wp-content/uploads/2017/12/stylist-gallery-woman2.jpg"}
                                    className={classes.img} id={classes.fouthImg} /></div>

                            </div>
                            <div className="col-xs-6">
                                <div className={classes.boxInfo} id={classes.fouth}>
                                    <GalleryBox
                                        number="05"
                                        text="Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus."
                                    />
                                </div>

                            </div>
                        </div>
                    </div>
                    </div>

                </div>



                <div className="col-xs-12"></div>
            </div>
        </>
    )


}
export default MainComponentsGallery