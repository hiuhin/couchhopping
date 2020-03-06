import React from 'react';
import { connect } from 'react-redux';
import RequestForm from './request_form';
import { fetchUser } from '../../actions/user_actions';

const mSTP = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    };
};

// const mDTP = dispatch => ({
//     fetchUser: (userId) => dispatch(fetchUser(userId))
// })

export default connect(mSTP, null)(RequestForm);