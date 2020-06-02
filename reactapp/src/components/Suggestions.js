import React, {Component} from "react";
import './Suggestions.css';

class Suggestions extends Component{

    render() {
        return (
            <p className="name" onClick={this.props.onClick}>{this.props.title}</p>
        );
    }
}

export default Suggestions;
