import React from 'react';

export default function About(){
    return(
        <section id='about'>
            <div className='about-container'>
                <h3>ABOUT US</h3>
                <h1>
                    StarFeeds is here to <span> bridge</span> the gap between your 
                    aspirations and your technical capabilities.
                </h1>
                <span>
                    StarFeeds is a cutting-edge company that 
                    provides a defined technical capability 
                    and other support to solopreneurs and/or 
                    entrepreneurial spirited team who lack funds 
                    to hire professional and competent technical 
                    workforce to build their products but they 
                    have fine, buildable, and scalable business 
                    ideas.We build ideas into category innovations
                </span>
            </div>
            <div className='grid-container'>
                <div id="story">
                    <div className='story-icon'></div>
                    <h4>Our Story</h4>
                    <p>
                        We are passionate about investment, and our 
                        investment philosophy is in harnessing the power 
                        of talents to transform ideas into reality.
                    </p>
                </div>
                <div id='mission'>
                    <div className='mission-icon'></div>
                    <h4>Our Mission</h4>
                    <p>
                        Providing technical capabilities to problem-solvers
                        to build innovative, futuristic, 
                        and sustainable solutions while we empower tech talents.
                    </p>
                </div>
                <div id='vision'>
                    <div className='vision-icon'></div>
                    <h4>Our Vision</h4>
                    <p>
                    A world where every great idea meets possibilities to come 
                    live and becomes a category innovation.
                    </p>
                </div>
            </div>
        </section>
    )
}
