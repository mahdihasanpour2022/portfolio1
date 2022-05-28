import React from 'react';
// scss 
import Styles from "../assets/style/components_style/Comment.module.scss";


const Comment = ({ data }) => {


  const { id, author, title, comment, image } = data;

  console.log()

  return (
    <>
      <div className={Styles.comment}>
        <div className={Styles.textUp}>
          <h5>{comment}</h5>
        </div>
        <div className={Styles.contentDown}>
          <img src={image} alt={id} />
          <div>
            <p>{author}</p>
            <h5>{title}</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comment;