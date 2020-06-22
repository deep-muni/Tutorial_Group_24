import React, {Component} from "react";
import Axios, {AxiosInstance as axios} from "axios";

class AddUser extends Component {

    constructor(props) {
        super(props);

        this.state = {
            msg: ''
        }

        this.addUser = this.addUser.bind(this);

    }

    async addUser(){

        let res;

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
                <button onClick={this.addUser}>Submit</button>
                <p>{this.state.msg}</p>
            </div>
        );
    }
}

export default AddUser;

