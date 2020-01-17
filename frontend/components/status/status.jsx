import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Status extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { currentUser } = this.props;

        return (
            <div className="status">
                <h2>{currentUser.status}</h2>
                <Link to={`/profile/${currentUser.id}/edit`}>Edit My Profile</Link>
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
