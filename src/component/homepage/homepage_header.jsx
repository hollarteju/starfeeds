import React from "react";
import { Feeds } from "../sections/feeds";



function HomePageHeader(){
    return(
    <div>
        <div className="home-page-header-container">
            <div className="home-page-header-layer">
                <div className="profile-pics">
                    <img src="StarFeeds.png" alt="" />
                </div>
                <p>Map Styles</p>
              
            </div>
        </div>
        <div className="home-page-header-toggles">
            <span>Feed</span>
            <span>Integrations</span>
            <span>Pool</span>
        </div>
        <div className="home-page-layer">
            <section className="stages-container">
               <Feeds/>
            </section>
            <div>
                poland
            </div>
        </div>
    </div>
    )
}

export default HomePageHeader;