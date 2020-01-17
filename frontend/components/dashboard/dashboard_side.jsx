import React from 'react';
import { connect } from 'react-redux';

class DashboardSide extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="dashboardside">
                <h3> {this.props.currentUser.name}</h3>
                <header>{this.props.currentUser.city}</header>
                <br/>
                <h3>{this.props.currentUser.status}</h3>
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

