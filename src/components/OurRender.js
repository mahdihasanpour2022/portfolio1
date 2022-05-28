import React from 'react';
// image-magnify 
import ReactImageMagnify from 'react-image-magnify';
// scss 
import Styles from "../assets/style/components_style/OurRender.module.scss";

const OurRender = () => {

  return (
    <>
      <div className={`${Styles.rendersContainer} container`}>
        <div className="row">
          <p>Renders</p>

          <div style={{ width: "300px", height: "300px" }}>

            <ReactImageMagnify {...{
              smallImage: {
                alt: 'Wristwatch by Ted Baker London',
                isFluidWidth: true,
                src: ax1,
                // width: 1500,
                // height: 1500
              },
              largeImage: {
                src: ax1,
                width: 2000,
                height: 2000
              }
            }} />
          </div>

        </div>
      </div>
    </>
  );
};

export default OurRender;