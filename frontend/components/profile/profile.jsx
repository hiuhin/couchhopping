import React from 'react';
import ProfileSideContainer from '../profile_side/profile_side_container';
import Status from '../status/status';
import ProfileNavContainer from '../../components/profilenav/profilenav_container';

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId);
        window.scrollTo(0, 0);
        
    }
    
    render() {
        if (this.props.user === undefined) return null;
        return (
            <div className="profile">
                <ProfileSideContainer user={this.props.user}/>
                <div className="profileright">
                    <Status user={this.props.user}/>
                    <ProfileNavContainer user={this.props.user}/>
                </div>
            </div>
        )
    }

}

export default Profile;