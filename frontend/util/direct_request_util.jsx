export const fetchDirectRequests = () => (
    $.ajax({
        method: 'GET',
        url: `api/direct_requests`
    })
)

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

export const createDirectRequest = direct_request => (
    $.ajax({
        method: 'POST',
        url: `api/direct_requests/`,
        data: {direct_request}
    })
);

export const updateDirectRequest = direct_request => (
    $.ajax({
        method: 'PATCH',
        url: `api/direct_requests/${direct_request.id}`,
        data: {direct_request}
    })
)