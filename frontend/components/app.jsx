import React from "react";
import NavBarContainer from "./nav_bar/nav_bar_container";
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';

const App = () => (
    <div className="app">
            <NavBarContainer />
        <div className="main">
            <Switch>
                <AuthRoute path="/signup" component={SignupFormContainer} />
                <AuthRoute path="/login" component={LoginFormContainer} />
                <AuthRoute exact path="/" component={SignupFormContainer} />
                <Redirect to="/" />
            </Switch>
        </div>
    </div>
);

export default App;