import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";

// action creator 
import fetchData from '../redux/comment/commentActionCreator';
// scss 
import Styles from "../assets/style/components_style/Header.module.scss";

const Header = () => {

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchData())
  }, [])

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