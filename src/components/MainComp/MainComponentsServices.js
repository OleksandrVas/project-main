import React from "react";
import classes from "./MainComponentsServices.module.css" ;


const MainComponentServices = () => {
    return (
        <>
            <div className={"services"}>
                <div className={"row"}>
                    <div className={"col-xs-12"}>
                        <div className={classes.helpWithClothes}>
                            <div className={"col-xs-6"}>
                                cabluck
                            </div>
                            <div className={"col-xs-6"}>
                                <div className={classes.box}>
                                    <img
                                        src={"https://themes.muffingroup.com/be/stylist/wp-content/uploads/2017/12/stylist-offer-icon2.png"}/>
                                    <h2>Helping
                                        with clothes</h2>
                                    <p>Amagna ac pede. Mauris suscipit mauris. Nam quis erat id tortor. Phasellus at
                                        nibh nulla nulla, egestas quam eu tortor orci, eros. Mauris neque. Pellentesque
                                        dolor. Mauris in est.</p>
                                    <p>Mauris neque. Pellentesque dolor. Mauris in est. Vivonec in faucibus volutpat,
                                        velit in leo ultrices posuere ante a nisl. Sed nec magna. Donec enim</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"col-xs-12"}>
                        <div className={classes.makeUp}></div>
                    </div>
                    <div className={"col-xs-12"}>
                        <div className={classes.consulthing}></div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default MainComponentServices