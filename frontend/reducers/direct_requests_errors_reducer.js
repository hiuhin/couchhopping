import { RECEIVE_DIRECT_REQUEST_ERRORS, CLEAR_DIRECT_REQUEST_ERRORS } from "../actions/direct_request_actions";  

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_DIRECT_REQUEST_ERRORS:
      return action.errors;
    case CLEAR_DIRECT_REQUEST_ERRORS:
      return [];
    default:
      return state;
  }
};
