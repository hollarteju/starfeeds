import React from "react";
import { Feeds } from "../sections/feeds";
import { useState } from "react";



function HomePageHeader(){
    const [Toggle, setToggle]= useState("feeds")
    const PageToggle=(header)=>{
    setToggle(header)
}
    return(
    <div className="home-header-container d-block"> 
        <div className="home-page-header-container">
            <img src="Frame.png" alt="" />
            <div className="home-page-header-layer">
                <div className="profile-pics">
                    <img src="StarFeeds.png" alt="" />
                </div>
                <p>Map Styles</p>
              
            </div>
        </div>
        <div className="home-page-header-toggles">
            <span onClick={()=>PageToggle("feeds")}  className={Toggle==="feeds"?"border-bottom":""} >Feed</span>
            <span onClick={()=>PageToggle("int")}  className={Toggle==="int"?"border-bottom":""}>Integrations</span>
            <span onClick={()=>PageToggle("pool")}  className={Toggle==="pool"?"border-bottom":""} >Pool</span>
        </div>
        <div className="home-page-layer">
            <section className="stages-container" >
               <Feeds/>
            </section>
           
        </div>
    </div>
    )
}

export default HomePageHeader;