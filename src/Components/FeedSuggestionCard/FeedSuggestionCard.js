import React from 'react'
import "./FeedSuggestionCard.css";


function FeedSuggestionCard() {
    return (
        <div>
            <div className='suggestion-wrapper'>
            <h3>Suggestion</h3>
            <ul className='suggestion-list'>
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

export default FeedSuggestionCard;