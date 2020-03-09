import { faWindowRestore } from "@fortawesome/free-solid-svg-icons";

export const fetchCities = () => (
    $.ajax({
        method: 'GET',
        url: `api/cities/`
    })
);

export const fetchCity = cityId => (
    $.ajax({
        method: 'GET',
        url: `api/cities/${cityId}`
    })
);
