import React from 'react';

import InboxList from './inbox_list';

class Inbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePage: "All Messages"
        }
    }

    componentDidMount() {
        this.props.fetchDirectRequests();

    }

    changePage(page) {
        this.setState({
            activePage: page
        })
    }

    render() {
        return (
            <div className="inbox">
                <ul>
                    <li onClick={() => this.changePage("All Messages")}>All Messages</li>
                    <li onClick={() => this.changePage("Hosting")}>Hosting</li>
                    <li onClick={() => this.changePage("Traveling")}>Traveling</li>
                </ul>

               <InboxList 
                    directRequests={this.props.directRequests} activePage={this.state.activePage} session={this.props.session}
                />
            </div>
        )
    }

}

export default Inbox;