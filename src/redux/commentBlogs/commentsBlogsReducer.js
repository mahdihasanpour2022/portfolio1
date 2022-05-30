import { comments_LC } from "../../local_storage/localStorage";
import { blogs_LC } from "../../local_storage/localStorage";

const initialCommentState = {
  comments: localStorage.getItem("comments") ? JSON.parse(localStorage.getItem("comments")) : [],
  blogs: localStorage.getItem("blogs") ? JSON.parse(localStorage.getItem("blogs")) : [],

};

const commentsBlogsReducer = (state = initialCommentState, action) => {
  switch (action.type) {
    case "ADD_COMMENTS":
      comments_LC(action.payload)
      return { ...state, comments: action.payload };
    case "GET_BLOGS":
      blogs_LC(action.payload)
      return { ...state, blogs: action.payload }
    default:
      return state;
  }
}

export default commentsBlogsReducer;