import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import spotsReducer from "./spots_reducer";
import citiesReducer from "./cities_reducers";

const entitiesReducer = combineReducers({
    users: usersReducer,
    spots: spotsReducer,
    cities: citiesReducer 
});

export default entitiesReducer;