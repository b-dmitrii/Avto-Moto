import React from 'react';
import PropTypes from 'prop-types';

const PERCENT_PER_RATE = 20;

const Rating = ({
  value
}) => {
  return (
    <div className={`rating `}>
      <span className="rating__stars">
        <span style={{width: `${PERCENT_PER_RATE * value}%`}}></span>
      </span>
      <span className="rating__recomendation">{value < 3 ? `Не советует` : `Советует`}</span>
      <span className="visually-hidden">Рейтинг</span>
    </div>
  );
};

Rating.propTypes = {
  value: PropTypes.number
};

export default Rating;
