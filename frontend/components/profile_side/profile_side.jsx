import React from 'react';
import { Link } from 'react-router-dom';
import { faUserCircle} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ProfileSide extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { user, city } = this.props;
        
        return (
            <div className="profileside">
                <FontAwesomeIcon icon={faUserCircle} />
                <br />
                <h2>{user.name}</h2>
                <h3>{city}</h3>
            </div>
        )
    }

}

export default ProfileSide;
