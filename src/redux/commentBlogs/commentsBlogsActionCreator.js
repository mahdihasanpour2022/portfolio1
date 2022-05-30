import { comments_list } from "../../data_service/coments_list.js";
import { blogs_list } from "../../data_service/blogs_list";

const addComment_AC = (data) => {
  return { type: "ADD_COMMENTS", payload: data }
}
const getBlogs_AC = data=>{
  return {type:"GET_BLOGS",payload:data}
}
const fetchData = () => {
  return dispatch => {
    dispatch(addComment_AC(comments_list))
    dispatch(getBlogs_AC(blogs_list))
  }
}
export default fetchData;

