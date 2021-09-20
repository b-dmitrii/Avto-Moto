import React, {useContext} from "react";

import {MyContext} from "../../context";
import ConfigurationList from "../configuration-list/configuration-list";

const OfferDescription = () => {
  const {title, configurations, price, oldPrice} = useContext(MyContext);

  return (
    <section className="offer-description">
      <h2 className="offer-description__title">{title}</h2>
      <ConfigurationList configurations={configurations} />
      <div className="offer-description__price-container">
        <span className="offer-description__price">{price} ₽</span>
        {oldPrice ? (
          <span className="offer-description__price offer-description__price--old">
            {oldPrice}
            <span> ₽</span>
          </span>
        ) : (
          ``
        )}
      </div>
      <div className="offer-description__links-container">
        <a href="" className="offer-description__link">
          оставить заявку
        </a>
        <a
          href=""
          className="offer-description__link offer-description__link--secondary"
        >
          в кредит от 11 000 ₽
        </a>
      </div>
    </section>
  );
};

export default OfferDescription;
