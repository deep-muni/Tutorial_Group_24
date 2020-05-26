import React, { Component } from 'react';

class ResultBox extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="navbar media bg-white rounded form-group pt-2" style={{ margin: '-15px 0 0 0' }}>
                <div className="">{this.props.text}</div>
            </div>
        );
    }
}

export default ResultBox;
