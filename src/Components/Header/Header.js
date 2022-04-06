import React from 'react'
import { FaFacebookMessenger } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import "./Header.css";


function Header() {
    return (
        <div>
            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                <ul className='menu-list'>
                    <li className='messagelogo'>
                      <FaFacebookMessenger /> 
                    </li>
                    <li className='userlogo'>
                      < FaUserCheck/> 
                    </li>
                    <li className='profilelogo'>
                    <img src="..." class="img-thumbnail" alt="..."/>
                    Shekhar Agarwal
                    </li>
                    <li className='applogo'>
                    <img src="..." class="img-thumbnail" alt="..."/>
                    </li>
                </ul>
    
                </div>
            </nav>
        </div>
    )
}

export default Header;