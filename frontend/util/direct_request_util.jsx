export const fetchDirectRequest = requestId => (
    $.ajax({
        method: 'GET',
        url: `api/direct_requests/${requestId}`
    })
);

export const deleteDirectRequest = requestId => (
    $.ajax({
        method: 'DELETE',
        url: `api/direct_requests/${requestId}`,
    })
);

export const createDirectRequest = request => (
    $.ajax({
        method: 'POST',
        url: `api/direct_requests/`,
        data: {request: request}
    })
);