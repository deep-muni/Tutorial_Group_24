import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import Search from "./Search";
import Movie from "./Movie";
import User from "../tut5/user";
import ShowUser from "../tut5/showUser";
import ShowSpecUser from "../tut5/showSpecUser";
import AddUser from "../tut5/addUser";

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/movie' component={Movie}/>
                <Route exact path='/addUser' component={AddUser}/>
                <Route exact path='/showUsers' component={ShowUser}/>
                <Route exact path='/showSpecUser' component={ShowSpecUser}/>
            </Switch>
        );
    }
}

export default Routes;
