import React from 'react';

import Gallery from '../gallery/gallery';


const Main = () => {
  return (
    <main className="page__main">
      <h1 className="visually-hidden">Avto-Moto - страница выбора автомобиля</h1> 
      <Gallery />     
    </main>
  );
};

export default Main;