import React, {useContext, useState} from "react";

import GalleryPreviewList from "../gallery-preview-list/gallery-preview-list";

import { MyContext } from "../../context";

const Gallery = () => {
  const {images} = useContext(MyContext)
  const [currentSlide, setCurrentSlide] = useState(0);
  const slide = images[currentSlide]
  
  return (
    <section className="gallery">
      <div className="gallery__img-container">
        <img
          className="gallery__big-img"
          src={slide.big}
          alt={slide.alt}
          width="600"
          height="375"
        />
      </div>
      <div className="gallery__control-container">
        <button className="gallery__button gallery__button--prev"
         onClick={() => setCurrentSlide((prev) => prev - 1)}
         disabled={currentSlide === 0}>
          Просмотреть следующий слайд
        </button>
        <GalleryPreviewList />
        <button
          className="gallery__button gallery__button--next" 
          onClick={() => setCurrentSlide((prev) => prev + 1)} 
          disabled={currentSlide === images.length - 1}       
        >
          Просмотреть предыдущий слайд
        </button>
      </div>
    </section>
  );
};

export default Gallery;
