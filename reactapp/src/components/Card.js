import React from "react";
import './Card.css'

export class Card extends React.Component{

    render() {
        return (
            <div className="movie">
                <div className="title">{this.props.title}</div>
            </div>
        );
    }
}

export default Card;
