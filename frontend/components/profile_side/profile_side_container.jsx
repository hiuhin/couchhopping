import React from 'react';
import { connect } from 'react-redux';
import ProfileSide from './profile_side';

const mSTP = ({ session, entities: { users }}, ownprops) => {
    // let city = (ownprops.user === undefined) ? undefined : ownprops.user.city
    return {
        currentUser: users[session.id],
        user: ownprops.user,
        city: ownprops.user.city
    };
};

export default connect(mSTP, null)(ProfileSide);