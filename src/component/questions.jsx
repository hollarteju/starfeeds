import React from 'react';
import { useState } from 'react';

export default function Questions(){
    const [Active, setActive]= useState(null)

   const dropDown=(x)=>{
        setActive(x)
    }
    const lists = [
        {
            "span":"How do i join the community?",
            "h6":"Lorem ipsum dolor sit amet consectetur. Vel sit sed lacinia et. Hendrerit et odio aenean fermentum faucibus faucibus."
        },
        {
            "span":"How do i join the community?",
            "h6":"Lorem ipsum dolor sit amet consectetur. Vel sit sed lacinia et. Hendrerit et odio aenean fermentum faucibus faucibus."
        },
        {
            "span":"How do i join the community?",
            "h6":"Lorem ipsum dolor sit amet consectetur. Vel sit sed lacinia et. Hendrerit et odio aenean fermentum faucibus faucibus."
        },
        {
            "span":"How do i join the community?",
            "h6":"Lorem ipsum dolor sit amet consectetur. Vel sit sed lacinia et. Hendrerit et odio aenean fermentum faucibus faucibus."
        },
    ]
    return(
        <section id='questions'>
            <div className='question-header'>
                <h4>FREQUENT ASKED QUESTIONS</h4>
                <h1> Connecting visionaries with the brightest minds in tech.</h1>
            </div>
            {lists.map((list, index)=>(
                <div className='contents-container' onClick={()=>dropDown(index)}>
                <div className='layer'>
                    <div className='txt-contents'>
                        <span>{list.span}</span>
                        
                        <h6 className={Active !== index?"d-none":""}>{list.h6}</h6>
                    </div>
                        <i className={Active !== index ?'bx bx-chevron-right':'bx bx-chevron-down'}></i>
                </div>
                </div>
            ))}
           
        </section>
    )
}