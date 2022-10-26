import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Productimage from "./DataImages/Product_image";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = () => {
  return (
    <>
      <div className="product" id="product">
        <div className="productheading">
        <h2>PRODUCTS</h2>
        <div className="bar"></div>
        </div>
        <Box sx={{ width: '100%' }}>
          <Grid container rowSpacing={0.1} spacing={0.1}>
            {Productimage?.map((v, i) => {
              return (
                <Grid item xs={6} sm={4} md={4} lg={2.4} className="productImageConatiner">
                  <img src={v?.img} className="Product_image" />
                  <div class="overlay overLayLeft">
                    <span class="text">{v?.text}</span>
                  </div>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </div>
      <div class="productButton">
        <div>
          <Link to="/productpage">
            <button className="btn">
              View all Products
              <ArrowForwardIosIcon className="arrowIcon" /></button>
          </Link></div>
      </div>
    </>
  );
};

export default Product;
