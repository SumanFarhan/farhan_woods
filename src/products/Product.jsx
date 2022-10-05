import React from "react";
import "./Product.css";
import Productimage from "./Product_image";

console.log(Productimage[0].img);

const Product = () => {
  return (
    <>
      <div className="product">
        <h2>Products</h2>

        <div class="doorImagesGrid">
          <div>
            <img src={Productimage[0].img} className="Product_image" />
          </div>
          <div>
            <img src={Productimage[0].img} className="Product_image" />
          </div>
          <div>
            <img src={Productimage[0].img} className="Product_image" />
          </div>
          <div>
            <img src={Productimage[0].img} className="Product_image" />
          </div>
          <div>
            <img src={Productimage[0].img} className="Product_image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
