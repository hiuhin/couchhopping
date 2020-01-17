import React from 'react';
import { connect } from 'react-redux';
import { faVenusMars } from '@fortawesome/free-solid-svg-icons';
import { faSuitcase } from '@fortawesome/free-solid-svg-icons';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Overview extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { user, currentUser } = this.props;

        return (
            <div className="overview">
                <div className="boxheader">
                    OVERVIEW
                </div>
                <ul>
                    <li><FontAwesomeIcon icon={faSuitcase} /> {user.job}</li>
                    <li><FontAwesomeIcon icon={faVenusMars} /> {user.age}, {user.gender}</li>
                    <li><FontAwesomeIcon icon={faLanguage} /> Fluent in {user.language}</li>
                </ul>       
            </div>
        )
    }
}

const mSTP = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    };
};

export default connect(mSTP, null)(Overview);
