import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        // this.addActiveClass = this.addActiveClass.bind(this);
        // this.state = {
        //     active: false,
        // };
    }

    // toggleClass() {
    //     const currentState = this.state.active;
    //     this.setState({ active: !currentState });
    // };

    handleLogin() {
        this.props.clearSessionErrors();
        this.props.login();
    }

    render() {
        const { currentUser, logout } = this.props;
        
        const sessionLinks = () => (
            <div className="navbar">
                <div className="navbarcontent">
                    <div>
                        <Link to="/" className="header-link">
                            <img className="logo" src={window.logoURL} />
                        </Link>
                    </div>
                    <div className="navbarright">
                        <Link to="/signup" className="navbarjoin">Join</Link>
                        <button
                            className="navbarlogin"
                            onClick={this.handleLogin}>
                            Log In
                        </button>
                    </div>
                </div>
            </div>
        );

        const personalGreeting = () => (
            <div className="navbar">
                <div className="navbarcontent">
                    <div>
                        <Link to="/" className="header-link">
                            <img className="logo" src={window.logoURL} />
                        </Link>
                    </div>

                    <div className="navbarright">
                        <label className="navbaricon">
                            <div className="navbarlink">
                                <Link to="/dashboard">
                                    <i className="fas fa-globe-americas navbariconimg"></i>
                                <div>Dashboard</div>
                                </Link>
                            </div>
                        </label>               
                        <label className="navbaricon">
                            <div className="navbarlink">
                                <Link to={`/profile/${currentUser.id}`}>
                                    <i class="fas fa-user-circle navbariconimg"></i>
                                <div>Profile</div>
                                </Link>
                            </div>
                        </label>
                        <label className="navbaricon">
                            <div className="navbarlink">
                                <i className="far fa-envelope navbariconimg"></i>
                                <div>Inbox</div>
                            </div>
                        </label>
                        <label className="navbaricon">
                            <i className="fas fa-cog navbariconimg" onClick={logout}></i>
                            Log Out
                        </label>
                    </div>
                </div>
            </div>
        );

        return (
            <div>
                {currentUser ? personalGreeting() : sessionLinks()}
            </div>
        )
    }

}

export default NavBar;