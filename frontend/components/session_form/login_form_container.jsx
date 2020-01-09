import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, clearSessionErrors } from '../../actions/session_actions';
import LoginForm from './login_form';
import { openModal, closeModal } from "../../actions/modal_actions";
import { signup } from "../../actions/session_actions";
const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        signupLink: <Link 
                        to="/signup" 
                        className="loginformjoin" 
                    >Join</Link>,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        closeModal: () => dispatch(closeModal()),
        clearSessionErrors: () => dispatch(clearSessionErrors())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
