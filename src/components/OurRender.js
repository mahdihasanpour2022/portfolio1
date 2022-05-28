import React from 'react';
// image-magnify 
// import ReactImageMagnify from 'react-image-magnify';
// react-medium-image-zoom 
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
// scss 
import Styles from "../assets/style/components_style/OurRender.module.scss";

const OurRender = () => {

  return (
    <>
      <div className={`${Styles.rendersContainer} container`}>
        <div className="row m-0">
          <p>Renders</p>
          <div className={Styles.renderGridBox}>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default OurRender;