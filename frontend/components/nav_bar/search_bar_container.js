import { connect } from 'react-redux';
import SearchBar from "./search_bar";
import { fetchCities } from '../../actions/city_actions';

const mSTP = ({ entities: { cities } }) => {
    return {
        cities: Object.values(cities)
    }
};

const mDTP = dispatch => ({
    fetchCities: () => dispatch(fetchCities())
});

export default connect(mSTP, mDTP)(SearchBar);
