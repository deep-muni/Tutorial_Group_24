import React, { Component } from 'react';

class ResultBox extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.onClickDrpDwnItem = this.onClickDrpDwnItem.bind(this);
    }

    onClickDrpDwnItem(s) {
        this.props.onSelectDrpDwnItem(s);
    }

    render() {
        return (
            <div onClick={this.onClickDrpDwnItem.bind(this, this.props)} className="navbar media bg-white rounded form-group pt-2" style={{ margin: '-15px 0 0 0' }}>
                <label className="input-lg media-body" >  {this.props.text}</label>
            </div>

        );
    }
}

export default ResultBox;