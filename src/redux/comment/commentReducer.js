import {comments_LC} from "../../local_storage/localStorage";

const initialCommentState = {
  comments: localStorage.getItem("comments") ?JSON.parse( localStorage.getItem("comments")): [],
};

const commentReducer = (state = initialCommentState, action) => {
  switch (action.type) {
    case "ADD_COMMENTS":
      comments_LC(action.payload)
      return { ...state, comments: action.payload }
    default:
      return state;
  }
}

export default commentReducer;