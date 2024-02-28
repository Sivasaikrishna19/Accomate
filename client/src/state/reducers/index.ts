import { combineReducers } from "@reduxjs/toolkit";
import accommodationsReducer from "./accommodationsReducer/accommodationsReducer";
import authReducer from "./authReducer/authReducer";

const reducers = combineReducers({
  auth: authReducer,
  accommodations: accommodationsReducer,
});

export default reducers;
