import {
    RECEIVE_ALL_DIRECT_REQUESTS, RECEIVE_DIRECT_REQUEST, REMOVE_DIRECT_REQUEST
} from '../actions/direct_request_actions';

const DirectRequestsReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_ALL_DIRECT_REQUESTS:
            return Object.assign({}, state, action.directRequests)
        case RECEIVE_DIRECT_REQUEST:
            return Object.assign({}, state, {[action.directRequest.id]: action.directRequest});
        case REMOVE_DIRECT_REQUEST:
            let nextState = Object.assign({}, state);
            delete nextState[[action.requestId]];
            return nextState;
        default:
            return state;
    }
};

export default DirectRequestsReducer;