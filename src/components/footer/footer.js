import React from "react";

import {footerNavItem} from "../../utils";

const Footer = () => {
  return (
    <footer className="page__footer footer">
      <div className="container">
        <nav className="footer__nav footer__nav--secondary">
          <ul className="footer__nav__list">
            {footerNavItem.map((item) => {
              return (
                <li className="footer__nav__item" key={`footer__nav__item-${item}`}>
                  <a href='' className="footer__nav__link">
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
