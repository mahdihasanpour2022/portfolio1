import { combineReducers } from "redux";
import commentReducer from "../redux/comment/commentReducer";
import menuReducer from "../redux/menus/sidemenu/sideMenuReducer";
import portfolioReducer from "../redux/portfolio/portfolioReducer";

const rootReducers = combineReducers({
  commentState: commentReducer,
  menuState : menuReducer,
  portfolioState:portfolioReducer,
});

export default rootReducers;