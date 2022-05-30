import React from 'react';
import {Link} from "react-router-dom";
// scss 
import Styles from "../assets/style/components_style/NotFound.module.scss";

const NotFound = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          {/* start notfound */}
          <div className={Styles.notfound}>
            <div className={Styles.text} >
              <h2>Page Not Found</h2>
              <span>error 404</span>
            </div>
            <Link to="/">&laquo;&laquo; Go back to Home</Link>
          </div>
          {/* end notfound */}
        </div>
      </div>
    </>
  );
};

export default NotFound;