import React from "react";
import NavBarContainer from "./nav_bar/nav_bar_container";
import { Route, Switch } from 'react-router-dom';

import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';

const App = () => (
    <div>
        <header>
            <h1>CouchHopping</h1>
            <NavBarContainer />
        </header>

        <Switch>
            <Route exact path="/login" component={LoginFormContainer} />
            <Route exact path="/signup" component={SignupFormContainer} />
        </Switch>
    </div>
);

export default App;