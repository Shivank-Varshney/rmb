import React from "react";
import Dashboard from "./assets/component/Dashboard";
import Meter from "./assets/component/Meter";
import Contact from "./assets/component/Contact";
import Data from "./assets/component/Data";
import Calender from "./assets/component/Calender";
import Home from "./assets/component/Home";
import Login from "./assets/component/Login";
import Registration from "./assets/component/Registration";
import {Redirect, Route, Switch } from 'react-router-dom'; 
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return(
    <React.Fragment> 
        <Switch> 
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} /> 
            <Route exact path='/registration' component={Registration} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/dashboard/meter' component={Meter} />
            <Route exact path='/dashboard/contact' component={Contact} /> 
            <Route exact path='/dashboard/data' component={Data} /> 
            <Route exact path='/dashboard/calender' component={Calender} />
            <Redirect to="/" />
        </Switch>
    </React.Fragment>
  );
}

export default App;
