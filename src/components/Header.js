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
  const { sidemenu } = useSelector(state => state.menuState)

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {/* start div that absoluted  */}
          <div className={Styles.headerContainer}>
            <div className={Styles.headerContent}>
              <h1>Elegant & Unique Design</h1>
              <p>Right design and right ideas matter a lot of in interior design business.a style that makes a statement.</p>
              <button><Link to="/blogs">Read More</Link></button>
            </div>
          </div>
          {/* end div that absoluted  */}


          {/*start menu icon and menubar component  */}
          <div>
            <SideBar />
            {/* conditional rendering for menu hamburger icon */}
            {!sidemenu &&
              <CgMenuLeft onClick={() => dispatch(openSideMenu_AC(true))} className={Styles.menuIcon} />
            }
          </div>
          {/*end menu icon and menubar component  */}
        </div>
      </div>
    </>
  );
};

export default Header;