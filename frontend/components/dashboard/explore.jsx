import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCities} from '../../actions/city_actions';

class Explore extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchCities();
    }

    render() {
        // console.log(this.props)
        return (
            <div>
                <div className="explore block">
                    <h3><i className="fas fa-couch">&nbsp;</i>Explore Your Next Destination...</h3>
                </div>
                
                <ul className="cityblock">
                    {this.props.cities.map(city => (
                        <div>
                            <Link to={`/cities/${city.id}`} className="picture-link">
                                <li key={city.objectID}>
                                    <span className="cityname">{city.name}</span>
                                    <img src={city.iconURL} className="cityicon" />
                                </li>
                            </Link>
                        </div>
                    ))}
                </ul>
            </div>
        )
    }
}

const mSTP = ({ entities: { cities } }) => {
    return {
        cities: Object.values(cities)
    };
};

const mDTP = dispatch => ({
    fetchCities: () => dispatch(fetchCities())
})

export default connect(mSTP, mDTP)(Explore);
