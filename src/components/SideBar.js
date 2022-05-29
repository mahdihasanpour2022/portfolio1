import React from 'react';
import {useDispatch ,useSelector} from "react-redux";
// action creator 
import {closeSideMenu_AC} from "../redux/menus/sidemenu/sideMenuActionCreator";
// scss 
import Styles from "../assets/style/components_style/sidebar.module.scss";
// icons 
import { GrFormClose } from "react-icons/gr";

const SideBar = () => {


  const dispatch = useDispatch();
  const {sidemenu} = useSelector(state => state.menuState)


  return (
    <>
      <div className={sidemenu ? `${Styles.sideMenuOpen} ${Styles.sideMenu}`: Styles.sideMenu}>
        <div>
        <GrFormClose className={Styles.closeMenu} onClick={()=>dispatch(closeSideMenu_AC())}/>
        </div>
      </div>
    </>
  );
};

export default SideBar;