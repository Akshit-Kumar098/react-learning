import React from "react";
import { useState } from "react";
function Login() {
    const[id,setId]=useState("");
    const[psswrd,setPsswrd]=useState("");
    const[idErr,setIdErr]=useState(false);
    function loginHandle(e){
        e.preventDefault()
    }
    function userHandler(e){
        let item=e.target.value;
        if(item.length<3)
            {
            setIdErr(true)
        }
        else{
            setIdErr(false)
        }
        console.warn(e.target.value.length)
    }
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={loginHandle}>
                <input type="text" placeholder="enter user id" onChange={userHandler} />{idErr?<span>user not valid</span>:""}
                <br /><br />
                <input type="text" placeholder="enter user password" /><br /><br />
                <button type="submit">Login</button>
            </form>
        </div>
    )

}
export default Login;