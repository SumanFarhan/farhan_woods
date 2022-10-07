import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import "./Product.css";
import Productimage from "./Product_image";

const Product = () => {
  return (
    <>
      <div className="product">
        <h2>Products</h2>
        <Box sx={{ width: '100%' }} className="ProductImagesGrid">
          <Grid container rowSpacing={0.1} spacing={0.1}>
            {Productimage?.map((v, i) => {
              return (
                <Grid item xs={6} sm={4} md={4} lg={2.4}>
                  <img src={v?.img} className="Product_image" />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </div>
      <div class="productButton">
        <div><button className="">View all Products</button></div>
      </div>
    </>
  );
};

export default Product;
