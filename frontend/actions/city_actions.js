import * as APIUtil from '../util/city_api_util';

export const RECEIVE_ALL_CITIES = "RECEIVE_ALL_CITIES"
export const RECEIVE_CITY = 'RECEIVE_CITY';

export const receiveAllCities = cities => ({
    type: RECEIVE_ALL_CITIES,
    cities
});

export const receiveCity = city => ({
    type: RECEIVE_CITY,
    city
});

export const fetchCities = () => dispatch => (
    APIUtil.fetchCities().then(payload => (
        dispatch(receiveAllCities(payload))
    ))
);

export const fetchCity = cityId => dispatch => (
    APIUtil.fetchCity(cityId).then(payload => (
        dispatch(receiveCity(payload))
    ))
);