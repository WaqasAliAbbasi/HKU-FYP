import React from "react";
import { ImageRequest } from "./ImageRequest";
import { ImageServices } from "./ImageServices";

export const Image = () => {
  return (
    <div>
      <h1>Image Pipeline</h1>
      <ImageServices />
      <ImageRequest />
    </div>
  );
};
