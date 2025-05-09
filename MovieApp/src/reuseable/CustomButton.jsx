import React from "react";
import style from "./CustomButton.module.css"

const CustomButton=(props)=>{
    return(
        <div>
            <button className={style.signButton}>{props.text}</button>
        </div>
    )
}
export default CustomButton