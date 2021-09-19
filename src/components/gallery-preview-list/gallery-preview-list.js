import React from "react";

import GalleryPreviewItem from "../gallery-preview-item/gallery-preview-item";

const GalleryPreviewList = ({ images }) => {
  return (
    <ul className="gallery__previews-list">
      {images.map((img) => (
        <GalleryPreviewItem {...img} />
      ))}
    </ul>
  );
};

export default GalleryPreviewList;
