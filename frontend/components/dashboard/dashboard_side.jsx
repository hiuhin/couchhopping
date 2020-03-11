import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class DashboardSide extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {currentUser} = this.props;
        return (
            <div className="dashboardside">
                <div className="dashboardprofile block">
                    <p className="name">
                        <Link to={`/profile/${currentUser.id}`}>
                            {currentUser.name}
                        </Link>
                    </p>
                        <Link to={`/cities/${currentUser.city_id}`}>
                            <p>{currentUser.city}</p>
                        </Link>
                </div>
                <div className="dashboardstatus block">
                    <p>{currentUser.status}</p>
                </div>

                <div className="profiletitle block">
                    My Profile
                </div>
                <div className="completeprofile block">
                    <Link to={`/profile/${currentUser.id}/edit`}>
                        Complete My Profile ▸
                    </Link>
                </div>
                <div className="ad block">
                    <h3> Advertise Here </h3>
                    <h4>➠ Click To Learn More</h4>
                </div>
            </div>
        )
    }
}

const mSTP = ({ session, entities: { users } }) => {

    return {
        currentUser: users[session.id],

    };
};

export default connect(mSTP, null)(DashboardSide);

