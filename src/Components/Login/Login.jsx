import React from 'react'
import  './Login.scss';
import {FaUser} from 'react-icons/fa';
import {RiLockPasswordFill} from 'react-icons/ri';
import {Link} from 'react-router-dom';
import {IoLogoFacebook} from 'react-icons/io';

export default function Login() {
    return (
        <div className="LoginDiv"> 
            <div className="inputDiv">
                 <FaUser/>
                < input type="text" name="username" size="30" />

            </div>
            <div className="inputDiv">
              <RiLockPasswordFill/>
                <input type="password" name="password" size="30" />
                
                
            </div>
            <Link to="/DashBoard">
            <button type="button" name="login" >Login</button>
            </Link>
            
        </div>
    )
}
