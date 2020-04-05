import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { fetchDirectRequests} from '../../actions/direct_request_actions';
import DirectRequestItem from '../direct_requests/direct_request_item';

class Todo extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchDirectRequests();
    }

    renderNoRequests(){
        return <p className="mod">No Pending Requests. Check <Link to={"/inbox"}>Inbox</Link> For Completed Requests.</p>
    }
    
    render() {
        const {directrequests, session} = this.props;
        let requestsToUser = directrequests.filter(directrequest => directrequest.host_id === session.id && directrequest.response === "")
      
        return (
            <div>
                <h3 className="box-header">📝 TO-DO LIST</h3>
                <p className="box-title">Requests To Stay With Me</p>
                {requestsToUser.length === 0 ? this.renderNoRequests() : ""}
                <ul>
                    {requestsToUser.map(requestToUser => 
                        <li key={requestToUser.id}>
                            <DirectRequestItem requestToUser={requestToUser} />
                        </li>
                    )}
                </ul>

            </div>
        )
    }
}

const mSTP = ({ session, entities: { directRequests } }) => {
    return {
        directrequests: Object.values(directRequests),
        session: session
    };
};

const mDTP = dispatch => ({
    fetchDirectRequests: () => dispatch(fetchDirectRequests())
})

export default connect(mSTP, mDTP)(Todo);