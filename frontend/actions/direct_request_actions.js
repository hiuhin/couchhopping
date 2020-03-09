import * as APIUtil from '../util/direct_request_util';

export const RECEIVE_ALL_DIRECT_REQUESTS = 'RECEIVE_ALL_DIRECT_REQUESTS';
export const RECEIVE_DIRECT_REQUEST = 'RECEIVE_DIRECT_REQUEST';
export const REMOVE_DIRECT_REQUEST = 'REMOVE_DIRECT_REQUEST';

export const receiveDirectRequests = directRequests => ({
    type: RECEIVE_ALL_DIRECT_REQUESTS,
    directRequests
})

export const receiveDirectRequest = directRequest => ({
    type: RECEIVE_DIRECT_REQUEST,
    directRequest
});

export const removeDirectRequest = requestId => ({
    type: REMOVE_DIRECT_REQUEST,
    requestId
});

export const fetchDirectRequests = () => dispatch => (
    APIUtil.fetchDirectRequests().then(payload => (
        dispatch(receiveDirectRequests(payload))
    ))
);

export const fetchDirectRequest = requestId => dispatch => (
    APIUtil.fetchDirectRequest(requestId).then(payload => (
        dispatch(receiveDirectRequest(payload))
    ))
);

export const createDirectRequest = request => dispatch => (
    APIUtil.createDirectRequest(request).then(payload => (
        dispatch(receiveDirectRequest(payload))
    ))
);

export const deleteDirectRequest = requestId => dispatch => (
    APIUtil.deleteDirectRequest(requestId).then(() => (
        dispatch(removeDirectRequest(requestId))
    ))
);
