import { connect } from 'react-redux';
import RequestForm from './request_form';
import { fetchDirectRequest, createDirectRequest, deleteDirectRequest, clearDirectRequestErrors } from '../../actions/direct_request_actions';

const mSTP = ({ errors, session, entities: { users } }) => {
    return {
        errors: errors.directRequest,
        currentUser: users[session.id],
    };
};

const mDTP = dispatch => ({
    fetchDirectRequest: (requestId) => dispatch(fetchDirectRequest(requestId)),
    createDirectRequest: (directRequest) => dispatch(createDirectRequest(directRequest)),
    deleteDirectRequest: (requestId) => dispatch(deleteDirectRequest(requestId)),
    clearDirectRequestErrors: () => dispatch(clearDirectRequestErrors())
})

export default connect(mSTP, mDTP)(RequestForm);