import React from "react";

const CharacteristicsItem = ({ type, value }) => {
  console.log(type)
  return (
    <li className="char__item">
      <span className="char__type">{type}</span>
      <span className="char__value">{value}</span>
    </li>
  );
};

export default CharacteristicsItem;
