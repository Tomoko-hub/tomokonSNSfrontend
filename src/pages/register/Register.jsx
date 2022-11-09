import axios from 'axios';
import React from 'react'
import { useRef } from 'react';
import { useNavigate } from "react-router-dom";
import "./Register.css"

export default function Register() {

    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordConfirmation = useRef();

    const navigate = useNavigate();

    const handleSubmit = async(event) => {
        event.preventDefault();
        //console.log(email.current.value);
        //console.log(password.current.value);

        //password check
        if (password.current.value !== passwordConfirmation.current.value) {
            passwordConfirmation.current.setCustomValidity("OOOPS! Password is wrong.")
        } else {
            try {
                const user = {
                    username: username.current.value,
                    email: email.current.value,
                    password: password.current.value,
                };
                //resisterAPI
                await axios.post("/auth/register", user);
                navigate("/login");
            } catch(err) {
                console.log(err);
            }
        }
      };

  return (
    <div className='login'>
        <div className='loginWrapper'>
            <div className="loginLeft">
                <div className="loginLeftTitle">
                    <h3 className='loginLogo'>Tomokon SNS</h3>
                    <span className="loginDesc">
                        Tomokon Dummy SNS
                    </span>
                </div>
            </div>
            <div className="loginRight">
                    <form 
                        className="loginBox"
                        onSubmit={(event)=> handleSubmit(event)}
                    >
                        <p className='loginMessage'>Sign up here</p>
                        <input 
                            type="text" 
                            placeholder='Username'
                            className="loginInput"
                            required
                            ref={username}
                         />
                        <input 
                            type="email"
                            placeholder='Email' 
                            className="loginInput"
                            required
                            ref={email}
                         />
                        <input 
                            type="password"
                            placeholder='password' 
                            className="loginInput"
                            required
                            minLength="8"
                            ref={password}
                         />
                        <input 
                            type="password"
                            placeholder='Conform password' 
                            className="loginInput"
                            required
                            minLength="8"
                            ref={passwordConfirmation}
                         />
                        <button 
                            className="loginButton" 
                            type='submit'
                        >
                        Sign up
                        </button>
                        <button className="loginRegisterButton">
                        Login
                        </button>
                    </form>
            </div>
        </div>
    </div>
  )
}
