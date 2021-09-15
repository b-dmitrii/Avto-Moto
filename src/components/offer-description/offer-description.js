import React, { useContext } from 'react';


import Advantages from '../advantages/advantages';

import { MyContext } from '../../context';

const OfferDescription = () => {
  const { title, configuration, price, oldPrice } = useContext(MyContext);

  return (
    <section className='offer-description'>
      <h2 className="offer-description__title">{title}</h2>
      {/* <Advantages additionalClass="offer-info__configuration" items={configuration} /> */}
      <div className="offer-description__price-container">
        <span className="offer-description__price">
          {price} ₽
        </span>
        {
          price.old ?
            <span className="offer-description__price offer-description__price--old">
              {oldPrice}
              <span> ₽</span>
            </span>
            : ``
        }
      </div>
      <div className="offer-description__links-container">
        <a href="" className="link">оставить заявку</a>
        <a href="" className="link link--secondary">в кредит от 11 000 ₽</a>
      </div>
    </section>
  );
};



export default OfferDescription;