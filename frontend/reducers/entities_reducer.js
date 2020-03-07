import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import spotsReducer from "./spots_reducer";
import citiesReducer from "./cities_reducers";
import DirectRequestsReducer from "./direct_requests_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    spots: spotsReducer,
    cities: citiesReducer,
    directRequests: DirectRequestsReducer
});

export default entitiesReducer;