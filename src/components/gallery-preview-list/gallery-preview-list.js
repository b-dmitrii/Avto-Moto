import React from "react";

import GalleryPreviewItem from "../gallery-preview-item/gallery-preview-item";

const GalleryPreviewList = ({ images }) => {
  return (
    <ul className="gallery__previews-list">
      {images.map((img, idx) => (
        <GalleryPreviewItem key={`gallery__previews-${idx}`} {...img} />
      ))}
    </ul>
  );
};

export default GalleryPreviewList;
