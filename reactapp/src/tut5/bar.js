import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import './bar.css';

class Bar extends Component {
    render() {
        return (
            <div className="buttonArea">
                <button className="buttonBar" onClick={() => this.props.history.push('/showUsers')}>Show Users</button>
                <button className="buttonBar" onClick={() => this.props.history.push('/showSpecUser')}>Specific User</button>
                <button className="buttonBar" onClick={() => this.props.history.push('/addUser')}>Add User</button>
                <button className="buttonBar">Modify User</button>
            </div>
        );
    }
}

export default withRouter(Bar);
