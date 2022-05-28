const initialCommentState = {
  comments: [],
};

const commentReducer = (state = initialCommentState, action) => {
  switch (action.type) {
    case "ADD_COMMENTS":
      return { ...state, comments: action.payload }
    default:
      return state;
  }
}

export default commentReducer;