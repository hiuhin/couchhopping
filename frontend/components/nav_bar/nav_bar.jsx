import React from 'react';
import { Link } from 'react-router-dom';



const NavBar = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <div>
            <Link to="/login">Login</Link>
            <Link to="/signup">Join</Link>
        </div>
    );
    const personalGreeting = () => (
        <div>
            <h2>Welcome, {currentUser.name}!</h2>
            <button onClick={logout}>Log Out</button>
        </div>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};


export default NavBar;