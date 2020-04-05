import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {fetchUser} from '../../actions/user_actions';

class InboxListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUser(this.props.userId)
    }

    message() {
        const {userId, directRequest, user} = this.props;
        if (userId === directRequest.user_id && (directRequest.response === undefined || directRequest.response === "Maybe")) {
            return user.name + " requested: "
        } else if (userId === directRequest.user_id && directRequest.response !== undefined) {
            if (directRequest.response === "Yes") {
                return "You accepted: "
            } else if (directRequest.response === "No") {
                return "You declined: "
            }
        } else {
            return "You requested: "
        }
    }

    render() {
        const {user, directRequest} = this.props;
        if (user === undefined) return null;
        console.log(directRequest)
        return (
          <div className="multicolumn">
              <div className=".multicolumn-column">
                <Link to={`/profile/${user.id}`}>
                    {user.name}
                </Link>
                <Link to={`/city/${user.city_id}`}>
                    {user.city}
                </Link>
              </div>
              <div className=".multicolumn-column">
                {this.message()}
                {directRequest.start + " - " + directRequest.end}
              </div>
          </div>
        )
    }

}


const mSTP = ({ session, entities: { users } }, {directRequest}) => {
    const userId = directRequest.user_id === session.id ? directRequest.host_id : directRequest.user_id;
    return {
        userId,
        user: users[userId],
        directRequest
    };
};

const mDTP = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId)),
})

export default connect(mSTP, mDTP)(InboxListItem);


