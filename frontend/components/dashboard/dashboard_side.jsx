import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class DashboardSide extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDropDown: false
        }
        this.toggleDropDown = this.toggleDropDown.bind(this);
        this.renderDropDown = this.renderDropDown.bind(this);
    }

    toggleDropDown() {
        this.setState({showDropDown: !this.state.showDropDown})
    }

    renderDropDown() {    
        if (this.state.showDropDown) {
            return (
              <div className="drop-down">
                <p
                  onClick={() => this.changeStatus("Accepting Guests")}
                  className="green"
                >
                  Accepting Guests
                </p>
                <p
                  onClick={() => this.changeStatus("Not Accepting Guests")}
                  className="red"
                >
                  Not Accepting Guests
                </p>
              </div>
            );
        }
    }

    changeStatus(status) {
        this.props.currentUser.status = status;
        this.toggleDropDown();
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
                    <p
                        onClick={this.toggleDropDown}>
                        className={currentUser.status === "Accepting Guests" ? "green" : "red"}
                            {currentUser.status + " ▾ "}
                        {this.renderDropDown()}
                    </p>
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
                    <h4>
                        <a href="mailto:hiuhin@gmail.com?Subject=Advertising%20On%20CouchHopping" target="_top">
                            ➠ Click Here To Contact Me
                        </a>
                    </h4>
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

