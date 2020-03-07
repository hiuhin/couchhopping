import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import RequestFormContainer from '../request/request_form_container';

class Status extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showRequestForm: false
        };

        this.renderRequestForm = this.renderRequestForm.bind(this);
    }

    toggleRequestForm() {
        this.state.showRequestForm ? this.setState({showRequestForm: false}) : this.setState({showRequestForm: true});
    }

    renderRequestForm() {
       return (this.state.showRequestForm === true) ? <RequestFormContainer /> : "";
    }

    render() {
        const { currentUser, user } = this.props;
        let display;
        if (currentUser.id === user.id) {
            display = <Link to={`/profile/${currentUser.id}/edit`}>Edit My Profile</Link>
        } else {
            display = <button onClick={() => this.toggleRequestForm()}>Send Request</button>
        }
        return (
            <div>
                <div className="status">
                    <h2 className={(user.status === "Accepting Guests") ? "green" : "red"}>{user.status}</h2>
                    {display}
                </div>
                {this.renderRequestForm()}
            </div>
        )
    }
}

const mSTP = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    };
};

export default connect(mSTP, null)(Status);
