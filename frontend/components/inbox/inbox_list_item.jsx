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

    generateMessage() {
        const {userId, directRequest, user} = this.props;
       
        if (userId === directRequest.user_id && (directRequest.response === "" || directRequest.response === "Maybe")) {
            console.log(user.name)
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
        const message = this.generateMessage();
        // console.log(message);
        return (
          <div className="inbox-item-container ">
            <div className="card multicolumn">
              <div className="multicolumn-column">
                <span className="name">
                    <Link to={`/profile/${user.id}`}>
                        {user.name}
                    </Link>
                </span>
                <br/>
                <span className="city">
                    <Link to={`/cities/${user.city_id}`}>
                        {user.city}
                    </Link>
                </span>
              </div>
              <div className="inbox-item-details .multicolumn-column">
                <span>
                    {message + directRequest.start + " - " + directRequest.end}
                </span>
                
                <span className="inbox-item-message">
                    {directRequest.message.slice(0, 75) + "..."}
                </span>
              </div>
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


