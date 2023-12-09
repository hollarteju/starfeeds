import React from 'react';

export default function Questions(){

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
            {lists.map(list=>(
                <div className='contents-container'>
                <div className='layer'>
                    <div className='txt-contents'>
                        <span>{list.span}</span>
                        
                        <h6>{list.h6}</h6>
                    </div>
                        <i className='bx bx-chevron-right'></i>
                </div>
                </div>
            ))}
           
        </section>
    )
}