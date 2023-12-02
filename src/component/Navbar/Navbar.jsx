import React from 'react';
import './navbar.css';


export default function Navbar(){
    return(
        <nav className="nav">
            <div className="link">
                <div className="logo ">
                </div>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About Us</a></li>
                    <li><a href="">How it works</a></li>
                    <li><a href="">Success stories</a></li>
                    <li><a href="">FAQs</a></li>
                </ul>
            </div>
            <div className="button">
                <button>Login</button>
                <button>Signup for free</button>
            </div>
            <i className="bx bx-menu" id="menuBar"></i>
        </nav>
    )
}
