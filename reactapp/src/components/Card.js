import React from "react";
import './Card.css'

export class Card extends React.Component{

    render() {
        return (
            <div className="movie">
                <img className="poster" src={this.props.image} alt={""}/>
                <div className="title">{this.props.title_key}</div>
            </div>
        );
    }
}

export default Card;
