import React from "react";
import classes from "./MainComponentsPost.module.css";
import PostCart from "./PostCart";
import postCartArray from "./PostCartArray";

const MainComponentsPost = () => {

    // let newPostCartArray =
    //     postCartArray
    //         .map(postItem => {
    //             return (
    //                 <>
    //                     <PostCart
    //                         number={postItem.number}
    //                         text={postItem.text}
    //                         img={postItem.img}
    //                     />
    //                     {console.log(postItem)}
    //                 </>
    //             )
    //
    //
    //         })
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="col-xs-12">img</div>
                        <div className="col-xs-12" >
                            <PostCart />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default MainComponentsPost