import React, { useContext } from 'react';

import { MyContext } from '../../context';

import CharacteristicsItem from '../characteristics-item/characteristics-item';


const CharacteristicsList = () => {
  const {characteristics} = useContext(MyContext);
  
  return (
    <ul className="char__list">
      {
        characteristics.map((item, idx) => <CharacteristicsItem key={`char-item-${idx}`} {...item} />)
      }
    </ul>
  );
};

export default CharacteristicsList;