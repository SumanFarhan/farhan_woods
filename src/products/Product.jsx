import React from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import "./Product.css";
import Productimage from "./Product_image";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Product = () => {
  return (
    <>
      <div className="product">
        <h2>Products</h2>
        <Box sx={{ width: '100%' }} className="ProductImagesGrid">
          <Grid container rowSpacing={1} spacing={0.1}>
            {Productimage?.map((v, i) => {
              return (
                <Grid item xs={6} sm={2.4}>
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
