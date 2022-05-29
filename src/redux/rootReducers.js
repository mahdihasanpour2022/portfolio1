import { combineReducers } from "redux";
import commentReducer from "../redux/comment/commentReducer";
import menuReducer from "../redux/menus/sidemenu/sideMenuReducer";

const rootReducers = combineReducers({
  commentState: commentReducer,
  menuState : menuReducer,
});

export default rootReducers;