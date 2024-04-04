import React, { useState } from 'react';
import './LoginForm.css';
import { FaUser } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

const LoginForm = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className='wrapper'>
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder='Id' required/>
                    <FaUser className='icon'/> 
                </div>
                <div className="input-box">
                    <input
                        type={passwordVisible ? "text" : "password"}
                        placeholder='Password'
                        required
                    />
                    <i
                        className={passwordVisible ? "fas fa-eye-slash" : "fas fa-eye"}
                        id="togglePassword"
                        style={{ marginLeft: "-30px", cursor: "pointer" }}
                        onClick={togglePasswordVisibility}
                    ></i>
                </div>
                <div className="input-box">
                    <input type="text" name="scHolders" list="stakeHolders" placeholder='Role' required />
                    <datalist id="stakeHolders">
                        <option value="Retailer"/>
                        <option value="Distributor"/>
                        <option value="Manufacturer"/>
                    </datalist>
                    <IoMdArrowDropdown className='icon'/>
                </div>
                <button type="submit">Login</button>

                <div className="register-link">
                    <p>Don't have an account? <a href="#">Register</a></p>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
