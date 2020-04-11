import { connect } from 'react-redux';
import Inbox from './inbox'; 

import {fetchDirectRequests} from '../../actions/direct_request_actions';

const mSTP = ({ session, entities: { directRequests } }) => {
    return {
        session,
        directRequests: Object.values(directRequests),

        
    };
};

const mDTP = dispatch => ({
    fetchDirectRequests: () => dispatch(fetchDirectRequests())
})

export default connect(mSTP, mDTP)(Inbox);