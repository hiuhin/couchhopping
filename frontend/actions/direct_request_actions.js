import * as APIUtil from '../util/direct_request_util';

export const RECEIVE_ALL_DIRECT_REQUESTS = 'RECEIVE_ALL_DIRECT_REQUESTS';
export const RECEIVE_DIRECT_REQUEST = 'RECEIVE_DIRECT_REQUEST';
export const REMOVE_DIRECT_REQUEST = 'REMOVE_DIRECT_REQUEST';
export const RECEIVE_DIRECT_REQUEST_ERRORS = "RECEIVE_DIRECT_REQUEST_ERRORS";
export const CLEAR_DIRECT_REQUEST_ERRORS = "CLEAR_DIRECT_REQUEST_ERRORS";

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

export const receiveDirectRequestErrors = errors => ({
    type: RECEIVE_DIRECT_REQUEST_ERRORS,
    errors
})

export const clearDirectRequestErrors = () => ({
  type: CLEAR_DIRECT_REQUEST_ERRORS,
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
    APIUtil.createDirectRequest(request).then((payload) => (
        dispatch(receiveDirectRequest(payload))
    ), err => (
        dispatch(receiveDirectRequestErrors(err.responseJSON))
    ))
);

export const updateDirectRequest = request => dispatch => (
    APIUtil.updateDirectRequest(request).then(payload => (
        dispatch(receiveDirectRequest(payload))
    ))
);

export const deleteDirectRequest = requestId => dispatch => (
    APIUtil.deleteDirectRequest(requestId).then(() => (
        dispatch(removeDirectRequest(requestId))
    ))
);
