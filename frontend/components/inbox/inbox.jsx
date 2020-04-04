import React from 'react';

import InboxNav from './inbox_nav';
import InboxList from './inbox_list';

class Inbox extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchDirectRequests();
    }

    render() {
        return (
            <div className="inbox">
               <InboxNav />
               <InboxList 
                    directRequests={this.props.directRequests}
                />
            </div>
        )
    }

}

export default Inbox;