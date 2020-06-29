import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import Movie from "./Movie";
import AddUser from "../tut5_6/addUser";
import ShowUser from "../tut5_6/showUser";
import UpdateUser from "../tut5_6/updateUser";
import ShowSpecUser from "../tut5_6/showSpecUser";

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/movie' component={Movie}/>
                <Route exact path='/addUser' component={AddUser}/>
                <Route exact path='/showUser' component={ShowUser}/>
                <Route exact path='/updateUser' component={UpdateUser}/>
                <Route exact path='/showSpecUser' component={ShowSpecUser}/>
            </Switch>
        );
    }
}

export default Routes;
