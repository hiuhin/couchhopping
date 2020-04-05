import React from 'react';
import {connect} from 'react-redux';

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
        console.log(userId, directRequest.user_id, directRequest.response);
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
          <div>
            {user.name}
            {user.city}
            {this.message()}
            {directRequest.start + " - " + directRequest.end}
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


