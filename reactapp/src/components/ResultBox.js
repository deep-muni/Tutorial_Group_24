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
            <div onClick={()=>this.props.clickHandler(this.props.text,this.props.image)} >
                <label 
                onMouseEnter={this.toggleHover.bind(this)} onMouseLeave={this.toggleHover.bind(this)} style={linkStyle} >{this.props.text}</label>
                        

            </div>

        );
    }
}

export default ResultBox