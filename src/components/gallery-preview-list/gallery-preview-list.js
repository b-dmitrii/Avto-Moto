import React, { useContext } from "react";

import GalleryPreviewItem from "../gallery-preview-item/gallery-preview-item";
import { MyContext } from "../../context";

const GalleryPreviewList = () => {
  const { images } = useContext(MyContext);

  return (
    <ul className="gallery__previews-list">
      {images.map((img) => (
        <GalleryPreviewItem {...img} />
      ))}
    </ul>
  );
};

export default GalleryPreviewList;
