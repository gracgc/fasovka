import React from "react";
import c from './Header.module.css';

const Header = (props) => {
    return (
        <header className={c.header}>
            <div className={c.logo}>
                Бублицкий
            </div>
            <div className={c.contacts}>
                Наша электронная почта: ops_krup@mail.ru<br/> Наш телефон: 8-4872-39-12-01 <br/>
                Факс: 8-4872-39-67-93
            </div>
        </header>
    )
};


export default Header;
