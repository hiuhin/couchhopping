import React from 'react';
import { connect } from 'react-redux';
import { fetchUser }from '../../actions/user_actions';

class DirectRequestItem extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUser(this.props.requestToUser.user_id);
    }

    render() {
        const {requester, dates, nights} = this.props;
        // console.log(this.props)
        if (this.props.requester === undefined) return null;
        return (
                <div className="requestcard multicolumn">
                    <div>
                        <p className="cardtitle">{requester.name}</p>
                        <p>{requester.city}</p>
                        <br/>
                        <span>{nights}</span>
                        <span>{dates}</span>
                    </div>
                    <div>
                        <button>Respond</button>
                    </div>
                </div>
        )
    }
}


const mSTP = ({ entities: {users} }, {requestToUser: {user_id, start, end}}) => {
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
        nights: " 🏠 " + nights + " nights"
        
    };
};

const mDTP = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId))
})

export default connect(mSTP, mDTP)(DirectRequestItem);
