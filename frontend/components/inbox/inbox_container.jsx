import { connect } from 'react-redux';
import Inbox from './inbox'; 

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

export default connect(mSTP, null)(Inbox);