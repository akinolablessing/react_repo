import React, {useState} from "react";
import style from "./signUp.module.css"
import CustomButton from "../../../reuseable/CustomButton.jsx";
import Login from "../login/Login.jsx";
import {useSignUpMutation} from "../../../services/userAuthApi.jsx";

const SignUp =()=> {

    const userDetails ={
        firstName:"",
        lastName:"",
        email:"",
        password:""
    };
    const [userData, setUserData] = useState(userDetails);
    const [signUp,{isLoading, isError}] = useSignUpMutation();
    // console.log(res)
    const handleInput =(e)=>{
        const {name, value} =e.target;
        setUserData((prev)=>({...prev,[name]:value.trim()}))
    };
    console.log(userData)
    const submitHandle = async(e)=>{
        e.preventDefault();
        try {
            const response = await signUp(userData).unwrap();
            console.log(response)
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
                <input type={"number"} name="pssword" id="pasword"
                       placeholder="pNumber" className={style.input} onChange={handleInput} required/>

                <label htmlFor="password">Password:</label>
                <input type={"password"} name="pssword" id="pasword"
                       placeholder="password" className={style.input} onChange={handleInput} required/>


                <label htmlFor="address">Address:</label>
                <input  name="address" id="pasword"
                       placeholder="address" className={style.input} onChange={handleInput} required/>

                <CustomButton text="signUp" onClick={() => window.location.href = '/Login'} />
            </form>
        </div>
        </>
)
}
export default SignUp