import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import RequestFormContainer from '../request_form/request_form_container';

class Status extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showRequestForm: false,
            showSuccessNote: false
        };

        this.renderRequestForm = this.renderRequestForm.bind(this);
        this.toggleRequestForm = this.toggleRequestForm.bind(this);
        this.renderSuccessNote = this.renderSuccessNote.bind(this);
        this.toggleSuccessNote = this.toggleSuccessNote.bind(this);
    }
    

    toggleRequestForm() {
        this.setState({showRequestForm: !this.state.showRequestForm});
    }

    toggleSuccessNote() {
        this.setState({showSuccessNote: !this.state.showSuccessNote})
    }

    renderRequestForm() {
       return (this.state.showRequestForm === true) ? 
        <RequestFormContainer 
            host={this.props.user}
            toggleRequestForm={this.toggleRequestForm} 
            toggleSuccessNote={this.toggleSuccessNote}
                 
    /> : "";
}

    renderSuccessNote() {
        if (this.state.showSuccessNote) {
            return (
              <div className="success-note">
                <p>Request Sent Successfully!</p>
                <p>Check Inbox for Updates</p>
              </div>
            );  
        }  
    }

    render() {
        const { currentUser, user } = this.props;
        let display;
        if (currentUser.id === user.id) {
            display = <Link to={`/profile/${currentUser.id}/edit`}>Edit My Profile</Link>
        } else {
            user.status === "Accepting Guests" ? 
                display = <button onClick={() => this.toggleRequestForm()}>Send Request</button> :
                display = ""
        }
        return (
            <div>
                {this.renderSuccessNote()}
                <div className="status">
                    <h2 className={(user.status === "Accepting Guests") ? "green" : "red"}>{user.status}</h2>
                    {display}
                </div>
                {this.renderRequestForm()}
            </div>
        )
    }
}

const mSTP = ({session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    };
};


export default connect(mSTP, null)(Status);
