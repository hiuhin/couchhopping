export const fetchSpot = spotId => (
    $.ajax({
        method: 'GET',
        url: `api/spots/${spotId}`
    })
);

export const updateSpot = spotForm => (
    $.ajax({
        method: 'PATCH',
        url: `api/spots/${spotForm.id}`,
        data: { spotForm }
    })
);