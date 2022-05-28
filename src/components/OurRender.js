import React from 'react';
import { renders_list } from "../data_service/renders_list";
// uuid 
import {v4} from "uuid";
// scss 
import Styles from "../assets/style/components_style/OurRender.module.scss";

const OurRender = () => {

  return (
    <>
      <div className="container mb-5">
        <div className="row">
          <p className={Styles.pStyle}>Renders</p>
          <div className={Styles.renderGridBox}>
            {renders_list.map(item => <img src={item} key={v4()} alt={`${v4()}`} />)}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurRender;