import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Status extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { currentUser } = this.props;
        console.log(currentUser);
        console.log(this.props);
        let display = currentUser.id === this.props.user.id ? <Link to={`/profile/${currentUser.id}/edit`}>Edit My Profile</Link> : "";


        return (
            <div className="status">
                <h2>{currentUser.status}</h2>
                {/* <Link to={`/profile/${currentUser.id}/edit`}>Edit My Profile</Link> */}
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
