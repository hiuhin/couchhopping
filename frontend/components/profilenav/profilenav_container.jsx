import React from 'react';
import { connect } from 'react-redux';
import ProfileNav from './profilenav';
import {fetchSpot, updateSpot} from '../../actions/spot_actions';

const mSTP = ({ session, entities: { spots, users } }, ownprops) => {

    return {
        spot: spots[ownprops.user.spot_id],
        currentUser: users[session.id],
        user: ownprops.user
    };
};

const mDTP = dispatch => ({
    fetchSpot: spotId => dispatch(fetchSpot(spotId)),
    updateSpot: spot => dispatch(updateSpot(spot)),
})


export default connect(mSTP, mDTP)(ProfileNav);