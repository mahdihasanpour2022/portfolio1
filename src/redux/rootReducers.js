import { combineReducers } from "redux";
import commentReducer from "../redux/comment/commentReducer";

const rootReducers = combineReducers({
  commentState: commentReducer,
});

export default rootReducers;