import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUser } from '../../actions/user_actions';
import {updateDirectRequest } from '../../actions/direct_request_actions';
import Response from './response';
import moment from 'moment';

class DirectRequestItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showResponseForm: false,
            className: ""
        }
        this.renderResponseForm = this.renderResponseForm.bind(this);
        this.toggleResponseForm = this.toggleResponseForm.bind(this);
        this.fadeOut = this.fadeOut.bind(this);
    }

    componentDidMount() {
        this.props.fetchUser(this.props.requestToUser.user_id);
    }

    renderResponseForm() {
        return this.state.showResponseForm ? 
            <Response 
                message={this.props.message} 
                requester={this.props.requester}
                requestToUser={this.props.requestToUser}
                updateDirectRequest={this.props.updateDirectRequest}
                fadeOut={this.fadeOut}
                toggleResponseForm={this.toggleResponseForm}/> : "";
    }

    fadeOut() {
        this.setState({className: "fadeOut"})
    }

    toggleResponseForm() {
        this.setState({ showResponseForm: !this.state.showResponseForm })
    }

    render() {
        const {requester, dates, nights} = this.props;
        
        if (this.props.requester === undefined) return null;
        return (
            <div className={this.state.className}>
                <div className="requestcard multicolumn">
                    <div>
                        <Link to={`/profile/${requester.id}`}><p className="name">{requester.name}</p></Link>
                        <Link to={`/cities/${requester.city_id}`}><p>{requester.city}</p></Link>
                        <br/>
                        <span>{nights}</span>
                        <span>{dates}</span>
                    </div>
                    <div>
                        <button onClick={this.toggleResponseForm}>Respond</button>
                    </div>
                </div>
                <div className={this.state.showResponseForm === true ? "formOpen" : ""}>{this.renderResponseForm()}</div>
            </div>
        )
    }
}


const mSTP = ({ entities: { users } }, { requestToUser: { user_id, start_date, end_date, message } }) => {
   let start = moment(start_date, "YYYY MM DD").format("ddd MMM D YYYY")
    let end = moment(end_date, "YYYY MM DD").format("ddd MMM D YYYY")
    let nights = moment(end_date, "YYYY MM DD").diff(moment(start_date, "YYYY MM DD"), "days");

    return {
        // requestToUser: requestToUser,
        requester: users[user_id],
        dates: " 🗓 " + start + " → " + end,
        nights: " 🏠 " + nights + " nights",
        message: "＂" + message + "＂"
        
    };
};

const mDTP = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId)),
    updateDirectRequest: request => dispatch(updateDirectRequest(request))
})

export default connect(mSTP, mDTP)(DirectRequestItem);
