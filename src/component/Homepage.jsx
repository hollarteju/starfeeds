import React from 'react';
import About from './about';

export default function HomePage(){
    return(
        <>
            <section id='header-container'>
                <div className='header-layer'>
                    <div id='header'>
                        <h1>Discover</h1>
                        <p> Your Next Adventure</p>
                    </div>
                    <div id='header-body'>
                        <span>
                        Whether you are a startup or a visionary entrepreneur
                        looking for the perfect destination to bring your product's
                        idea to life, StarFeeds is here to help you build your idea
                        into MVP and scalable products.
                        </span>
                    </div>
                    
                    <button>Sign up now</button>
                
                </div>
                <div className='bg-img'>
                    <div id='top-img'>
                        <div className='img'></div>
                    </div>
                    <div id='buttom-img'>
                        <div className='img'></div>
                    </div>
                
                </div>
            </section>
            <About/>
        </>
    )
}
