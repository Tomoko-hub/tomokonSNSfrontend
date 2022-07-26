import React from 'react'
import "./Register.css"

export default function Register() {
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
                        <p className='loginMessage'>Sign up here</p>
                        <input 
                            type="text" 
                            placeholder='Username'
                            className="loginInput"
                         />
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
                        <input 
                            type="text"
                            placeholder='Conform password' 
                            className="loginInput"
                         />
                        <button className="loginButton">
                        Sign up
                        </button>
                        <button className="loginRegisterButton">
                        Login
                        </button>
                    </div>
            </div>
        </div>
    </div>
  )
}
