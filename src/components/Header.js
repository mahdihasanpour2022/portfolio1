import React, { useEffect } from 'react';
// import {useDispach , useSelector} from "react-redux";
// action creator 
// import {addComment_AC} from "";
import fetchData from '../redux/comment/commentActionCreator';
// comment _list 
// import {comments_list} from "../data_service/coments_list";
// scss 
import Styles from "../assets/style/components_style/Header.module.scss";

const Header = () => {

  // const dispatch =useDispach();
  // const data = useSelector(state => state.commentState)

useEffect(()=>{
  fetchData()
  // dispatch(addComment_AC(comments_list))
},[])

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className={Styles.headerContainer}>
            <div className={Styles.headerContent}>
              <h1>Elegant & Unique Design</h1>
              <p>Right design and right ideas matter a lot of in interior design business.a style that makes a statement.</p>
              <button>Read More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;