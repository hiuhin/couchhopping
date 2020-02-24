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
                        <h1 id="logo">couchhopping</h1>
                       {/* <img className="logo" src={window.logoURL} /> */}
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
        );

        const personalGreeting = () => (
            <div className="navbar">
                <div>
                    <Link to="/" className="header-link">
                        <h1 id="logo">couchhopping</h1>
                        {/* <img className="logo" src={window.logoURL} /> */}
                    </Link>
                </div>

                <div className="navbarright">
                    <label className="navbaricon">
                        <div className="navbarlink">
                            <Link to="/dashboard">
                            <img className="navbariconimg" src={window.earthURL} />
                            <div>Dashboard</div>
                            </Link>
                        </div>
                    </label>               
                    <label className="navbaricon">
                        <div className="navbarlink">
                            <Link to={`/profile/${currentUser.id}`}>
                            <img className="navbariconimg" src={window.catURL} />
                            <div>Profile</div>
                            </Link>
                        </div>
                    </label>
                    <label className="navbaricon">
                        <img className="navbariconimg" onClick={logout} src={window.settingURL}/>
                        Log Out
                    </label>
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