import React from "react";
import { Product } from "./Product";

const Image = () => {
  return (
    <div>
      <img src={Product.image} alt="" />
    </div>
  );
};

export default Image;
