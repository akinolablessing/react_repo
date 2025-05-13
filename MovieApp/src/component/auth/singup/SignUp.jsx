import React, {useState} from "react";
import style from "./signUp.module.css"
import CustomButton from "../../../reuseable/CustomButton.jsx";

import {useSignUpMutation} from "../../../services/userAuthApi.jsx";
import {Link, useNavigate} from "react-router";

const SignUp =()=> {
    const navigate = useNavigate();

    const userDetails ={
        firstName:"",
        lastName:"",
        email:"",
        phoneNumber:"",
        password:"",
        address:""
    };

    const [userData, setUserData] = useState(userDetails);
    const [signUp,{isLoading, isError}] = useSignUpMutation();
    // console.log(res)
    const handleInput =(e)=>{
        const {name, value} = e.target;
        setUserData((prev)=>({
            ...prev,[name]:value.trim()
        }))
    };
    const submitHandle = async(e)=>{
        e.preventDefault();
        try {
            const response = await signUp(userData).unwrap();
            console.log(userData)
            console.log(response)
            if(response.message){
                navigate("/login")
            }
        }catch (e) {
            console.log(e)
        }
    }
    return (

        <>
        <div >
            <form onSubmit={submitHandle} className={style.formStyle}>
            <p>Have an account?</p>
           <label htmlFor="name">FirstName:</label>
       <input name="firstName"  placeholder="userName"
              className={style.input} onChange={handleInput} required/>

                <label htmlFor="name">LastName:</label>
                <input name="lastName"  placeholder="userName"
                       className={style.input} onChange={handleInput} required/>

            <label htmlFor="email">Gmail:</label>
            <input type={"email"} name="email" placeholder="email"
                   className={style.input} onChange={handleInput} required/>

                <label htmlFor="number">PhoneNumber:</label>
                <input type={"number"} name="phoneNumber" id="phoneNumber"
                       placeholder="pNumber" className={style.input} onChange={handleInput} required/>

                <label htmlFor="password">Password:</label>
                <input type={"password"}  id="password"
                       name="password"
                       placeholder="password" className={style.input} onChange={handleInput} required/>


                <label htmlFor="address">Address:</label>
                <input  id="address"
                        name="address"
                       placeholder="address" className={style.input} onChange={handleInput} required/>

                <p>Already have account?<Link to="/login">signIn</Link></p>
                <CustomButton text="signUp" />
            </form>
        </div>
        </>
)
}
export default SignUp