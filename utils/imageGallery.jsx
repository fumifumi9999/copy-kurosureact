import React from 'react';

function ImageGallery({ images }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {images.map((image, index) => (
        <img key={index} src={image.webformatURL} alt={image.tags} className="w-full h-auto" />
      ))}
    </div>
  );
}

export default ImageGallery;