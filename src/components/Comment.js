import React from 'react';
// helper function 
import { shorterText } from "../helper_function/helper_function";
// scss 
import Styles from "../assets/style/components_style/Comment.module.scss";


const Comment = ({ data }) => {

  // destructuring for prop data each comment 
  const { id, author, title, comment, image } = data;

  return (
    <>
      <div className={Styles.comment}>
        {/* start Text  */}
        <div className={Styles.commentText}>
          <h5>{shorterText(comment)}</h5>
        </div>

        {/* start image & description  */}
        <div className={Styles.imageAndDescription}>
          <img src={image} alt={id} className={Styles.image} />

          {/* start description  */}
          <div className={Styles.description}>
            <h6>{author}</h6>
            <p>{title}</p>
          </div>

        </div>
        {/* end image & description  */}

      </div>
    </>
  );
};

export default Comment;