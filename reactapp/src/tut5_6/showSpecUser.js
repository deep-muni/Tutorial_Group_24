import React, { Component } from "react";
import Axios from "axios";
import './table.css';

class ShowSpecUser extends Component {

    constructor(props) {
        super(props);

        this.state = {
            users: undefined
        }
        this.getUser = this.getUser.bind(this);
    }

    async getUser() {

        if (document.getElementById("banner").value === "") {
            alert("Please fill the field");
            return;
        }

        const url = "http://localhost:5000/user/specUser/" + document.getElementById("banner").value;
        const response = await Axios.get(url);
        if(response.data.Status === "Success"){
            this.setState({
                users: response.data.data[0]
            })
        }  
    }

    show() {
        if (this.state.users === undefined) {
            return null;
        } else {
            return (
                <tr>
                    <td>{this.state.users.bid}</td>
                    <td>{this.state.users.name}</td>
                    <td>{this.state.users.email}</td>
                </tr>
            );
        }
    }

    render() {
        return (
            <div>
                <div className="gap">
                    <input type="text" id="banner" placeholder="Enter Banner ID" />
                    <button className="searchUser" onClick={this.getUser}>Search</button>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Banner ID</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                        {this.show()}
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ShowSpecUser;

