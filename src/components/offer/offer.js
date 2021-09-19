import React, { useContext } from 'react';

import { MyContext } from '../../context';
import Gallery from '../gallery/gallery';
import OfferDescription from '../offer-description/offer-description';
import CharacteristicsList from '../characteristics-list/characteristics-list';
import Tabs from '../tabs/tabs';
import Reviews from '../reviews/reviews';
import Contacts from '../contacts/contacts';

const Offer = () => {  
  const {characteristics, reviews} = useContext(MyContext)
  return (
    <section className="offer">
      <div className="container">
        <Gallery />
        <OfferDescription /> 
        <Tabs>
          <CharacteristicsList characteristics={characteristics} />
          <Reviews reviews={reviews}/>
          <Contacts />
        </Tabs>      
      </div>
    </section>
  );
};

export default Offer;