import React from "react";
import GalleryTitle from "./GalleryTitle";
import GalleryCard from "./GalleryCard";
const Gallery = () => {
  return (
    <div className="gallery-page text-uppercase">
      <GalleryTitle />
      <GalleryCard />
    </div>
  );
}

export default Gallery;
