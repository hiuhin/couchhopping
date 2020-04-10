import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import {Link} from 'react-router-dom';


import {fetchUser} from '../../actions/user_actions';
import Details from './details';
import {updateDirectRequest, deleteDirectRequest} from '../../actions/direct_request_actions';

class InboxListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDetails: false
        }
        this.toggleDetails = this.toggleDetails.bind(this);
    }

    componentDidMount() {
        this.props.fetchUser(this.props.userId)
    }

    toggleDetails() {
        this.setState({ showDetails: !this.state.showDetails })
    }

    renderDetails() {
        return this.state.showDetails === true ? 
            <Details 
                directRequest={this.props.directRequest} 
                currentUser={this.props.currentUser}
                updateDirectRequest={this.props.updateDirectRequest}
                deleteDirectRequest={this.props.deleteDirectRequest}
            /> : ""
    }

    generateMessage() {
        const {userId, directRequest, user} = this.props;
       
        if (userId === directRequest.user_id && (directRequest.response === "" || directRequest.response === "Maybe")) {
            return user.name + " requested: "
        } else if (userId === directRequest.user_id && directRequest.response !== undefined) {
            if (directRequest.response === "Yes") {
                return "You accepted: "
            } else if (directRequest.response === "No") {
                return "You declined: "
            }
        } else {
            if (directRequest.response === "Yes") {
                return user.name + " has accepted: "
            } else {
                return "You requested: "
            }
        }
    }

    render() {
        const {user, directRequest} = this.props;
        if (user === undefined) return null;
        const message = this.generateMessage();
        return (
          <div className="inbox-item-container ">
            <div className="card" onClick={this.toggleDetails}>
                <div className="inbox-item-left">
                    <img src={user.photoURL} className="profile-thumb" alt="profile-thumb"/>
                </div>
                <div className="align-left inbox-item-center">
                <span className="name">                   
                        <Link to={`/profile/${user.id}`}>{user.name}</Link>              
                </span>
                <br/>
                <span className="city">
                        <Link to={`/cities/${user.city_id}`}>{user.city}</Link>
                </span>
              </div>
              <div className="inbox-item-right">
                <span>
                    <span style={{fontWeight:"bold"}}>{message}</span>
                    &nbsp; {" 🗓 " 
                            + moment(directRequest.start_date, "YYYY-MM-DD").format("ddd MMM D") 
                            + " → " 
                            + moment(directRequest.end_date, "YYYY MM DD").format("ddd MMM D")}
                    &nbsp; {" 🏠 " + this.props.nights + " nights"}
                </span>
                
                <span className="inbox-item-message">
                    {this.state.showDetails ? 
                        directRequest.message : 
                        directRequest.message.slice(0, 70) + 
                        (directRequest.message.length > 70 ? "..." : "")
                    }
                </span>
              </div>
            </div>
            <div>
                {this.renderDetails()}
            </div>
          </div>
        )
    }

}


const mSTP = ({ session, entities: { users } }, {directRequest}) => {
    const userId = directRequest.user_id === session.id ? directRequest.host_id : directRequest.user_id;
    let nights = moment(directRequest.end_date).diff(moment(directRequest.start_date), "days")

    return {
        userId,
        user: users[userId],
        directRequest,
        currentUser: users[session.id],
        nights,
    };
};

const mDTP = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId)),
    updateDirectRequest: id => dispatch(updateDirectRequest(id)),
    deleteDirectRequest: id => dispatch(deleteDirectRequest(id))
})

export default connect(mSTP, mDTP)(InboxListItem);


