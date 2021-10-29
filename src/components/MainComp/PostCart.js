import React from "react";
import classes from "./PostCart.module.css";

const PostCart = ({
                      number, text, img
                  }) => {
    return (
        <>
            <div className={classes.post}>
                <div className="col-xs-12">
                    <div className="col-xs-8 " id={classes.toCenter}>
                        <div className={classes.postCart}>
                            <div className={classes.postNumber}>01</div>
                            <div className={classes.postText}> Curabitur sed iaculis dolor, non congue ligula. Maecenas
                                imperdiet ante eget hendrerit posuere. Nunc urna libero, congue porta nibh a, semper
                                feugiat
                                sem. Sed auctor dui eleifend, scelerisque eros ut, pellentesque nibh. Nam lacinia
                                suscipit
                                accumsan. Donec sodales, neque vitae rutrum convallis, nulla tortor pharetra odio, in
                                varius
                                ante ante sed nisi. Orci varius natoque penatibus et magnis dis parturient montes,
                                nascetur
                                ridiculus mus.
                            </div>
                        </div>
                    </div>
                    <div className={classes.postImg}><img
                        src={"https://themes.muffingroup.com/be/stylist/wp-content/uploads/2017/12/stylist-singlepost-blackdress.jpg"}/>
                    </div>
                    <div className="col-xs-8" id={classes.toCenter}>
                        <div className={classes.postCart}>
                            <div className={classes.postNumber}>02</div>
                            <div className={classes.postText}>Amagna ac pede. Mauris suscipit mauris. Nam quis erat id
                                tortor. Phasellus at nibh nulla nulla, egestas quam eu tortor orci, eros. Mauris neque.
                                Pellentesque dolor. Mauris in est.
                            </div>
                            <div className={classes.postText}>Curabitur sed iaculis dolor, non congue ligula. Maecenas
                                imperdiet ante eget hendrerit posuere. Nunc urna libero, congue porta nibh a, semper
                                feugiat
                                sem. Sed auctor dui eleifend, scelerisque eros ut, pellentesque nibh. Nam lacinia
                                suscipit
                                accumsan. Donec sodales, neque vitae rutrum convallis, nulla tortor pharetra odio, in
                                varius
                                ante ante sed nisi. Orci varius natoque penatibus et magnis dis parturient montes,
                                nascetur
                                ridiculus mus.
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12" id={classes.cartFlex}>
                        <div className="col-xs-6">
                            <img className={classes.cartImg}
                                 src={"https://themes.muffingroup.com/be/stylist/wp-content/uploads/2017/12/stylist-singlepost-asianwoman1.jpg"}/>
                        </div>
                        <div className="col-xs-6">
                            <img
                                src={"https://themes.muffingroup.com/be/stylist/wp-content/uploads/2017/12/stylist-singlepost-asianwoman2.jpg"}
                                className={classes.cartImg}/>
                        </div>
                    </div>
                    <div className="col-xs-8" id={classes.toCenter}>
                        <div className={classes.postCart}>
                            <div className={classes.postNumber}>03</div>
                            <div className={classes.postText}><h2>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidid
                            </h2>
                            </div>
                            <div className={classes.postText}>Curabitur sed iaculis dolor, non congue ligula. Maecenas
                                imperdiet ante eget hendrerit posuere. Nunc urna libero, congue porta nibh a, semper
                                feugiat
                                sem. Sed auctor dui eleifend, scelerisque eros ut, pellentesque nibh. Nam lacinia
                                suscipit
                                accumsan. Donec sodales, neque vitae rutrum convallis, nulla tortor pharetra odio, in
                                varius
                                ante ante sed nisi. Orci varius natoque penatibus et magnis dis parturient montes,
                                nascetur
                                ridiculus mus.
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12">
                        <div className={classes.cartFlex}>
                            <div className="col-xs-6">
                                <img
                                    src={"https://themes.muffingroup.com/be/stylist/wp-content/uploads/2017/12/stylist-singlepost-sketch1.jpg"}/>
                            </div>
                            <div className="col-xs-6" id={classes.postToCenter}>
                                <div className={classes.postCart}>
                                    <div className={classes.postNumber}>A</div>
                                    <div className={classes.postText} id={classes.cartToLeft}>Lorem ipsum dolor sit
                                        amet, consectetur adipisicing
                                        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                        ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        comm
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12">
                        <div className={classes.cartFlex}>
                            <div className="col-xs-6" id={classes.postToCenter}>
                                <div className={classes.postCart} id={classes.postCartToRight}>
                                    <div className={classes.postNumber}>B</div>
                                    <div className={classes.postText} id={classes.cartToLeft}>Lorem ipsum dolor sit
                                        amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea comm
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-6">
                                <img
                                    src={"https://themes.muffingroup.com/be/stylist/wp-content/uploads/2017/12/stylist-singlepost-sketch2.jpg"}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12">
                        <div className={classes.cartFlex}>
                            <div className="col-xs-6">
                                <img
                                    src={"https://themes.muffingroup.com/be/stylist/wp-content/uploads/2017/12/stylist-singlepost-sketch3.jpg"}/>
                            </div>
                            <div className="col-xs-6" id={classes.postToCenter}>
                                <div className={classes.postCart}>
                                    <div className={classes.postNumber}>C</div>
                                    <div className={classes.postText} id={classes.cartToLeft}>Lorem ipsum dolor sit
                                        amet, consectetur adipisicing
                                        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                        ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        comm
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-8" id={classes.toCenter}>
                        <div className={classes.postCart}>
                            <div className={classes.postNumber}>04</div>
                            <div className={classes.postText}><h2>
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            </h2>
                            </div>

                        </div>
                    </div>
                    <div className="col-xs-12">
                        <div className={classes.share}>
                            <div className="col-xs-8">
                                <div className={classes.netWork}>
                                    <div>Share : </div>
                                    <div> f</div>
                                    <div>t</div>
                                    <div>in</div>
                                    <div>painter</div>
                                </div>
                            </div>
                            <div className="col-xs-4">
                                <div className={classes.likeCount}>Like Count !</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
export default PostCart