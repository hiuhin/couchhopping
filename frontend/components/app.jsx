import React from "react";
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import NavBarContainer from "./nav_bar/nav_bar_container";
import SignupFormContainer from './session_form/signup_form_container';
import DashBoardContainer from './dashboard/dashboard_container';
import ProfileContainer from './profile/profile_container';
import ProfileFormContainer from '../components/profile_form/profile_form_container';
import CityShowContainer from '../components/cities/city_show_container';
import Modal from './modal/modal';

const App = () => (
    <div className="app">
            <Modal />
            <NavBarContainer />
        <div className="main">
            <Switch>
                <AuthRoute path="/signup" component={SignupFormContainer} />
                <ProtectedRoute exact path="/cities/:cityId" component={CityShowContainer} />
                <ProtectedRoute exact path="/profile/:userId/edit" component={ProfileFormContainer} />
                <ProtectedRoute exact path="/profile/:userId" component={ProfileContainer} />
                <ProtectedRoute path="/" component={DashBoardContainer} />
                <AuthRoute path="/" component={SignupFormContainer} />
                <Redirect to="/" />
            </Switch>
        </div>
    </div>
);

export default App;