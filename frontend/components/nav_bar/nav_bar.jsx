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
                <div>
                    <Link to="/">
                        <img className="logo" src={window.logoURL} />
                    </Link>
                </div>
                <div className="navbarright">
                    <Link to="/signup" className="navbarjoin">Join</Link>
                    <button
                        className="navbarlogin"
                        onClick={this.handleLogin}>
                        Login
                    </button>
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
                    <label className="navbaricon">
                        <img className="navbariconimg" src={window.earthURL} />
                        Dashboard
                    </label>               
                    <label className="navbaricon">
                        <img className="navbariconimg" src={window.catURL} />
                        Profile
                    </label>
                    <label className="navbaricon">
                        <img className="navbariconimg" src={window.settingURL}/>
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