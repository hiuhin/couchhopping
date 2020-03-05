import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Status extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { currentUser } = this.props;
        let display;
        if (currentUser.id === this.props.user.id) {
            display = <Link to={`/profile/${currentUser.id}/edit`}>Edit My Profile</Link>
        } else {
            display = ""
        }
        return (
            <div className="status">
                <h2>{currentUser.status}</h2>
                {display}
                
;            </div>
        )
    }
}

const mSTP = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    };
};

export default connect(mSTP, null)(Status);
