import React from 'react';
import {Link} from 'react-router-dom';
import InboxListItem from './inbox_list_item';



class InboxList extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const {directRequests, activePage, session} = this.props;
       
        const filterList = () => {
            switch (activePage) {
                case "All Messages": 
                    return directRequests;
                case "Hosting":
                    return directRequests.filter((dr) => dr.host_id === session.id);
                case "Traveling":
                    return directRequests.filter((dr) => dr.user_id === session.id);
            }
        }

        const filteredList = filterList();
        
        return (
            <ul>
                {filteredList.length === 0 
                    ? <p><br/>You Have No Messages</p>
                    : filteredList.map((dr, id) => ( 
                        <li 
                          key={id}
                          onClick={this.toggleDetails}
                        >
                        <InboxListItem directRequest={dr}/>    
                        </li>
                    ))
                }
            </ul>
        )
    }

}

export default InboxList;