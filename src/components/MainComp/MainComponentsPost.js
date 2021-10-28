import React from "react";
import classes from "./MainComponentsPost.module.css";
import PostCart from "./PostCart";

const MainComponentsPost = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className={classes.post}>
                        <div className="col-xs-12">img</div>
                        <div className="col-xs-12">
                            <PostCart/>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default MainComponentsPost