import React, {Component} from "react";
import Axios from "axios";
import './table.css';

class AddUser extends Component {

    constructor(props) {
        super(props);

        this.state = {
            msg: ''
        }

        this.addUser = this.addUser.bind(this);

    }

    async addUser(){

        if(document.getElementById("banner").value === "" ||
            document.getElementById("name").value === "" ||
            document.getElementById("email").value === ""){
            alert("Please fill the fields");
            return;
        }

        let res = '';

        const url = "http://localhost:5000/user/addUser/";
        await Axios.post(url, {
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

    }

    render() {
        return (
            <div>
                <input type="text" id="banner" placeholder="Enter Banner ID"/>
                <input type="text" id="name" placeholder="Enter Name"/>
                <input type="text" id="email" placeholder="Enter Email"/>
                <button className="addUser" onClick={this.addUser}>Add</button>
                <p className="msg">{this.state.msg}</p>
            </div>
        );
    }
}

export default AddUser;

