import React from 'react';
import { connect } from 'react-redux';
import { fetchDirectRequests} from '../../actions/direct_request_actions';
import DirectRequestItem from './DirectRequestItem';

class Todo extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchDirectRequests();
    }
    
    render() {
        const {directrequests, session} = this.props;
        let requestsToUser = directrequests.filter(directrequest => directrequest.host_id === session.id)

        return (
            <div>
                <h2>TO-DO LIST</h2>
                <p>REQUESTS TO STAY WITH ME</p>
                <ul>
                    {requestsToUser.map(requestToUser => 
                        <li>
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