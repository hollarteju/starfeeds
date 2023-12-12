import React from 'react';
import {Swiper,SwiperSlide} from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import {Pagination} from "swiper/modules";
// import "swiper/css/pagination"

export default function Testimonials(){

    const lists = [
        {
            "image" : "/images/img-1.png",
            "name" : "David Deo",
            "s-handle":"@davis12345",
            "icon":"",
            "body" : "The personalized feedback was invaluable, guiding me in my learning journey. I appreciate the user-friendly interface and the supportive community, making my experience truly enriching",
            "bg":"#FFF"
            
        },
        {
            "image" : "/images/img-1.png",
            "name":"Mary Deo",
            "s-handle":"@marydidi222",
            "icon":"",
            "body" : " The personalized feedback was invaluable, guiding me in my learning journey. I appreciate the user-friendly interface and the supportive community, making my experience truly enriching",
            "bg":"#FFF"
        },
        {
            "image" : "/images/img-2.png",
            "name" : "Godwin Ran",
            "s-handle":"@goddy34_",
            "icon":"",
            "body" : "The personalized feedback was invaluable, guiding me in my learning journey. I appreciate the user-friendly interface and the supportive community, making my experience truly enriching",
            "bg":"#FFF"
        },
        {
            "image" : "/images/img-3.png",
            "name" : "Vivian Hut",
            "s-handle":"@vivianert",
            "icon":"",
            "body" : "The personalized feedback was invaluable, guiding me in my learning journey. I appreciate the user-friendly interface and the supportive community, making my experience truly enriching",
            "bg":"#FFF"
        }
        
    ]



    const swiperParams = {
        spaceBetween:30,
        slidesPerView:3.5,
        modules: [Pagination],

        breakpoints: {

            1045:{
              slidesPerView:3.2
            },

            768:{
                slidesPerView:1.8
            },

            889:{
                slidesPerView:3.2,
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
        <section id='offer' className="testimonials">
            <div className='offer-header' id='testimonials'>
                <h2 id='h2'>Trusted by thousands of Talents and Innovators all over the world</h2>
                <h6 id='h6'> From Code to Launch: Read inspiring stories of talents who found their path through StarFeeds, Building the Future with Startups that thrived with StarFeeds talent – your success story starts here.</h6>
            </div>
            <div id='swiper'>
                <Swiper 
                    id='swiper-container'
                    {...swiperParams}
                    pagination={{clickable:true}}
                    >
                        {lists.map(list=>(
                                <SwiperSlide>
                            
                                <div className='slider-container' id='test-slider' style={{backgroundColor:list.bg}}>
                                    <div className='slide-layer' id="test-layer">
                                        <div id='info'>
                                            <div id='name'>
                                                <img width="64px" height="64px" src={process.env.PUBLIC_URL + list.image} alt="dddf" />
                                                <div>
                                                    <h6>{list.name}</h6>
                                                    <p>{list['s-handle']}</p>
                                                </div>
                                            </div>
                                            <div id='icon'>
                                                <i className='bx bxl-twitter'></i>
                                            </div>
                                        </div>
                                        <div id='body'>
                                            <span>{list.body}</span>
                                        </div>
                                       
                                    </div>
                                    
                                </div>
                            </SwiperSlide>
                                ))}
                </Swiper>
            </div>
            
            <button>JOIN THE COMMUNITY</button>
        </section>
    )
}