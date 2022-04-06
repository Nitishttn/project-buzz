import React from 'react'
import "./FeedProfileCard.css";
import profile_placeholder from '../../Images/profile-placeholder.png';


function FeedProfileCard() {
    return (
        <>
            <div>
                <div class="card">
                    <img src='../../Images/profile-placeholder.png' class="img-fluid rounded-circle w-50 mb-3" alt="" />
                    <div class="card-body">
                        <h5 class="card-title">Shekhar Agarwal</h5>
                        <p class="card-text">Newly Recruit at TTN</p>
                        <p className='profileviews-wrapper'>
                            <div className='profileviews'>
                                <span>
                                    234
                                </span>
                                <span>
                                  Profile Views
                                </span>

                            </div>
                            <div className='postviews'>
                                <span>
                                    10
                                </span>
                                <span>
                                  Post
                                </span>

                            </div>
                            </p>
                    </div>
                </div>
            </div>
       </>
    )
}

export default FeedProfileCard;