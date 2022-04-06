import React from 'react'
import "./FeedContactCard.css";


function FeedContactCard() {
    return (
        <div>
            <div className='contact-wrapper'>
            <h3>Contacts</h3>
            <ul className='contact-list'>
                <li>
                    <img src='..' class="img-fluid rounded-circle w-50 mb-3" alt="" />
                    <span>Henry Purcell</span>
                </li>
                <li>
                    <img src='..' class="img-fluid rounded-circle w-50 mb-3" alt="" />
                    <span>Charles Darwin</span>
                </li>
                <li>
                    <img src='..' class="img-fluid rounded-circle w-50 mb-3" alt="" />
                    <span>Charles Darwin</span>
                </li>
                <li>
                    <img src='..' class="img-fluid rounded-circle w-50 mb-3" alt="" />
                    <span>Charles Darwin</span>
                </li>
                <li>
                    <img src='..' class="img-fluid rounded-circle w-50 mb-3" alt="" />
                    <span>Charles Darwin</span>
                </li>
                <li>
                   <img src='..' class="img-fluid rounded-circle w-50 mb-3" alt="" />
                   <span>Charles Darwin</span>
                </li>
                
            </ul>
            </div>
        </div>
    )
}

export default FeedContactCard;