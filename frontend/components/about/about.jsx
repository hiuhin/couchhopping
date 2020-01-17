import React from 'react';
import { connect } from 'react-redux';
import Overview from "../about/overview";
import AboutMeContainer from "../about/about_me";
import ProfileFormContainer from "../../components/profile_form/profile_form_container";

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {   
        
        return (
            <div>
                <Overview user={this.props.user}/>
                <AboutMeContainer user={this.props.user}/>
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

export default connect(mSTP, null)(About);
