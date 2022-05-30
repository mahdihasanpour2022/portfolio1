import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// menu action creator  
import { openSideMenu_AC } from "../redux/menus/sidemenu/sideMenuActionCreator";
// components 
import SideBar from "../components/SideBar";
// action creator 
import fetchData from '../redux/commentBlogs/commentsBlogsActionCreator.js';
// scss 
import Styles from "../assets/style/components_style/Header.module.scss";
// icon 
import { CgMenuLeft } from "react-icons/cg";

const Header = () => {

  const dispatch = useDispatch();
  const {sidemenu} = useSelector(state => state.menuState)

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  console.log(sidemenu)
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className={Styles.headerContainer}>
            <div className={Styles.headerContent}>
              <h1>Elegant & Unique Design</h1>
              <p>Right design and right ideas matter a lot of in interior design business.a style that makes a statement.</p>
              <button><Link to="/blogs">Read More</Link></button>
            </div>
          </div>
          <div>
            <SideBar />
            {!sidemenu &&
              <CgMenuLeft onClick={() => dispatch(openSideMenu_AC(true))} className={Styles.menuIcon} />
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;