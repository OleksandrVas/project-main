import React from "react";
import classes from "./BlogCart.module.css"
import {NavLink} from "react-router-dom";


const BlogCart = ({img, groupOfCart, date, headerOfCart}) => {
    return (
        <>
            <div className={classes.colXsSix}>
                <div className={classes.blogCartView}>
                    <img
                        src={img}/>
                    <div className={classes.navBlogCart}>
                        <div className={classes.cartHead}>

                            <span><NavLink to="/Blog"
                                           className={classes.navLinkToGroup}>{groupOfCart}</NavLink> < /span>
                            <span className={classes.dateGroup}> at </span>
                            <span className={classes.dateGroup}> {date}</span>
                        </div>
                        <div className={classes.headOfNavLink}>
                            <NavLink to="/Post" className={classes.navLinkInHeader}>{headerOfCart}</NavLink>
                            <hr className={classes.hrBlogCart}/>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}
export default BlogCart