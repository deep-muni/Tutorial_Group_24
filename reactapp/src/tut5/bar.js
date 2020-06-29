import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import './bar.css';

class Bar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            active_1: false,
            active_2: false,
            active_3: false,
            active_4: false
        }

        this.selectButton = this.selectButton.bind(this);

    }

    selectButton(e) {
        let redirect = '';

        if(e.target.id === 'active_1') {
            this.setState({
                active_1: true,
                active_2: false,
                active_3: false,
                active_4: false
            });
            redirect = '/showUser';
        }else if (e.target.id === 'active_2') {
            this.setState({
                active_1: false,
                active_2: true,
                active_3: false,
                active_4: false
            });
            redirect = '/showSpecUser';
        }else if (e.target.id === 'active_3') {
            this.setState({
                active_1: false,
                active_2: false,
                active_3: true,
                active_4: false
            });
            redirect = '/addUser';
        }else if (e.target.id === 'active_4') {
            this.setState({
                active_1: false,
                active_2: false,
                active_3: false,
                active_4: true
            });
            redirect = '/updateUser';
        }
        this.props.history.push(redirect);
    }

    render() {
        return (
            <div className="buttonArea">
                <button className={this.state.active_1 ? 'buttonBar active' : 'buttonBar'} id="active_1"
                        onClick={this.selectButton}>Show Users</button>
                <button className={this.state.active_2 ? 'buttonBar active' : 'buttonBar'} id="active_2"
                        onClick={this.selectButton}>Specific User</button>
                <button className={this.state.active_3 ? 'buttonBar active' : 'buttonBar'} id="active_3"
                        onClick={this.selectButton}>Insert User</button>
                <button className={this.state.active_4 ? 'buttonBar active' : 'buttonBar'} id="active_4"
                        onClick={this.selectButton}>Modify User</button>
            </div>
        );
    }
}

export default withRouter(Bar);
