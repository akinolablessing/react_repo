import React from "react";
import "./signUp.modulle.css"
import CustomButton from "../../../reuseable/CustomButton.jsx";
import style from "./signUp.modulle.css"

const SignUp =()=> {
    return (
        <div className="container">
            <p>Have an </p>
    <label htmlFor="name">UserName:</label>
    <input type="text" id="name" placeholder="userName" required/>
            <label htmlFor="password">Password:</label>
            <input type="pasword" id="pasword" required/>
        </div>
)
}
export default SignUp