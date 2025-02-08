import React from "react";

import "./components.css"

export default function Card(props) {

    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }
    
    return (
        <div className = "card">
         {badgeText && <div className="cardBadge">{badgeText}</div>}
            <img src={`./images/${props.item.coverImg}`}  className = "cardProfile" />  
            <div>
                <div className = "cardStats">
                <img src="./images/Star-icon.png" className = "cardIcon" alt="Star Icon" />
                <span>{props.item.stats.rating}</span>
                <span className = "gray">({props.item.stats.reviewCount}) • </span>
                <span className = "gray">{props.item.location}</span>
                </div>
                <h2 className="card-title">{props.item.title}</h2>
                <p className="card-price"><span className="bold">From ${props.item.price}</span>/ person</p>
            </div>
        </div>
    )
}