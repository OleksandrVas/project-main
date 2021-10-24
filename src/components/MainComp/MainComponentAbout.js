import React from "react";
import classes from "./MainComponentAbout.module.css"
import TextBoxes from "./TextBoxes";

const MainComponentAbout = () => {
    return (
        <>
            <div className={classes.about}>
                <div className={classes.container}>
                    <div className={classes.row}>
                        <h1 className={classes.allAbout}>All About Us</h1>
                        <div className={classes.rowBox}>
                            <div className={classes.containerBox}>
                                <TextBoxes
                                    number={"01"}
                                    text ={"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com."}
                                />
                                <TextBoxes
                                number={"02"}
                                text={"Curabitur sed iaculis dolor, non congue ligula. Maecenas imperdiet ante eget hendrerit posuere. Nunc urna libero, congue porta nibh a, semper feugiat sem." +
                                " Sed auctor dui eleifend, scelerisque eros ut, pellentesque nibh. Nam lacinia suscipit accumsan."}

                                />
                                <TextBoxes
                                number={"03"}
                                text={"Maecenas imperdiet ante eget hendrerit posuere. Nunc urna libero, congue porta nibh a, semper feugiat sem." +
                                " Sed auctor dui eleifend, scelerisque eros ut, pellentesque nibh." +
                                " Nam lacinia suscipit accumsan."}
                                >
                                </TextBoxes>

                                <TextBoxes
                                number={"04"}
                                text={"Nunc urna libero, congue porta nibh a, semper feugiat sem. Sed auctor dui eleifend, scelerisque eros ut" +
                                ", pellentesque nibh. Nam lacinia suscipit accumsan."}
                                />
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default MainComponentAbout