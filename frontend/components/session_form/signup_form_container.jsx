import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, clearSessionErrors } from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal} from '../../actions/modal_actions';


const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'signup',
        navLink: <Link to="/login">Log in</Link>
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
        processDemoForm: (user) => dispatch(login(user)),
        clearSessionErrors: () => dispatch(clearSessionErrors()),
        openModal: () => dispatch(openModal(('login')))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
