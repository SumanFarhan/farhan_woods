import React from "react";
import "./Product.css";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Productimage from "./Product_image"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

console.log(Productimage[0].img)

const Product = () => {
  return (
    <>
      <div className="product">
        <h2>Products</h2>
        <Box sx={{ width: "100%" }}>
          <Grid container rowSpacing={4} spacing={0.5}>
            <Grid item xs={3}>
                <img src={Productimage[0].img}  className="Product_image"/>
            </Grid>
            <Grid item xs={3}>
            <img src={Productimage[0].img} className="Product_image"/>
            </Grid>
            <Grid item xs={3}>
            <img src={Productimage[0].img} className="Product_image"/>
            </Grid>
            <Grid item xs={3}>
            <img src={Productimage[0].img} className="Product_image"/>
            </Grid>
            {/* <Grid item xs={2}>
            <img src={Productimage[0].img} width="100%" height="100%"/>
            </Grid> */}
            
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default Product;
