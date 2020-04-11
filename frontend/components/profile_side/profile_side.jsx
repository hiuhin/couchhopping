import React from 'react';

class ProfileSide extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { user, city } = this.props;
        
        return (
            <div className="profileside">
                <img src={user.photoURL} alt="profile picture"/>
                <br />
                <h2>{user.name}</h2>
                <h3>{city}</h3>
            </div>
        )
    }

}

export default ProfileSide;
