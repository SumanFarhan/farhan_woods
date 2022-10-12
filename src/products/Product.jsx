import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Productimage from "./Product_image";
import Zoom from 'react-reveal/Zoom';
import "./Product.css";

const Product = () => {
  return (
    <>
      <div className="product">
        <Zoom left>
          <h2>Products</h2>
        </Zoom>
        <Box sx={{ width: '100%' }}>
          <Grid container rowSpacing={0.1} spacing={0.1}>
            {Productimage?.map((v, i) => {
              return (
                <Grid item xs={6} sm={4} md={4} lg={2.4} className="productImageConatiner">
                  <img src={v?.img} className="Product_image" />
                  <div class="overlay overLayLeft">
                    <div class="text">{v?.text}</div>
                  </div>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </div>
      <div class="productButton">
        <div><button className="btn">View all Products <ArrowForwardIosIcon className="arrowIcon" /></button></div>
      </div>
    </>
  );
};

export default Product;
