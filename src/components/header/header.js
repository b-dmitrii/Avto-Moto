import React from 'react';

import logo from '../../assets/image/svg/logo.svg';

import { navItem } from '../../utils';

const Header = () => {
  return (
    <header className="page__header header">
      <div className="container">
        <a href="/" className="header__logo" >
          <img className="header__logo-img" src={logo} alt="Логотип интернет-магазина - Avto-Moto" width="134" height="55" />
        </a>
        <nav className="header__nav">
          <ul className="header__nav-list">
            {
              navItem.map(item => (
                <li className="header__nav-item" key={`header__nav-${item}`}>
                <a href={item} className="header__nav-link">
                  {item}
                </a>
              </li>
              ))
            }           
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;