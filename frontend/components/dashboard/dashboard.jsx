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
                <DashboardSide />
                <div className="dashboardright">
                    <Todo />
                    <Explore />
                </div>
            </div>
        )
    }

}

export default DashBoard;
