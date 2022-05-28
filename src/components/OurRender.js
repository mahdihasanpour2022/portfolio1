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
            <Zoom>
              <picture>
                <source media="(max-width: 800px)" srcSet="/path/to/teAraiPoint.jpg" />
                <img
                  alt="that wanaka tree"
                  src="/path/to/thatwanakatree.jpg"
                  width="500"
                />
              </picture>
            </Zoom>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurRender;