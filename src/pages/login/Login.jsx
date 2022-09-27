import React from 'react'
import { useRef } from 'react'
import "./Login.css"

export default function Login() {

  const email = useRef();
  const password = useRef();
  console.log(email);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email.current.value);
    console.log(password.current.value);
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
                        <p className='loginMessage'>Login</p>
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
                        <button 
                            className="loginButton"
                        >
                        Login
                        </button>
                        <span className="loginForegetPasswordText">Forget password?</span>
                        <button className="loginRegisterButton">
                        Create Account
                        </button>
                    </form>
            </div>
        </div>
    </div>
  )
}
