import React from "react";
import './Card.css'

export class Card extends React.Component {
    constructor(props) {
        super(props);
        this.onClickCardView = this.onClickCardView.bind(this);
    }

    onClickCardView() {
        fetch('https://jsonplaceholder.typicode.com/todos/3')
            .then(response => response.json())
            .then(json => console.log(json))
    }
    
    render() {
        return (
            <div className="movie esclas" onClick={this.onClickCardView}>
                <div className="title">{this.props.title}</div>
            </div>
        );
    }
}

export default Card;
