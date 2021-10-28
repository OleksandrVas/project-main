import React from "react";
import classes from "./MainComponentsBlog.module.css";
import BlogCart from "./BlogCart";
import BlogCartArray from "./BlogCartArray";

const MainComponentsBlog = () => {
    console.log(BlogCartArray)
    const newBlogCartArray =
        BlogCartArray
            .map(cartArray => {
                return (
                    <>
                        <BlogCart img={cartArray.img}
                                  date={cartArray.date}
                                  groupOfCart={cartArray.groupOfCart}
                                  headerOfCart={cartArray.headerOfCart}
                        />
                    </>
                )
            })

    return (
        <>
            <div className={classes.blog}>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="col-xs-12">
                                <div className={classes.headForCenter}>
                                    <div>Stories, reviews,
                                        inspirations
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-10" id={classes.blogCenter}>
                                {newBlogCartArray}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MainComponentsBlog