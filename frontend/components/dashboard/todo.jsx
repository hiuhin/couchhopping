import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Todo extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <div>
                <h2>TO-DO LIST</h2>
                <p>REQUESTS TO STAY WITH ME</p>
            </div>
        )
    }
}

const mSTP = () => {
    return {

    };
};

const mDTP = dispatch => ({
    
})

export default connect(mSTP, mDTP)(Todo);