export const fetchUsers = (cityId) => (
    $.ajax({
        method: 'GET',
        url: `api/users?city_id=${cityId}`
    })
);

export const fetchUser = userId => (
    $.ajax({
        method: 'GET',
        url: `api/users/${userId}`
    })
);

export const updateUser = user => (
    $.ajax({
        method: 'PATCH',
        url: `api/users/${user.id}`,
        data: { user }
    })
);