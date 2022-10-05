import React from "react";
import "./Product.css";
import Productimage from "./Product_image";

const Product = () => {
  return (
    <>
      <div className="product">
        <h2>Products</h2>
        <div class="doorImagesGrid">
          {Productimage?.map((v, i) => {
            return (
              <div>
                <img src={v?.img} className="Product_image" />
              </div>
            );
          })}
        </div>
        <div class="doorImagesGrid">
          {Productimage?.map((v, i) => {
            return (
              <div>
                <img src={v?.img} className="Product_image" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;
{/* <div>
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
</div> */}