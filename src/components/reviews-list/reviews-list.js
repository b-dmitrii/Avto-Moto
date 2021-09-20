import React from "react";
import PropTypes from 'prop-types';
import ReviewsItem from "../reviews-item/reviews-item";

const ReviewsList = ({reviews}) => {
  return (
    <ul className="reviews__list reviews__list--main">
      {reviews.map((item, idx) => (
        <ReviewsItem key={`reviews-item-${idx}`} {...item} />
      ))}
    </ul>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired
};

export default ReviewsList;
