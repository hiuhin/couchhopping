import React from 'react';
import { faBed } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Spot extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

        this.props.fetchSpot(this.props.user.spot_id)
    }

    render() {
        if (this.props.spot === undefined) return null;
        const { spot, user } = this.props;
        
        return (
            <div className="spot">
                <div className="boxheader">{user.name.toUpperCase()}'S HOME</div>
                <ul>
                    <li>Num Guest: {spot.max_guests}</li>
                    <li>Kid Friendly? {spot.kid_friendly === true ? "Yes" : "No"}</li>
                    <li>Pet Friendly? {spot.pet_friendly === true ? "Yes" : "No"}</li>
                    <li>Smoking Allowed? {spot.smoke === true ? "Yes" : "No"}</li>
                </ul>
                <div className="spotsection">
                    <div className="boxheader">SLEEPING ARRANGEMENTS</div>
                    <ul>
                        <li><FontAwesomeIcon icon={faBed} /> {spot.sleeping_arrangement}</li>
                        <li className="arrangement">{spot.description}</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Spot;