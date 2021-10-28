import React from "react";
import classes from "./BlogCart.module.css"
import {NavLink} from "react-router-dom";
import BlogCartArray from "./BlogCartArray";

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
                            <span> {date}</span>
                        </div>
                        <div>
                            <NavLink to="/Blog" className={classes.navLink}>{headerOfCart}</NavLink>
                            <hr/>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}
export default BlogCart