import React from 'react';
import {Swiper,SwiperSlide} from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
// import "swiper/css/pagination"

export default function Offer(){

    const lists = [
        {
            "image" : "/images/icon-1.png",
            "header" : "Self Improvement",
            "bg":"#CAFFF2",
            "body" : "We help you Identify  your strengths and weaknesses, so you can focus on improving specific areas of your expertise.",
            
        },
        {
            "image" : "/images/icon-2.png",
            "header":"Benchmarking",
            "bg":"#FFF5D6",
            "body" : " Compare Your  skills with industry standards and best practices. Know where you stand in comparison to others in the field."
        },
        {
            "image" : "/images/icon-3.png",
            "header" : "Portfolio Enhancement",
            "bg":"#FFE7EB",
            "body" : "Complete assessments successfully, add valuable certifications and badges to your portfolio."
        },
        {
            "image" : "/images/icon-4.png",
            "header" : "Career Advancement",
            "bg":"#D9F2F7",
            "body" : "Bolster your  resume and portfolio, make  them more appealing to potential employers or clients."
        },
        {
            "image" : "/images/icon-5.png",
            "header" : "Focused Learning",
            "bg":"#D4D8FE",
            "body" : " Highlight specific areas you may need improvement.  Targeted feedback to guide you in choosing relevant courses and learning resources to enhance your skills."
         },
         {
            "image" : "/images/icon-6.png",
            "header" : "Networking",
            "bg":"#C1F2FF",
            "body" : " Join communities and forums you can connect with peers, share experiences, and learn from others for valuable insights and collaborative opportunities."
         },
        
    ]



    const swiperParams = {
        spaceBetween:30,
        slidesPerView:3.5,
        simulateTouch: true,
        touchRatio: 0.2,

        pagination:{
            el: ".swiper-pag",
        },

        breakpoints: {

            1045:{
              slidesPerView:3.2
            },

            768:{
                slidesPerView:1.8
            },

            425:{
                slidesPerView:1
            },

            375:{
                slidesPerView:1
            },

            320:{
                slidesPerView:1,
                spaceBetween:15
            }
        }
        
       
    }

    return(
        <section id='offer'>
            <div className='offer-header'>
                <h6>WHAT WE OFFER</h6>
                <h2> Connecting visionaries with the brightest minds in tech.</h2>
            </div>
            <div id='swiper'>
                <Swiper 
                    id='swiper-container'
                    {...swiperParams}
                    >
                        {lists.map(list=>(
                                <SwiperSlide>
                            
                                <div className='slider-container' style={{backgroundColor:list.bg}}>
                                    <div className='slide-layer'>
                                        <img width="100px" height="100px" src={process.env.PUBLIC_URL + list.image} alt="dddf" />
                                        <h1>{list.header}</h1>
                                        <span>{list.body}</span>
                                    </div>
                                    
                                </div>
                            </SwiperSlide>
                                ))}
                </Swiper>
                <div className='swiper-pag'></div>
            </div>
        </section>
    )
}