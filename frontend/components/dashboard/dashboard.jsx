import React from 'react';

import Explore from './explore';
import Todo from './todo';
import DashboardSide from './dashboard_side';

class DashBoard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="dashboard">
                {/* <DashboardSide currentUser={this.props.currentUser}/> */}
                <div className="dashboardright">
                    <Explore />
                    <Todo />
                </div>
            </div>
        )
    }

}

export default DashBoard;
