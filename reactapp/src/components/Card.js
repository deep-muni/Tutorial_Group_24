import React from "react";
import './Card.css'
import Axios from "axios";

export class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: []
        }
        this.onClickCardView = this.onClickCardView.bind(this);
    }

    onClickCardView() {
        console.log(this.props.show_id);
        this.dataRequest("https://api-tutorial4.herokuapp.com/movies?show_id="+ this.props.show_id);
    }

    async dataRequest(url) {
        const {data: movie} = await Axios.get(url);
        this.setState({movie});
    }
    
    render() {
        return (
            <p className="movie" onClick={this.onClickCardView}>{this.props.title}</p>
        );
    }
}

export default Card;
