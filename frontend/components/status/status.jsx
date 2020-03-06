import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Status extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { currentUser, user } = this.props;
        let display;
        if (currentUser.id === user.id) {
            display = <Link to={`/profile/${currentUser.id}/edit`}>Edit My Profile</Link>
        } else {
            display = <Link to={`/profile/${user.id}/request`}>Send Request</Link>
        }
        return (
            <div className="status">
                <h2>{currentUser.status}</h2>
                {display}
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
