import React from 'react';
import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { fetchUser } from '../../actions/user_actions';
import { fetchDirectRequests } from "../../actions/direct_request_actions";

const mSTP = (state) => {
    // console.log(state)
    return {
        // currentUser: users[session.id],
    };
};

const mDTP = dispatch => ({
    // fetchUser: (userId) => dispatch(fetchUser(userId)),
    // fetchDirectRequests: () => dispatch(fetchDirectRequests())
})

export default connect(mSTP, null)(Dashboard);