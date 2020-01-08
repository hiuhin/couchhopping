import React from 'react';
import { Link } from 'react-router-dom';



const NavBar = ({ currentUser, logout }) => {
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

    return currentUser ? personalGreeting() : sessionLinks();
};


export default NavBar;