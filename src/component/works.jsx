import React from 'react';
import {Swiper,SwiperSlide} from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import Talents from './talents';

export default function Works(){
    const left_lists = [
        {
            "h2":"Step Two",
            "h3":"Let's get to know you",
            "p":"Visit your dashboard and update your profile.",
         

        },

        {
            "h2":"Step Four",
            "h3":"Review and interview sessions",
            "p":"We take pleasure to review your proposals and take the next big steps",
            

        },

        {
            "h2":"Step Six",
            "h3":"Collaborate and innovate",
            "p":"From concept to product. We will build something extraordinary with the best minds in the tech industry. StarFeeds is your one-stop launchpad for success.",
            

        },

    ]

    const right_lists = [
        {
            "h2":"Step One",
            "h3":"Connect with us",
            "span":"Sign-up ",
            "p":"to join our network of start-ups and business owners. Own and maintain innovator's account, and connect with us.",
            

        },

        {
            "h2":"Step Three",
            "h3":"Send us proposals",
            "p":"Have an idea to build? Send us your proposal, and let's get started. ",
            

        },

        {
            "h2":"Step Five",
            "h3":"Launch your startup idea",
            "p":"Turn your vision into reality by assembling a team of top-notch tech talents to build the product. ",
            

        },


    ]

   const mobile = [
        {
            "h2":"Step One",
            "h3":"Connect with us",
            "span":"Sign-up ",
            "p":"to join our network of start-ups and business owners. Own and maintain innovator's account, and connect with us.",
            

        },

        {
            "h2":"Step Two",
            "h3":"Let's get to know you",
            "p":"Visit your dashboard and update your profile.",
         

        },

        {
            "h2":"Step Three",
            "h3":"Send us proposals",
            "p":"Have an idea to build? Send us your proposal, and let's get started. ",
            

        },

        {
            "h2":"Step Four",
            "h3":"Review and interview sessions",
            "p":"We take pleasure to review your proposals and take the next big steps",
            

        },

        {
            "h2":"Step Five",
            "h3":"Launch your startup idea",
            "p":"Turn your vision into reality by assembling a team of top-notch tech talents to build the product. ",
            

        },

        {
            "h2":"Step Six",
            "h3":"Collaborate and innovate",
            "p":"From concept to product. We will build something extraordinary with the best minds in the tech industry. StarFeeds is your one-stop launchpad for success.",
            

        },

    ]

    const swiperParams = {
        spaceBetween:30,
        slidesPerView:1
        
       
    }
    return(
        
    <section id='works-container'>
        <div className='works-header'>
            <h4>HOW IT WORKS FOR INNOVATORS</h4>
            <h1>Do you have great ideas? StarFeeds is here to help you <span>actualize</span> your dreams</h1>
        </div>
        <div className='work-layer'>
            <div className="layer-left">
                {left_lists.map(list=>(
                <div id='layer-content'>
                    <div className="header">
                        <h2>{list.h2}</h2>
                        <h3>{list.h3}</h3>
                    </div>
                    <div className="content">
                        <i className='bx bxs-quote-alt-left'></i>
                        <p>{list.p}</p>
                    </div>
                </div>
                ))}
               
            </div>
            <div className="layer-right">
            {right_lists.map(list=>(
                    <div id='layer-content'>
                    <div className="header">
                        <h2>{list.h2}</h2>
                        <h3>{list.h3}</h3>
                    </div>
                    <div className="content">
                        <i className='bx bxs-quote-alt-left'></i>
                        <p> <a>{list.span}</a> {list.p}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>
        <div id='swiper-works'>
                <Swiper
                    {...swiperParams}
                    >
                        {mobile.map(list=>(
                    <SwiperSlide>
                            
                        <div id='layer-content'>
                            <div className="header">
                                <h2>{list.h2}</h2>
                                <h3>{list.h3}</h3>
                            </div>
                            <div className="content">
                                <i className='bx bxs-quote-alt-left'></i>
                                <p> <a>{list.span}</a> {list.p}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                                ))}
                </Swiper>
        </div>

            {/* how it works for innovators */}
        <Talents/>
       
    </section>
    )
}