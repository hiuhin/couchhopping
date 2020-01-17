import { connect } from 'react-redux';
import Spot from './spot';
import { fetchSpot, updateSpot } from '../../actions/spot_actions';
import {fetchUser} from '../../actions/user_actions';


const mSTP = ({ session, entities: { users, spots }}, ownprops) => {
    return {
    currentUser: users[session.id],
    user: ownprops.user,
    spot: spots[ownprops.user.spot_id]
}};

const mDTP = dispatch => ({
    fetchSpot: spotId => dispatch(fetchSpot(spotId)),
    updateSpot: spot => dispatch(updateSpot(spot)),
    fetchUser: userId => dispatch(fetchUser(userId))
});

export default connect(mSTP, mDTP)(Spot);
