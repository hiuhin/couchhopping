import { connect } from 'react-redux';
import Inbox from './inbox'; 

import {fetchDirectRequests} from '../../actions/direct_request_actions';

const mSTP = ({ session, entities: { directRequests } }) => {
    // console.log(state)
    return {
        directRequests: Object.values(directRequests)
    };
};

const mDTP = dispatch => ({
    // fetchUser: (userId) => dispatch(fetchUser(userId)),
    fetchDirectRequests: () => dispatch(fetchDirectRequests())
})

export default connect(mSTP, mDTP)(Inbox);