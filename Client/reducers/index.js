import { combineReducers } from "redux";
import doiReducer from "./reducers";

const reducers = combineReducers({
  doi : doiReducer,
})

export default reducers