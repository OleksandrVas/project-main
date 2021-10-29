import React from "react";
import classes from "./MainComponentsPostCart.module.css";
import {NavLink} from "react-router-dom";

const MainComponentsPostCart = ({img, dataGroup, textGroup, textHeader}) => {
    return (
        <>
            <div className={classes.postCart}>
                <div>
                    <img src={img} className={classes.imgToRadius}/>
                </div>
                <div  className="col-xs-12" id={classes.textCart}>
                    <div>
                        <div className={classes.textHeader}><NavLink to="/Blog">{textHeader}</NavLink> </div>
                    </div>
                    <div className={classes.cartToFlex}>
                        <div>
                        <NavLink to="/Blog"  > {textGroup}</NavLink>
                        </div>
                        <div className={classes.dataGroup}>{dataGroup} </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default MainComponentsPostCart