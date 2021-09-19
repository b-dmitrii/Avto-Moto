import React, { useState } from "react";

const RatingInput = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <div className="reviews-form__stars stars">
      {Array(5)
        .fill("")
        .map((star, idx) => {
          const ratingValue = idx + 1;

          return (
            <>
              <label className="star__label">
                <input
                  className="stars__input visually-hidden"
                  name="rating"
                  value={ratingValue}
                  type="radio"
                  onClick={() => setRating(ratingValue)}
                  
                />
                <svg 
                  className="stars__icon" 
                  fill={ratingValue <= (hover || rating) ? '#d12136': '#bdbec2'} 
                  width="27" 
                  height="25"
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(null)}>
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </>
          );
        })}
    </div>
  );
};

export default RatingInput;
