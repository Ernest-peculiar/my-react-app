import React, { useState } from 'react'
import './LoginRegister.css'
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

import emailjs from '@emailjs/browser';


function LoginRegister() {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_e25bn09', 'template_n49sbzd', form.current, {
        publicKey: 'l_o_0EE2UQQuKbUZgwZjE',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

    const [action, setAction] = useState('')

    const registerLink = () => {
        setAction('active');
    }

    const loginLink = () => {
        setAction('')
    }

    return(
        <div className={`wrapper ${action}`}>

            <div className="form-box login">
                <form  ref={form} onSubmit={sendEmail}>
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type="text" placeholder='Username' required/>
                        <FaUser className='icon' />
                    </div>

                    <div className="input-box">
                        <input type="password" placeholder='password' required/>
                        <FaLock  className='icon'/>

                    </div>

                    <div className="remember-forgot">
                        <label><input type="checkbox" />Remember me</label>
                        <a href="#">Forgot password</a>
                    </div>

                    <button>Login</button>

                    <div className="register-link">
                        <p>Dont have any account? <a href="#" onClick={registerLink}>Register</a></p>
                    </div>
                </form>
            </div>

            <div className="form-box-register">
                <form  ref={form} onSubmit={sendEmail}>
                    <h1>Register</h1>
                    <div className="input-box">
                        <input type="text" placeholder='Username' required/>
                        <FaUser className='icon' />
                    </div>
                    <div className="input-box">
                        <input type="email" placeholder='E-mail' required/>
                        
                        <FaEnvelope className='icon' />
                    </div>

                    <div className="input-box">
                        <input type="password" placeholder='password' required/>
                        <FaLock  className='icon'/>
                    </div>

                    <div className="remember-forgot">
                        <label><input type="checkbox" />I agree to the terms & conditions</label>
                        
                    </div>

                    <button>Register</button>

                    <div className="register-link">
                        <p>Already have an account ?? <a href="#"onClick={loginLink}>Login</a></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginRegister