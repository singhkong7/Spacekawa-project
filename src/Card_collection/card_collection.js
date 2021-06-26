import React, { Component } from 'react'
import "./card_collection.css";
import data from "../Data";
import Card from "../Click_Card/card";
class Collection extends Component 
{
    constructor(props) {
        super(props);
        this.state = {
          collections: data,
         
        };
      }
      
    render() {
        const {collections}=this.state;
       
        return (
            <div  className="collection">
                {
                    collections.map(({id, ...otherCollectionProps})=>
                    (
                        <Card key={id} {...otherCollectionProps} />
                    ))
                }
            </div>
        )
    }
}
export default Collection;
