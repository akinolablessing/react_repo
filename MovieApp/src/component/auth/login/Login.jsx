import React, {useState} from "react";
import style from "../singup/signUp.module.css";
import {Link} from "react-router";
import CustomButton from "../../../reuseable/CustomButton.jsx";
const Login =()=>{

    const loginDetails ={
        email: "",
        password:""
    };
    const [loginData, setLoginData] = useState(loginDetails);
    const handleChange =(e)=>{
        const [name,value] =e.target
        setLoginData((prev)=>({...prev,[name]:value.trim()}))
    };
    // console.log(loginData)
    return(
<>
    <div>
    <form className={style.formStyle}>
    <label htmlFor="password">Password:</label>
    <input type="pasword" name="pasword" onChange={handleChange} placeholder="password" className={style.input} required/>

    <label htmlFor="email">Gmail:</label>
        <input type="email" id="email" onChange={handleChange} placeholder="email" className={style.input} required/>

        <p>Don't have account?<Link to="/singUp" >SignUp</Link></p>

        <CustomButton text="login"/>
        </form>
    </div>
    </>
    )
}
export default Login