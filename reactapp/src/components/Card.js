import React from "react";
import './Card.css'
import {withRouter} from "react-router-dom";

export class Card extends React.Component {

    render() {
        return (
            <p className="movie" onClick={() => this.props.history.push('/movie', {'id': this.props.show_id})}>
                {this.props.title}
            </p>
        );
    }
}

export default withRouter(Card);
