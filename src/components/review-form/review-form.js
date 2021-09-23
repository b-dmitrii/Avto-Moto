import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";

const ReviewsForm = ({onSubmit}) => {
  const [name, setName] = useState(``);
  const [plus, setMinus] = useState(``);
  const [minus, setPlus] = useState(``);
  const [comments, setComments] = useState(``);
  const [stars, setStars] = useState(null);
  const [hover, setHover] = useState(null);

  const onFormSubmit = (evt) => {
    evt.preventDefault();

    const now = new Date();

    const data = {
      name,
      plus,
      minus,
      comments,
      stars,
      time: now,
    };

    localStorage.setItem(`name`, name);
    localStorage.setItem(`plus`, plus);
    localStorage.setItem(`minus`, minus);
    localStorage.setItem(`comments`, comments);
    localStorage.setItem(`stars`, stars);

    onSubmit(data);
  };

  useEffect(() => {
    setName(() => localStorage.getItem(`name`) || ``);
    setMinus(() => localStorage.getItem(`plus`) || ``);
    setPlus(() => localStorage.getItem(`minus`) || ``);
    setComments(() => localStorage.getItem(`comments`) || ``);
    setStars(() => +localStorage.getItem(`stars`) || null);
  }, []);

  return (
    <form action="post" className="reviews-form" onSubmit={onFormSubmit}>
      <h2 className="reviews-form__title">Оставить отзыв </h2>
      <label className="visually-hidden" htmlFor="reviews-form-name">
        Имя
      </label>
      <div className="reviews-form__required">
        <input
          className="reviews-form__input"
          id="reviews-form-name"
          type="text"
          placeholder="Имя"
          required
          autoFocus
          onChange={(evt) => {
            setName(evt.target.value);
          }}
          value={name}
        />
      </div>
      <label className="visually-hidden" htmlFor="reviews-form-advantages">
        Достоинства
      </label>
      <input
        className="reviews-form__input"
        id="reviews-form-advantages"
        type="text"
        placeholder="Достоинства"
        onChange={(evt) => {
          setMinus(evt.target.value);
        }}
        value={plus}
      />
      <label className="visually-hidden" htmlFor="reviews-form-disadvantages">
        Недостатки
      </label>
      <input
        className="reviews-form__input"
        id="reviews-form-disadvantages"
        type="text"
        placeholder="Недостатки"
        onChange={(evt) => {
          setPlus(evt.target.value);
        }}
        value={minus}
      />
      <div className="reviews-form__rating-container">
        <h3 className="reviews-form__subtitle">Оцените товар:</h3>
        <div className="reviews-form__stars">
          {Array(5)
            .fill(``)
            .map((star, idx) => {
              const ratingValue = idx + 1;

              return (
                <React.Fragment key={`star-${idx}`}>
                  <label className="star__label">
                    <input
                      className="stars__input visually-hidden"
                      name="rating"
                      value={ratingValue}
                      type="radio"
                      onClick={() => setStars(ratingValue)}
                    />
                    <svg
                      className="stars__icon"
                      fill= {
                        ratingValue <= (hover || stars) ? `#d12136` : `#bdbec2`
                      }
                      width="27"
                      height="25"
                      onMouseEnter={() => setHover(ratingValue)}
                      onMouseLeave={() => setHover(null)}
                    >
                      <use xlinkHref="#icon-star"></use>
                    </svg>
                  </label>
                </React.Fragment>
              );
            })}
        </div>
      </div>
      <label className="visually-hidden" htmlFor="reviews-form-comment">
        Комментарий
      </label>
      <div className="reviews-form__required reviews-form__required--comment">
        <textarea
          className="reviews-form__comment reviews-form__input"
          id="reviews-form-comment"
          placeholder="Комментарий"
          required
          onChange={(evt) => {
            setComments(evt.target.value);
          }}
          value={comments}
        />
      </div>
      <button
        className="reviews-form__submit reviews-form__submit-button"
        type="submit"
        disabled={name.length === 0 || comments.length === 0 || stars === null}
      >
        оставить отзыв
      </button>
    </form>
  );
};

ReviewsForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ReviewsForm;
