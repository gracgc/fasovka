import React from "react";
import c from './Navbar.module.css'
import {NavLink} from "react-router-dom";


const Navbar = () => {

    return (
        <div className={c.nav}>
            <NavLink to="/" className={c.navButton} activeClassName={c.activeLink}>
                    <div className={c.buttonName}>О нас</div>
            </NavLink>

            <NavLink to="/goods" className={c.navButton} activeClassName={c.activeLink}>
                <div className={c.buttonName}>Товары</div>
            </NavLink>
        </div>
    );
};

export default Navbar;
