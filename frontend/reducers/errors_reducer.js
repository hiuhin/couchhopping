import { combineReducers } from "redux";

import sessionErrorsReducer from "./session_errors_reducer";
import directRequestErrorsReducer from "./direct_requests_errors_reducer";

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    directRequest: directRequestErrorsReducer
});

export default errorsReducer;