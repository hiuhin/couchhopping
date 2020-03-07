import { connect } from 'react-redux';
import RequestForm from './request_form';
import { fetchDirectRequest, createDirectRequest, deleteDirectRequest } from '../../actions/direct_request_actions';

const mSTP = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    };
};

const mDTP = dispatch => ({
    fetchDirectRequest: (requestId) => dispatch(fetchDirectRequest(requestId)),
    createDirectRequest: (request) => dispatch(createDirectRequest(request)),
    deleteDirectRequest: (requestId) => dispatch(deleteDirectRequest(requestId)),
})

export default connect(mSTP, mDTP)(RequestForm);