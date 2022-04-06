import React from 'react'
import "./FeedCard.css";


function FeedCard() {
    return (
        <>
            <div>
                <div class="card-group">
                    <div class="card">
                        <img src="..." class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Ronald Oliver</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                    </div>
                    <div class="card">
                        <img src="..." class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">ABP News</h5>
                                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            </div>
                    </div>
                </div>



            </div>
        </>
    )
}

export default FeedCard;