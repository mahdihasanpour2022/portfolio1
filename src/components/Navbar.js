import React from 'react';
import {NavLink} from "react-router-dom";
// scss 
import Styles from "../assets/style/components_style/Navbar.module.scss";


const Navbar = () => {
  return (
    <>
      <nav>
        <ul className={Styles.navbarMenu}>
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
      </nav>
    </>
  );
};

export default Navbar;