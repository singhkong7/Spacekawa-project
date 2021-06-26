import React from "react";
import HeadCard from "../Head-Card/HeadCard";
import details from "../Details/details"
import './card.scss';
class Card extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
          details:details
        };
        this.handleClick = this.handleClick.bind(this);
      }
      handleClick=()=>
    {
        details.filter(id=>id===id%2?id=2:id=1).map(({id, Name,category,image,address})=>
        (
            <HeadCard key={id} Name={Name} category={category} image={image} address={address} />
        ))
    
    }
     
    render() {
    
    return (
        <div onClick={this.handleClick}
            className='card'>
                <p>{this.props.gender}</p>
                <h4>{this.props.name}</h4>
                <span>{this.props.email}</span>
            </div>


    )
    }

};
export default Card