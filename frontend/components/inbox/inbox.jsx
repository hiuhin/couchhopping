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

    changeActiveClass(page) {
        return this.state.activePage === page ? "active" : "";
    }

    render() {
        return (
            <div className="inbox">
                <ul className="inboxnav">
                    <li 
                        onClick={() => this.changePage("All Messages")} 
                        className={this.changeActiveClass("All Messages")}
                    >
                        All Messages
                    </li>
                    <li 
                        onClick={() => this.changePage("Hosting")}
                        className={this.changeActiveClass("Hosting")}
                    >
                        Hosting
                    </li>
                    <li 
                        onClick={() => this.changePage("Traveling")}
                        className={this.changeActiveClass("Traveling")}
                    >
                        Traveling
                    </li>
                </ul>

               <InboxList 
                    directRequests={this.props.directRequests} activePage={this.state.activePage} session={this.props.session}
                />
            </div>
        )
    }

}

export default Inbox;