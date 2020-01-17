import React from 'react';
import { faPhotoVideo } from '@fortawesome/free-solid-svg-icons';
import Hosts from '../hosts/hosts';
import {Link} from 'react-router-dom';
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class CityShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchCity(this.props.match.params.cityId);
        this.props.fetchUsers(this.props.match.params.cityId);
    }

    render() {
        if (this.props.city === undefined) return null;
        const { currentUser, hosts} = this.props;
        const selectedHosts = [];
        hosts.map(host => currentUser.id !== host.id && host.id !== 10 ? selectedHosts.push(host) : selectedHosts.push([]))
        return (
            <div className="cityshow">
                <img src={this.props.city.photoURL} className="citybanner"/> 
                <span className="citytitle">{this.props.city.name}</span>
                <br/>
                <header>Available Hosts in {this.props.city.name}</header>
                <div className="hosts">
                    {hosts.map(host => (
                        <Link to={`/profile/${host.id}`}><li><FontAwesomeIcon icon={faUserCircle} /><br/>{host.name}</li></Link>
                    ))}
                </div>
            </div>
        )
    }

}

export default CityShow;