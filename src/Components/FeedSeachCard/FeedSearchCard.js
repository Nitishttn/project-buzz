import React from 'react'
import "./FeedSearchCard.css";


function FeedSearchCard() {
    return (
        <div>
            <div class="card">
                <div class="card-body">
                    Photo/Video
                    <div class="search">
                        <input type="text" placeholder="Start a post..." name="search" />
                        <button type="submit"><i class="fa fa-search"></i></button>
                    </div>
                </div>
            </div>
            {/* <div class="search">
                <input type="text" placeholder="Start a post..." name="search" />
                <button type="submit"><i class="fa fa-search"></i></button>
            </div> */}
        </div>
    )
}

export default FeedSearchCard;