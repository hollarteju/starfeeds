import React, {useState} from "react";
import { Link } from "react-router-dom";



const SignUpPage =()=>{

    return(
        <div class="container">  
            <div class="vh-100 sign-in" className="sign-container">
                
                <div class="row d-flex justify-content-center align-items-center h-100" >
                    <div class="col col-xl-10">
                        <div class="card">
                             <div class="row g-0">
                                <div class="col-md-6 col-lg-6 d-none d-md-block sign-in-image">
                                    <img src="log_in_pic.png" />
                                </div> 
                                    <div class="col-md-6 col-lg-6 d-flex align-items-center">
                                        <div class="card-body p-4 p-lg-5 mx-4 text-black">

                                            <form>
                                                <div class="d-flex align-items-center align-text-center mb-5 pb-1" className="login_logo">
                                                    <span>Register</span>
                                                    <p>Enter your valid details to login</p>
                                                </div>
                                                <div class="form-outline mb-4">
                                                    <label htmlFor="email">Email Address</label>
                                                    <input type="text" id="form2Example17" class="form-control form-control-m" name="username" placeholder="0000000654678" />
                                                        
                                                </div>
                                                <div class="form-outline mb-4">
                                                    <label htmlFor="username">Username</label>
                                                    <input type="text" id="form2Example17" class="form-control form-control-m" name="username" placeholder="0000000654678" />
                                                        
                                                </div>
                                                <div class="form-outline mb-4">
                                                <label htmlFor="password">Password</label>
                                                    <input type="password" id="form2Example27" name="password" class="form-control form-control-m" placeholder="*************"/>
                                          
                                                </div> 
                                                <div class="form-outline mb-4">
                                                    <label htmlFor="confirm_password">Confirm Password</label>
                                                    <input type="text" id="form2Example17" class="form-control form-control-m" name="username" placeholder="0000000654678" />
                                                        
                                                </div>
                                         
                                        
                                                <div class="pt-1 mb-4 btn-container">
                                                    <button class="btn btn-m btn-block" type="submit">Register</button>
                                                </div>
                                                          
                                                                <p class="mb-5 pb-lg-2 text-align-center" className="register-link">Already have an account?
                                                                  <Link to="/"><a>  Login</a></Link>
                                                                </p>
                                                               
                                            </form>
                                        </div> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
         
           
      

    )
}

export default SignUpPage;