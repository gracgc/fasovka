import React from "react";
import c from './Navbar.module.css'
import {NavLink} from "react-router-dom";


const Navbar = () => {

    return (
        <div className={c.nav}>
            <NavLink to="/contacts" className={c.navButton} activeClassName={c.activeLink}>
                О нас
            </NavLink>

            <NavLink to="/goods" className={c.navButton} activeClassName={c.activeLink}>
                Товары
            </NavLink>
        </div>
    );
};

export default Navbar;
