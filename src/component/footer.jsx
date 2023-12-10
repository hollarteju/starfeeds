import React from 'react';

export default function Footer(){
    const img = "/images/footer.jpg"
    return(
        <footer>
            <div className='footer-container'>
                <div className='footer-ads'>
                    <img  width= "155px" height= "155px" src={process.env.PUBLIC_URL + img} alt="" />
                    <h6>Starfeeds</h6>
                    <span>StarFeeds is here to bridge the gap between your aspirations and your abilities, providing you with the tools and insights you need to excel in your chosen field.</span>
                </div>
                <div className='footer-contents'>
                    <div id='company'>
                        <p>COMPANY</p>
                        <ul >
                            <li><a href='#'>About us</a> </li>
                            <li><a href='#'>Talent program</a></li>
                            <li><a href='#'>Career</a></li>
                            <li><a href='#'>Contact us</a></li>
                            <li><a href='#'>Privacy Policy</a></li>
                        </ul>
                    </div>
                   
                    <ul id="ul">                    
                        <li><a href='#'>Reviews</a></li>
                        <li><a href='#'>Direct Mail Academy</a></li>
                        <li><a href='#'>Success stories</a></li>
                        <li><a href='#'>Terms & conditions</a></li>
                    </ul>
                </div>                  
            </div>
            <hr />
            <div id='foot'>
                <h5>© 2023 StarFeeds, Inc. All rights reserved.</h5>
                <div className='footer-btn'>
                    <button id='login'>Login</button>
                    <button id='signup'>Signup for free</button>
                </div>
            </div>
            <div className='footer-contents-mobile'>
                    
                        <p>COMPANY</p>
                    <div id='company-mobile'>
                        <ul >
                            <li><a href='#'>About us</a> </li>
                            <li><a href='#'>Talent program</a></li>
                            <li><a href='#'>Career</a></li>
                            <li><a href='#'>Contact us</a></li>
                            <li><a href='#'>Privacy Policy</a></li>
                        </ul>
                    
                   
                        <ul id="ul-mobile">                    
                            <li><a href='#'>Reviews</a></li>
                            <li><a href='#'>Direct Mail Academy</a></li>
                            <li><a href='#'>Success stories</a></li>
                            <li><a href='#'>Terms & conditions</a></li>
                        </ul>
                    </div>
                    <hr id="hr"/>
                    <h6 id="h6">© 2023 StarFeeds, Inc. All rights reserved.</h6>
                </div>                
        </footer>
    )
}