import React from 'react';
import {Swiper,SwiperSlide} from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";

export default function Talents(){
    const left_lists = [
        {
            "h2":"Step One",
            "h3":"Join the innovative team",
            "p":"Join our pool of brilliant tech talents who leverage our company to get exclusive access to the best opportunities to build exciting and category king products from the ideation stage. Create your StarFeeds' profile application",
            "span":"here."

        },

        {
            "h2":"Step Three",
            "h3":"Join the pool",
            "p":"Successful candidates will be onboarded and become members of our talent pool and development network. You then start to get consideration for our amazing from startups and team spirited entrepreneurs looking to build their ideas into MVP and scalable products. ",
            

        },

    ]

    const right_lists = [
        {
            "h2":"Step Two",
            "h3":"Skills Showcasing",
            "span":"Sign-up ",
            "p":"Meet our vetting team to demonstrate your communication and technical skills and other related assessment needs.",
            

        },

        {
            "h2":"Step Four",
            "h3":"Elevate your career and finances ",
            "p":"Find your dream ideas to build into products and take your career and finances into new heights. ",
            

        },

    ]

    const mobile = [
        {
            "h2":"Step One",
            "h3":"Join the innovative team",
            "p":"Join our pool of brilliant tech talents who leverage our company to get exclusive access to the best opportunities to build exciting and category king products from the ideation stage. Create your StarFeeds' profile application",
            "span":"here."

        },

        {
            "h2":"Step Two",
            "h3":"Skills Showcasing",
            "p":"Meet our vetting team to demonstrate your communication and technical skills and other related assessment needs.",
            

        },

        {
            "h2":"Step Three",
            "h3":"Join the pool",
            "p":"Successful candidates will be onboarded and become members of our talent pool and development network. You then start to get consideration for our amazing from startups and team spirited entrepreneurs looking to build their ideas into MVP and scalable products. ",
            

        },

        {
            "h2":"Step Four",
            "h3":"Elevate your career and finances ",
            "p":"Find your dream ideas to build into products and take your career and finances into new heights. ",
            

        },
    ]

    const swiperParams = {
        spaceBetween:30,
        slidesPerView:1
        
       
    }
    return(
        <section id='works-container'>
            <div className='works-header '>
                <h4>HOW IT WORKS FOR TALENTS</h4>
                <h1>Are You a Tech Talent? Hone your <span>skills</span> without constraints with StarFeeds</h1>
            </div>
            <div className='work-layer'>
                <div className="layer-left" id='layer-left'>
                    {left_lists.map(list=>(
                    <div id='layer-content'>
                        <div className="header">
                            <h2>{list.h2}</h2>
                            <h3>{list.h3}</h3>
                        </div>
                        <div className="content">
                            <i className='bx bxs-quote-alt-left'></i>
                            <p>{list.p}  <a href='#'>{list.span}</a></p>
                        </div>
                    </div>
                    ))}
                
                </div>
                <div className="layer-right" id='layer-right'>
                {right_lists.map(list=>(
                    <div id='layer-content'>
                            <div className="header">
                                <h2>{list.h2}</h2>
                                <h3>{list.h3}</h3>
                            </div>
                        <div className="content">
                            <i className='bx bxs-quote-alt-left'></i>
                            <p>{list.p} </p>
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
                                    <p> {list.p}  <a href='#'>{list.span}</a></p>
                                </div>
                            </div>
                        </SwiperSlide>
                                    ))}
                    </Swiper>
            </div>
        </section>
    )
}