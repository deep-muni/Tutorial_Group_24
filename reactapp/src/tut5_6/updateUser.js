import React, { Component } from "react";
import Axios from "axios";

class UpdateUser extends Component {

    constructor(props) {
        super(props);

        this.state = {
            msg: ''
        }

        this.updateUser = this.updateUser.bind(this);

    }

    async updateUser() {

        if (document.getElementById("banner").value === "" ||
            document.getElementById("name").value === "" ||
            document.getElementById("email").value === "") {
            alert("Please fill the fields");
            return;
        }

        let res = '';

        const url = "https://tutorial-group-24.herokuapp.com/user/modifyUser/" + document.getElementById("banner").value;
        await Axios.put(url, {
            bid: document.getElementById("banner").value,
            name: document.getElementById("name").value,
            email: document.getElementById("email").value
        })
            .then(function (response) {
                res = response;
            })

        this.setState({
            msg: res.data.message
        })

        document.getElementById("banner").value = "";
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
    }

    render() {
        return (
            <div>
                <input type="text" id="banner" placeholder="Enter Banner ID" />
                <input type="text" id="name" placeholder="Enter Name" />
                <input type="text" id="email" placeholder="Enter Email" />
                <button className="updateUser" onClick={this.updateUser}>Update</button>
                <p className="msg">{this.state.msg}</p>
            </div>
        );
    }
}

export default UpdateUser;
