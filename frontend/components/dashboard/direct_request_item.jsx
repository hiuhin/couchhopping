import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import Response from './response';

class DirectRequestItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showResponseForm: false
        }
        this.renderResponseForm = this.renderResponseForm.bind(this);
        this.toggleResponseForm = this.toggleResponseForm.bind(this);
    }

    componentDidMount() {
        this.props.fetchUser(this.props.requestToUser.user_id);
    }

    renderResponseForm() {
        return this.state.showResponseForm ? <Response message={this.props.message} requester={this.props.requester} toggleResponseForm={this.toggleResponseForm}/> : "";
    }

    toggleResponseForm() {
        this.setState({ showResponseForm: !this.state.showResponseForm })
    }

    render() {
        const {requester, dates, nights, message} = this.props;
        // console.log(this.props)
        if (this.props.requester === undefined) return null;
        return (
            <div>
                <div className="requestcard multicolumn">
                    <div>
                        <p className="name">{requester.name}</p>
                        <p>{requester.city}</p>
                        <br/>
                        <span>{nights}</span>
                        <span>{dates}</span>
                    </div>
                    <div>
                        <button onClick={this.toggleResponseForm}>Respond</button>
                    </div>
                </div>
                <div className="responseForm">{this.renderResponseForm()}</div>
            </div>
        )
    }
}


const mSTP = ({ entities: {users} }, {requestToUser: {user_id, start, end, message}}) => {
    const oneDay = 24 * 60 * 60 * 1000;
    startDate = new Date(start)
    let startDate = start.split('-');
    startDate = new Date(startDate[0], startDate[1], startDate[2]);
    let endDate = end.split('-');
    endDate = new Date(endDate[0], endDate[1], endDate[2]);
    const nights = Math.round(Math.abs((startDate - endDate) / oneDay));

    return {
        requester: users[user_id],
        dates: " 🗓 " + start + " → " + end,
        nights: " 🏠 " + nights + " nights",
        message: "＂" + message + "＂"
        
    };
};

const mDTP = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId))
})

export default connect(mSTP, mDTP)(DirectRequestItem);
