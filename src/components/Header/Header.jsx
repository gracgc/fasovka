import React from "react";
import c from './Header.module.css';

const Header = (props) => {
    return (
        <header className={c.header}>
            <div className={c.logo}>
                <div className={c.logoText}>НАЗВАНИЕ КОМПАНИИ</div>
            </div>
            <div className={c.contacts}>
                Наша электронная почта: email@email.ru<br/> Наш телефон: +7(999)-999-00-00
            </div>
        </header>
    )
};


export default Header;
