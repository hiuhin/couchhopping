import React from 'react';
import { connect } from 'react-redux';
import Profile from './profile';
import {fetchUser} from '../../actions/user_actions';

const mSTP = ({ session, entities: { users } }, ownprops) => {
    return {
        currentUser: users[session.id],
        user: users[ownprops.match.params.userId],
    };
};

const mDTP = dispatch => {
    return {

        fetchUser: (userId) => dispatch(fetchUser(userId))
    }
}


export default connect(mSTP, mDTP)(Profile);