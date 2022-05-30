import { combineReducers } from "redux";
import commentsBlogsReducer from "../redux/commentBlogs/commentsBlogsReducer";
import menuReducer from "../redux/menus/sidemenu/sideMenuReducer";
import portfolioReducer from "../redux/portfolio/portfolioReducer";

const rootReducers = combineReducers({
  commentSBlogsState: commentsBlogsReducer,
  menuState : menuReducer,
  portfolioState:portfolioReducer,
});

export default rootReducers;