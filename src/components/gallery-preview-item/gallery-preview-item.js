import React from "react";

const GalleryPreviewItem = ({small, alt}) => {
  
  return (
    <li className="gallery__preview">
      <img
        className="gallery__small-img"
        src={small}
        alt={alt}
        width="128"
        height="80"
      />
    </li>
  );
};

export default GalleryPreviewItem;
