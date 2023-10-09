import React from "react";

export const Feeds=()=>{
    return(
    <div className="feeds-container">
        <div className="users-feeds-container">
            <div id="search-input">
                <i class="bc bx-search bx-rotate-90"></i>
                <input type="text" placeholder="Search Record"/>
            </div>
            <div className="feeds-users-text-field-container">
                <div id="users-text-field">
                    <div className="profile-pics">
                        <img src="StarFeeds.png" alt="" />
                    </div>
                    <input type="text" placeholder="What would you be sharing today" />
                </div>
                <button>Share</button>
            </div>
            <div className="comments-container">
                <div className="profile-pics">
                    <img src="StarFeeds.png" alt="" />
                </div>
                <div className="comments-details">
                    <p>Admin</p>
                    <span>Bird is a cutting edge jksds dslndskds skjbds \
                        skskjbdsksdkjdsbds dskbdshds sjhdshjsd shjs sjbsd dsjhs
                        hsahj s sjhdsjdsjsd sdkbds sdds dssaskasbsa sak
                        sahjasjas askbsa sakbas saksa saas sa as 
                    </span>
                    <div className="comments-media">
                        <img src="StarFeeds.png" alt="" />
                    </div>
                    <div id="comment-icons">
                        <i>Posted 1hr ago</i>
                        <i><span> 200 Comments   </span><span class="bx bxs-message-rounded-dots"></span></i>
                        <i><span> 200 Likes   </span><span class="bx bxs-like"></span></i>
                    </div>
                </div>
            </div>
        </div>
        <div className="featured-products-container d-lg-block d-none">
            <p>Featured Products</p>
            <div className="features-product-image-container">
                <div className="features-product-image-layer">
                    <div className="features-product-image">
                        <i class="bx bxs-heart"></i>
                        <div className="profile-pics">
                            <img src="image.png" alt="" />
                        </div>
                    </div>
                    <div className="product-details">
                        <p><span>Name:</span>   jsdkdkd jkjdjks ks</p>
                        <p><span>Sector:</span>   jsdkdkd jkjdjkskxb jbsjhd hsdhs kjskd skjbds sk</p>
                        <p><span>Platforms:</span>   jsdkdkd jkjdjkskxb jbsjhd hsdhs kjskd skjbds sk</p>
                    </div>
                    <i class="bx bxs-like"></i>
                    <i class="bx bxs-dislike"></i>
                </div>
                <div className="features-product-image-layer">
                    <div className="features-product-image">
                        <div className="profile-pics">
                            <img src="image.png" alt="" />
                        </div>
                    </div>
                    <div className="product-details">
                        <p><span>Name:</span>   jsdkdkd jkjdjks ks</p>
                        <p><span>Sector:</span>   jsdkdkd jkjdjkskxb jbsjhd hsdhs kjskd skjbds sk</p>
                        <p><span>Platforms:</span>   jsdkdkd jkjdjkskxb jbsjhd hsdhs kjskd skjbds sk</p>
                    </div> 
                </div>
                <div className="features-product-image-layer">
                    <div className="features-product-image">
                        <div className="profile-pics">
                            <img src="image.png" alt="" />
                        </div>
                    </div>
                    <div className="product-details">
                        <p><span>Name:</span>   jsdkdkd jkjdjks ks</p>
                        <p><span>Sector:</span>   jsdkdkd jkjdjkskxb jbsjhd hsdhs kjskd skjbds sk</p>
                        <p><span>Platforms:</span>   jsdkdkd jkjdjkskxb jbsjhd hsdhs kjskd skjbds sk</p>
                    </div> 
                </div>
                <div className="features-product-image-layer">
                    <div className="features-product-image">
                        <div className="profile-pics">
                            <img src="image.png" alt="" />
                        </div>
                    </div>
                    <div className="product-details">
                        <p><span>Name:</span>   jsdkdkd jkjdjks ks</p>
                        <p><span>Sector:</span>   jsdkdkd jkjdjkskxb jbsjhd hsdhs kjskd skjbds sk</p>
                        <p><span>Platforms:</span>   jsdkdkd jkjdjkskxb jbsjhd hsdhs kjskd skjbds sk</p>
                    </div> 
                </div>
                <div className="features-product-image-layer">
                    <div className="features-product-image">
                        <div className="profile-pics">
                            <img src="image.png" alt="" />
                        </div>
                    </div>
                    <div className="product-details">
                        <p><span>Name:</span>   jsdkdkd jkjdjks ks</p>
                        <p><span>Sector:</span>   jsdkdkd jkjdjkskxb jbsjhd hsdhs kjskd skjbds sk</p>
                        <p><span>Platforms:</span>   jsdkdkd jkjdjkskxb jbsjhd hsdhs kjskd skjbds sk</p>
                    </div> 
                </div>
                <div className="features-product-image-layer">
                    <div className="features-product-image">
                        <div className="profile-pics">
                            <img src="image.png" alt="" />
                        </div>
                    </div>
                    <div className="product-details">
                        <p><span>Name:</span>   jsdkdkd jkjdjks ks</p>
                        <p><span>Sector:</span>   jsdkdkd jkjdjkskxb jbsjhd hsdhs kjskd skjbds sk</p>
                        <p><span>Platforms:</span>   jsdkdkd jkjdjkskxb jbsjhd hsdhs kjskd skjbds sk</p>
                    </div> 
                </div>
            </div>
            <p class="mt-5 pt-5">Trending By Vote</p>
            <div className="features-product-image-container"> 
                <div className="features-product-image-layer">
                    <div className="features-product-image">
                        <div className="profile-pics">
                            <img src="image.png" alt="" />
                        </div>
                    </div>
                    <div className="product-details">
                        <p><span>Name:</span>   jsdkdkd jkjdjks ks</p>
                        <p><span>Sector:</span>   jsdkdkd jkjdjkskxb jbsjhd hsdhs kjskd skjbds sk</p>
                        <p><span>Platforms:</span>   jsdkdkd jkjdjkskxb jbsjhd hsdhs kjskd skjbds sk</p>
                    </div> 
                </div>
                <div className="features-product-image-layer">
                    <div className="features-product-image">
                        <div className="profile-pics">
                            <img src="image.png" alt="" />
                        </div>
                    </div>
                    <div className="product-details">
                        <p><span>Name:</span>   jsdkdkd jkjdjks ks</p>
                        <p><span>Sector:</span>   jsdkdkd jkjdjkskxb jbsjhd hsdhs kjskd skjbds sk</p>
                        <p><span>Platforms:</span>   jsdkdkd jkjdjkskxb jbsjhd hsdhs kjskd skjbds sk</p>
                    </div> 
                </div>
                <div className="features-product-image-layer">
                    <div className="features-product-image">
                        <div className="profile-pics">
                            <img src="image.png" alt="" />
                        </div>
                    </div>
                    <div className="product-details">
                        <p><span>Name:</span>   jsdkdkd jkjdjks ks</p>
                        <p><span>Sector:</span>   jsdkdkd jkjdjkskxb jbsjhd hsdhs kjskd skjbds sk</p>
                        <p><span>Platforms:</span>   jsdkdkd jkjdjkskxb jbsjhd hsdhs kjskd skjbds sk</p>
                    </div> 
                </div>
            </div>
            
        </div>
    </div>
    )
};