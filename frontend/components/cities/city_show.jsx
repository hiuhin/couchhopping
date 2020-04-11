import React from 'react';
import {Link} from 'react-router-dom';
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class CityShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          currPageId: null
        }
    }

    componentDidMount() {
        this.props.fetchUsers(this.props.match.params.cityId);
    }

    componentDidUpdate(prevProps) {
      if (prevProps.match.params.cityId !== this.props.match.params.cityId) {
        this.props.fetchUsers(this.props.match.params.cityId)
      }
    }
          
    render() {
  
        if (this.props.city === undefined) return null;
        const { currentUser, hosts, city} = this.props;
        const selectedHosts = hosts.filter(host => host.city_id === city.id && host.id !== currentUser.id)

        return (
          <div className="cityshow">
            <img src={this.props.city.photoURL} className="citybanner" />
            <span className="citytitle">{this.props.city.name}</span>
            <div className="lists-container">
              <div className="hosts-list-container">
                <header>
                  <i className="fas fa-house-user" /> Local Hosts
                </header>
                <div className="hosts-list">
                  <p>
                    Stay with one of the {selectedHosts.length} hosts in {this.props.city.name}
                  </p>
                  <div className="hosts">
                    {selectedHosts.map((host) => (
                        <Link key={host.id} to={`/profile/${host.id}`}>
                        <li>
                          <img src={host.photoURL} className="profile-thumb" alt="profile-thumb"/>
                            <br />
                            {host.name}
                        </li>
                        </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }

}

export default CityShow;