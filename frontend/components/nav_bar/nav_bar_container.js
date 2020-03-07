import { connect } from 'react-redux';
import { logout, clearSessionErrors } from '../../actions/session_actions';
import NavBar from './nav_bar';
import { openModal, closeModal } from '../../actions/modal_actions';

const mSTP = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    };
};

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    login: () => dispatch(openModal('login')),
    closeModal: () => dispatch(closeModal()),
    clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default connect(mSTP, mDTP)(NavBar);