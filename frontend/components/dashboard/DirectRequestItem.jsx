import React from 'react';
import { connect } from 'react-redux';

class Todo extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchDirectRequests();
    }

    render() {

        return (
            <div>
                <h2>TO-DO LIST</h2>
                <p>REQUESTS TO STAY WITH ME</p>
                <ul>
                    {this.props.directrequests.map(request =>
                        <li>
                            <DirectRequestItem request={request} />
                        </li>
                    )}
                </ul>

            </div>
        )
    }
}

const mSTP = ({ entities: { directRequests } }) => {
    return {
        directrequests: Object.values(directRequests)
    };
};

const mDTP = dispatch => ({
    fetchDirectRequests: () => dispatch(fetchDirectRequests())
})

export default connect(mSTP, mDTP)(Todo);