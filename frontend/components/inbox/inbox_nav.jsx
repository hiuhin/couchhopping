import React from 'react';


class InboxNav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul>
                <li>All Messages</li>
                <li>Hosting</li>
                <li>Traveling</li>
            </ul>
        )
    }

}

export default InboxNav;