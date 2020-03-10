import React from 'react';

class DirectRequestItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {request} = this.props;
        return (
            <div>
                {request.message}

            </div>
        )
    }
}

export default DirectRequestItem;

