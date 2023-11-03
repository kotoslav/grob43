import React from 'react';
import { useHistory } from 'react-router-dom';
import { SHOP_ROUTE, CONTACTS_ROUTE } from '../utils/consts';

const NavBar = () => {
    const history = useHistory();

    return (
    <div className="header__top">
        <nav className="nav">
            <div className="nav__logo">
                <a className="logo"
                href="/"
                onClick={e => {
                  e.preventDefault();
                  history.push(SHOP_ROUTE)
                }}
                ><img className="logo__img" src="./img/header/logo.svg" alt="logo"/></a>
            </div>
            <div className="nav__conacts">
                <div className="img-phone"><img className="img-phone__icon"src="./img/header/phone.svg" alt="Телефон"/></div>
                <div className="phone">
                    <a className="phone__number" href="tel:89128252333">+7 (912) 825-23-33</a>
                    <a className="phone__number" href="tel:89127032010">+7 (912) 703-20-10</a>
                </div>
            </div>
            <ul className="nav__list">
                <li className="nav__item">
                <a
                className="nav__link"
                href="/"
                onClick={e => {
                  e.preventDefault();
                  history.push(SHOP_ROUTE)
                }}

                >Главная</a></li>
                <li className="nav__item">
                <a
                className="nav__link"
                href="/contacts"
                onClick={e => {
                  e.preventDefault();
                  history.push(CONTACTS_ROUTE)
                }}
                >Контакты</a></li>
            </ul>
        </nav>
    </div>
    );
};

export default NavBar;
