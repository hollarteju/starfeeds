import React from "react";
import  {Feeds}  from "../sections/feeds";
import Pool from "../sections/pool";
import Integration from "../sections/integrations";
import { useState } from "react";



function HomePageHeader(){
    const [Toggle, setToggle]= useState("feeds")
    const PageToggle=(header)=>{
    setToggle(header)
}
    return(
    <div className="home-header-container"> 
        <div className="home-page-header-container">
            <img id="frame-img" src="Frame.png" alt="" />
            <div className="home-page-header-layer">
                <div className="profile-pics">
                    <img src="StarFeeds.png" alt="" />
                </div>
                <p>Map Styles</p>
              
            </div>
        </div>
        <div className="home-page-header-toggles">
            <span onClick={()=>PageToggle("feeds")}  className={Toggle==="feeds"?"border-bottom":"active-color"} >Feed</span>
            <span onClick={()=>PageToggle("int")}  className={Toggle==="int"?"border-bottom":"active-color"}>Integrations</span>
            <span onClick={()=>PageToggle("pool")}  className={Toggle==="pool"?"border-bottom":"active-color"} >Pool</span>
        </div>
        <div className="home-page-layer">
            <section className={Toggle==="feeds"?"stages-container":"none"} >
               <Feeds/>
            </section>
           <section className={Toggle==="int"?"stages-container":"none"}>
                <Integration/>
           </section>
        </div>
    </div>
    )
}

export default HomePageHeader;