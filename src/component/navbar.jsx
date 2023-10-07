import React from "react";
import { Link } from "react-router-dom";

export const Navbar= ()=>{
    return(
        <div class="navbar navbar-expand-lg bg-body-tertiary" className="navbar-container">
            <div class="container-fluid px-0" className="navbar-log-container">
                <Link to="home"><img src="StarFeeds.png" alt="" /></Link>
            </div>
          
        </div>
            )
        
}