import React from 'react';
import { connect } from 'react-redux';
import ProfileForm from './profile_form';
import { fetchUser, updateUser } from '../../actions/user_actions';

const mSTP = ({ session, entities: { users } }, ownprops) => {
    return {
        currentUser: users[session.id],
        user: users[ownprops.match.params.userId]
    };
};

const mDTP = dispatch => ({
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    updateUser: (user) => dispatch(updateUser(user))
})


export default connect(mSTP, mDTP)(ProfileForm);