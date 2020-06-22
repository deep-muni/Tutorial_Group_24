import React, {Component} from "react";
import Axios from "axios";
import './table.css';

class ShowUser extends Component {

    constructor(props) {
        super(props);

        this.state = {
            users: []
        }
    }

    async componentDidMount(){
        const url = "http://localhost:5000/user";
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
                {
                    this.state.users.map((tup, index) => {
                        return(
                          <tr key={index}>
                              <td>{tup.bid}</td>
                              <td>{tup.name}</td>
                              <td>{tup.email}</td>
                          </tr>
                        );
                    })
                }
                </tbody>
            </table>
        );
    }

    render() {
        return (
            <div>
                {this.show()}
            </div>
        );
    }
}

export default ShowUser;
