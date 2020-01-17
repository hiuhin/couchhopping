import React from 'react';
import { connect } from 'react-redux';

class AboutMe extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { user, currentUser } = this.props;
        const activeUser = currentUser.id === user.id ? currentUser : user;
        return (
            <div className="aboutme">
                <div className="boxheader">
                    ABOUT ME
                </div>
        
                <h5>{activeUser.about_me}</h5>
                <br/ >
                <h4>Favorite Book</h4>
                <h5>{activeUser.book}</h5>
                <h4>Favorite Movie Quote</h4>
                <h5>{activeUser.movie}</h5>
            </div>
        )
    }
}

const mSTP = ({ session, entities: { users }}, ownprops) => {
    return {
        currentUser: users[session.id],
        user: ownprops.user
    };
};

export default connect(mSTP, null)(AboutMe);
