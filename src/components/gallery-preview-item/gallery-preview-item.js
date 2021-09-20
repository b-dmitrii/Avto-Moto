import React from "react";
import PropTypes from 'prop-types';

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

GalleryPreviewItem.propTypes = {
  small: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default GalleryPreviewItem;
