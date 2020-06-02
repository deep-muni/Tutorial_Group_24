import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import Search from "./Search";
import Movie from "./Movie";

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Search}/>
                <Route exact path='/movie' component={Movie}/>
            </Switch>
        );
    }
}

export default Routes;
