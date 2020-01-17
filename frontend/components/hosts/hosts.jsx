import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/user_actions';

class Hosts extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUsers(this.props.city.id);
    }

    render() {
        if (hosts === undefined) return null;
        const {currentUser, hosts} = this.props;
        const selectedHosts = [];
        hosts.map(host => currentUser.id !== host.id && host.id !== 10 ? selectedHosts.push(host) : selectedHosts.push("") )
    
        return (
            <div>
                {hosts.map(host => (
                    <li>{host.name}</li>
                ))}
                {/* {selectedHosts.map(host => (
                    <li>{host.name}</li>
                ))} */}
            </div>
        )
    }
}

const mSTP = ({ session, entities: { users } }, ownprops)=> {
    return {
        currentUser: users[session.id],
        city: ownprops.city,
        hosts: Object.values(users)

    };
};

const mDTP = dispatch => ({
    fetchUsers: cityId => dispatch(fetchUsers(cityId))
});

export default connect(mSTP, mDTP)(Hosts);
