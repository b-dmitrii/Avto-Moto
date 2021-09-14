import React from 'react';

import logo from '../../assets/image/svg/logo.svg';



const Header = () => {
  return (
    <header className="page__header header">
      <div className="container">
        <a href="/" className="header__logo" >
          <img className="header__logo-img" src={logo} alt="Логотип интернет-магазина - Avto-Moto" width="134" height="55" />
        </a>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <a href="#avto" className="header__nav-link">
                Автомобили
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#contacts" className="header__nav-link">
                Контакты
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#services" className="header__nav-link">
                Услуги
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#vacancy" className="header__nav-link">
                Вакансии
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;