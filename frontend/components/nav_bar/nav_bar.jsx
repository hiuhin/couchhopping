import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        // this.addActiveClass = this.addActiveClass.bind(this);
        this.state = {
            active: false,
        };
    }

    toggleClass() {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    };

    render() {
        const { currentUser, logout } = this.props;
        
        const sessionLinks = () => (
            <div className="navbar">
                <div>
                    <Link to="/" className="header-link">
                        <img className="logo" src={window.logoURL} />
                    </Link>
                </div>
                <div className="navbarright">
                    <Link to="/signup" className="button join">Join</Link>
                    <Link to="/login" className="button login">Login</Link>
                </div>
            </div>
        );

        const personalGreeting = () => (
            <div className="navbar">
                <div>
                    <Link to="/" className="header-link">
                        <img className="logo" src={window.logoURL} />
                    </Link>
                </div>
                <div className="navbarright">
                    <h2>Welcome, {currentUser.name}!</h2>
                    <label className="navicon">
                        <img className="naviconimg" src={window.earthURL} />
                        Dashboard
                    </label>               
                    <label className="navicon">
                        <img className="naviconimg" src={window.catURL} />
                        Profile
                    </label>
                    <label className="navicon">
                        <img className="naviconimg" src={window.settingURL}/>
                        Setting
                    </label>
                    <button onClick={logout}>Log Out</button>
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