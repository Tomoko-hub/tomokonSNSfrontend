import React from 'react'
import "./Login.css"

export default function Login() {
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
                    <div className="loginBox">
                        <p className='loginMessage'>Login</p>
                        <input 
                            type="text" 
                            placeholder='Email'
                            className="loginInput"
                         />
                        <input 
                            type="text"
                            placeholder='password' 
                            className="loginInput"
                         />
                        <button className="loginButton">
                        login
                        </button>
                        <span className="loginForegetPasswordText">Forget password?</span>
                        <button className="loginRegisterButton">
                        Create Account
                        </button>
                    </div>
            </div>
        </div>
    </div>
  )
}
