import React from 'react';
import Routes from "./components/Routes";
import {BrowserRouter as Router} from "react-router-dom";
import User from "./tut5/user";

function App() {
  return (
    <div className="App">
        <Router>
            <User/>
            <Routes />
        </Router>
    </div>
  );
}

export default App;
