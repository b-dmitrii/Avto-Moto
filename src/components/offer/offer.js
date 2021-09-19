import React, { useContext, useState } from 'react';

import { MyContext } from '../../context';
import Gallery from '../gallery/gallery';
import OfferDescription from '../offer-description/offer-description';
import CharacteristicsList from '../characteristics-list/characteristics-list';
import Tabs from '../tabs/tabs';
import Reviews from '../reviews/reviews';
import Contacts from '../contacts/contacts';

const Offer = () => {  
  const {characteristics, reviews} = useContext(MyContext)
  const [review, setReview] = useState([...reviews]);

console.log(review)

  const onReviewAdd = (review) => {
    setReview((prevReviews) => [
      review,
      ...prevReviews
    ]);    
  };

  return (
    <section className="offer">
      <div className="container">
        <Gallery />
        <OfferDescription /> 
        <Tabs>
          <CharacteristicsList characteristics={characteristics} />
          <Reviews reviews={review} onReviewAdd={onReviewAdd}/>
          <Contacts />
        </Tabs>      
      </div>
    </section>
  );
};

export default Offer;