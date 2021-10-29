import React from "react";
import classes from "./MainComponentsPost.module.css";
import PostCart from "./PostCart";
import postCartArray from "./PostCartArray";
import MainComponentsPostCart from "./MainCompontntsPostCart";

const MainComponentsPost = () => {

    let newPostCartArray =
        postCartArray
            .map(postItem => {
                return (
                    <>
                        <MainComponentsPostCart img={postItem.img}
                                                dataGroup={postItem.dataGroup}
                                                textGroup={postItem.textGroup}
                                                textHeader={postItem.textHeader}/>
                    </>
                )


            })
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="col-xs-12">
                            <div className={classes.postImgToCenter}>
                                {newPostCartArray}
                            </div>

                        </div>
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