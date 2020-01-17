import {
    RECEIVE_ALL_CITIES, RECEIVE_CITY
} from '../actions/city_actions';

const citiesReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_ALL_CITIES:
            return Object.assign({}, state, action.cities)
        case RECEIVE_CITY:
            const newCity= { [action.city.id]: action.city };
            return Object.assign({}, state, newCity);
        default:
            return state;
    }
};

export default citiesReducer;