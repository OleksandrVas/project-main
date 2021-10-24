import React from "react";
import classes from "./MainComponentsServices.module.css" ;
import BoxTextView from "./BoxTextView";


const MainComponentServices = () => {
    return (
        <>
            <div className={"services"}>
                <div className={"container"}>
                    <div className={"row"}>
                        <div className={"col-xs-12"}>
                            <div className={classes.helpWithClothes}>
                                <div className={"col-xs-6"}>
                                    <img
                                        src={"https://themes.muffingroup.com/be/stylist/wp-content/uploads/2017/12/stylist-home-shoe.png"}
                                        className={classes.imgSrc}/>
                                </div>
                                <div className={"col-xs-6"}>
                                    <div className={classes.box}>
                                        <BoxTextView
                                            src={"https://themes.muffingroup.com/be/stylist/wp-content/uploads/2017/12/stylist-offer-icon2.png"}
                                            heading={"Helping with clothes "}
                                            textingOne={"Amagna ac pede. Mauris suscipit mauris. Nam quis erat id tortor. Phasellus at nibh nulla nulla, egestas quam eu tortor orci, eros. Mauris neque. Pellentesque dolor. Mauris in est."}
                                            textingTwo={"Mauris neque. Pellentesque dolor. Mauris in est. Vivonec in faucibus volutpat, velit in leo ultrices posuere ante a nisl. Sed nec magna. Donec enim."}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"col-xs-12"}>
                            <div className={classes.makeUp}>
                                <div className={"col-xs-6"}>
                                    <div className={classes.box}>
                                        <BoxTextView
                                            src={"https://themes.muffingroup.com/be/stylist/wp-content/uploads/2017/12/stylist-offer-icon1.png"}
                                            heading={"Make up\n" +
                                            "and cosmetics"}
                                            textingOne={"Amagna ac pede. Mauris suscipit mauris. Nam quis erat id tortor. Phasellus at nibh nulla nulla, egestas quam eu tortor orci, eros. Mauris neque. Pellentesque dolor. Mauris in est."}
                                            textingTwo={"Mauris neque. Pellentesque dolor. Mauris in est. Vivonec in faucibus volutpat, velit in leo ultrices posuere ante a nisl. Sed nec magna. Donec enim."}
                                        />
                                    </div>
                                </div>
                                <div className={"col-xs-6"}>
                                    <img
                                        src={"https://themes.muffingroup.com/be/stylist/wp-content/uploads/2017/12/stylist-offer-cream.png"}
                                        className={classes.imgCosmetics}/>
                                </div>
                            </div>
                        </div>
                        <div className={"col-xs-12"}>
                            <div className={classes.consul}>
                                <div className={"col-xs-6"}>
                                    <img
                                        src={"https://themes.muffingroup.com/be/stylist/wp-content/uploads/2017/12/stylist-offer-perfume.png"}
                                        className={classes.imgSrc}/>
                                </div>
                                <div className={"col-xs-6"}>
                                    <div className={classes.box}>
                                        <BoxTextView
                                            src={"https://themes.muffingroup.com/be/stylist/wp-content/uploads/2017/12/stylist-offer-icon3.png"}
                                            heading={"Savoir vivre\n" +
                                            "consulting"}
                                            textingOne={"Amagna ac pede. Mauris suscipit mauris. Nam quis erat id tortor. Phasellus at nibh nulla nulla, egestas quam eu tortor orci, eros. Mauris neque. Pellentesque dolor. Mauris in est."}
                                            textingTwo={"Mauris neque. Pellentesque dolor. Mauris in est. Vivonec in faucibus volutpat, velit in leo ultrices posuere ante a nisl. Sed nec magna. Donec enim."}
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className={"col-xs-12"}>
                            <div className={"container"}>
                                <div className={classes.thisIsHowIWork}>
                                    <h2>This is how I work<br/>
                                        — lorem ipsum doloremus.</h2>
                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                        fugiat
                                        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                        qui
                                        officia deserunt mollit anim id est laborum.</p>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                        doloremque
                                        laudantium.</p>
                                    <button className={classes.getContactBtn}><a>Contact me today</a></button>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}
export default MainComponentServices