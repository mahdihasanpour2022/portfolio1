import React from 'react';
import { renders_list } from "../data_service/renders_list";
// react-medium-image-zoom 
// import Zoom from 'react-medium-image-zoom'
// import 'react-medium-image-zoom/dist/styles.css'
// scss 
import Styles from "../assets/style/components_style/OurRender.module.scss";

const OurRender = () => {

  return (
    <>
      <div className="container">
        <div className="row">
          <p className={Styles.pStyle}>Renders</p>
          <div className={Styles.renderGridBox}>
            {renders_list.map(item => <img src={item} alt="" />)}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurRender;