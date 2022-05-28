import React from 'react';
// helper function 
import {shorterText} from "../helper_function/helper_function";
 // scss 
import Styles from "../assets/style/components_style/Comment.module.scss";


const Comment = ({ data }) => {


  const { id, author, title, comment, image } = data;


  return (
    <>
      <div className={Styles.comment}>
        <div className={Styles.commentText}>
          <h5>{shorterText(comment)}</h5>
        </div>
        <div className={Styles.imageAndDescription}>
          <img src={image} alt={id} className={Styles.image}/>
          <div className={Styles.description}>
            <h6>{author}</h6>
            <p>{title}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comment;