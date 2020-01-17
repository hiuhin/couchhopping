import React from 'react';
import SpotContainer from '../../components/spots/spot_container';
// import About from '../../components/about/about';
import AboutContainer from '../../components/about/about';

class ProfileNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currComponent: 'about'
        }
        this.handleAbout = this.handleAbout.bind(this);
        this.handleSpot = this.handleSpot.bind(this);
    }

    handleSpot(e) {
        this.setState({ currComponent: 'spot'});
    }

    handleAbout(e) {
        this.setState({ currComponent: 'about'});
    }

    render() {
        const { currComponent } = this.state;
        
        return (
            <div>
                <div className="profilenav">
                    <span 
                        onClick={this.handleAbout} 
                        className={currComponent === 'about' ? "active" : "inactive"}>About Me</span>
                    <span
                        onClick={this.handleSpot}
                        className={currComponent === 'spot' ? "active" : "inactive"}>My Home</span>
                </div>

                {currComponent === 'about' ? <AboutContainer user={this.props.user}/> : <SpotContainer user={this.props.user}/>}
                
            </div>
        )
    }

}

export default ProfileNav;
