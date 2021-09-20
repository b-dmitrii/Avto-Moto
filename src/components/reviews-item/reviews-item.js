import React from "react";
import PropTypes from "prop-types";

import {formatDistance} from "date-fns";
import ru from "date-fns/locale/ru";
import Rating from "../rating/rating";

const ReviewsItem = ({name, plus, minus, comments, stars, time}) => {
  return (
    <li className="reviews__item reviews__item--main">
      <h4 className="reviews__author">{name}</h4>
      <ul className="reviews__list reviews__list--options">
        <li className="reviews__item reviews__item--advantages">
          <h5 className="reviews__subtitle">Достоинства</h5>
          <p className="reviews__value">{plus}</p>
        </li>
        <li className="reviews__item reviews__item--disadvantages">
          <h5 className="reviews__subtitle">Недостатки</h5>
          <p className="reviews__value">{minus}</p>
        </li>
        <li className="reviews__item">
          <h5 className="reviews__subtitle">Комментарий</h5>
          <p className="reviews__value">{comments}</p>
        </li>
      </ul>
      <Rating value={stars} />
      <div className="reviews__footer">
        <span className="reviews__posted">
          {formatDistance(new Date(time), new Date(), {
            locale: ru,
            addSuffix: true,
          })}
        </span>
        <a href="ответ" className="reviews__reply-link">
          Ответить
        </a>
      </div>
    </li>
  );
};

ReviewsItem.propTypes = {
  name: PropTypes.string.isRequired,
  plus: PropTypes.string.isRequired,
  minus: PropTypes.string.isRequired,
  comments: PropTypes.string.isRequired,
  stars: PropTypes.number,
  time: PropTypes.string,
};

export default ReviewsItem;
