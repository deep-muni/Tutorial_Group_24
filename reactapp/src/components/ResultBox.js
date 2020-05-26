import React, { Component } from 'react';

class ResultBox extends Component {
    constructor(props) {
        super(props);
        this.state = {hover:false}
    }

    toggleHover() {
	    this.setState({hover: !this.state.hover})
    }

    render() {

        var linkStyle;
        if (this.state.hover) {
            linkStyle = {backgroundColor: '#d6d2d2',cursor: 'pointer'}
        } else {
            linkStyle = {backgroundColor: '#ffffff'}
        }
        return (
            <div onClick={()=>this.props.clickHandler(this.props.text,this.props.image)} className="navtbar media bg-white rounded form-group pt-2" style={{ margin: '-15px 0 0 0' }}>
                <label className="input-lg media-body"
                onMouseEnter={this.toggleHover.bind(this)} onMouseLeave={this.toggleHover.bind(this)} style={linkStyle}>{this.props.text}</label>
            </div>

        );
    }
}

export default ResultBox;