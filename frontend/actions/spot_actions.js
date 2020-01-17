import * as APIUtil from '../util/spot_api_util';

export const RECEIVE_SPOT = 'RECEIVE_SPOT';

export const receiveSpot = spot => ({
    type: RECEIVE_SPOT,
    spot
});

export const fetchSpot = spotId => dispatch => (
    APIUtil.fetchSpot(spotId).then(payload => (
        dispatch(receiveSpot(payload))
    ))
);

export const updateSpot = spot => dispatch => (
    APIUtil.updateSpot(spot).then(spot => (
        dispatch(receiveSpot(spot))
    ))
);
