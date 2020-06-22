import React, {Component} from "react";
import Axios from "axios";
import './table.css';

class ShowSpecUser extends Component {

    constructor(props) {
        super(props);

        this.state = {
            users: {}
        }

        this.getUser = this.getUser.bind(this);
    }

    async getUser(){
        const url = "http://localhost:5000/user/specUser/" + document.getElementById("banner").value;
        const data = await Axios.get(url);
        this.setState({
            users: data.data
        })
    }

    show(){
        return (
            <table>
                <thead>
                    <tr>
                        <th>Banner ID</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{this.state.users.bid}</td>
                        <td>{this.state.users.name}</td>
                        <td>{this.state.users.email}</td>
                    </tr>
                </tbody>
            </table>
        );
    }

    render() {
        return (
            <div>
                <div className="gap">
                    <input type="text" id="banner" placeholder="Enter Banner ID"/>
                    <button className="searchUser" onClick={this.getUser}>Submit</button>
                </div>
                {this.show()}
            </div>
        );
    }
}

export default ShowSpecUser;

