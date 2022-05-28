import { comments_list } from "../data_service/coments_list";


const addComment_AC = (data) => {
  return { type: "ADD_COMMENTS", payload: data }
}

const fetchData = () => {
  return (dispatch => {
    dispatch(addComment_AC(comments_list))
  })
}
export default fetchData;

