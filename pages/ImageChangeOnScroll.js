import React from "react";
import ImageToggleOnScroll from "../src/ImageToggleOnScroll";

const ImageChangeOnScroll = () => {
  return (
    <div>
      <ImageToggleOnScroll
        primaryImg="/static/images/bw/Manhattan_Scene.jpg"
        secondaryImg="/static/images/color/Manhattan_Scene.jpg"
        alt=""
      />
    </div>
  );
};

export default ImageChangeOnScroll;
