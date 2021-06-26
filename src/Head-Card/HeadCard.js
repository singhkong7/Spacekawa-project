import React from 'react'
import "./Head-Card.scss";
function HeadCard({id,Name,category,image,address}) {
    return (
        <div className="head-card">
            <img src={image} alt=" " />
            <div className="side">
                <h4>{Name}</h4>
                <span>{address}</span>
                <p>{category}</p>
            </div>
        </div>
    )
}

export default HeadCard;
