import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
    }

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
                                <NavLink exact={true} activeClassName="main_nav_active" to="/">
                                    <i className="fas fa-globe-americas navbariconimg"></i>
                                    <div className="navtitle">Dashboard</div>
                                </NavLink>
                            </div>
                        </label>               
                        <label className="navbaricon">
                            <div className="navbarlink">
                                <NavLink activeClassName="main_nav_active" to={`/profile/${currentUser.id}`}>
                                    <i className="fas fa-user-circle navbariconimg"></i>
                                    <div className="navtitle">Profile</div>
                                </NavLink>
                            </div>
                        </label>
                        <label className="navbaricon">
                            <div className="navbarlink">
                                <NavLink activeClassName="main_nav_active" to={"/NoMatch"}>
                                    <i className="far fa-envelope navbariconimg"></i>
                                    <div className="navtitle">Inbox</div>
                                </NavLink>
                            </div>
                        </label>
                        <label className="navbaricon">
                            <i className="fas fa-cog navbariconimg" onClick={logout}></i>
                            <div className="navtitle">Log Out</div>
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