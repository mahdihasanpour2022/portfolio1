import React from 'react';
import {NavLink} from "react-router-dom";
import {useDispatch ,useSelector} from "react-redux";
// action creator 
import {closeSideMenu_AC} from "../redux/menus/sidemenu/sideMenuActionCreator";
// scss 
import Styles from "../assets/style/components_style/sidebar.module.scss";
// icons 
import { IoIosClose } from "react-icons/io";

const SideBar = () => {


  const dispatch = useDispatch();
  const {sidemenu} = useSelector(state => state.menuState)


  return (
    <>
      <div className={sidemenu ? `${Styles.sideMenuOpen} ${Styles.sideMenu}`: Styles.sideMenu}>
        <div>
        <IoIosClose className={Styles.closeMenu} onClick={()=>dispatch(closeSideMenu_AC())}/>
        </div>
        <div className={Styles.menuItem}>
        <h4>Archo</h4>
        <hr className={Styles.horzLine} />
        <ul className={Styles.navbarmenu}>
          <li>
            <NavLink to="/" className={navData => navData.isActive ? `${Styles.navlink} ${Styles.active}` : Styles.navlink}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" className={navData => navData.isActive ? `${Styles.navlink} ${Styles.active}` : Styles.navlink}>Portfolio</NavLink>
          </li>
          <li>
            <NavLink to="/blogs" className={navData => navData.isActive ? `${Styles.navlink} ${Styles.active}` : Styles.navlink}>Blogs</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={navData => navData.isActive ? `${Styles.navlink} ${Styles.active}` : Styles.navlink}>Contact</NavLink>
          </li>
        </ul>
        </div>
      </div>
    </>
  );
};

export default SideBar;