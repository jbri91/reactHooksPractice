import React from "react";
import ImageToggleOnMouseOver from "../src/ImageToggleOnMouseOver";

const ImageChangeOnMouseOver = () => {
  return (
    <div>
      <ImageToggleOnMouseOver
        primaryImg="/static/images/bw/Manhattan_Scene.jpg"
        secondaryImg="/static/images/color/Manhattan_Scene.jpg"
        alt=""
      />
    </div>
  );
};

export default ImageChangeOnMouseOver;
