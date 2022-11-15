import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Doorimages from "./DataImages/Door";
import Windowimages from "./DataImages/Windows";
import Doorframes from "./DataImages/Doorframes";
import Ironframes from "./DataImages/Ironframes";
import Buildingmaterial from "./DataImages/Building material";
import "./Product.css";
import ResponsiveAppBar from "../header/Header";
import Footer from "../fOOTER/Footer";


const Productanotherpage = () => {
  return (
    <>
      <ResponsiveAppBar />
      {/* Doors */}
      <div className="product" id="product">
        <div className="productanotherpageheading">
          <h2>Doors</h2>
        </div>
        <Box sx={{ width: '100%' }}>
          <Grid container rowSpacing={0.1} spacing={0.1}>
            {Doorimages?.map((v, i) => {
              return (
                <Grid item xs={6} sm={4} md={4} lg={2.4} className="productImageConatiner">
                  <img src={v?.img} className="Product_image" />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </div>
      {/* Windows */}
      <div className="product" id="product">
        <div className="productanotherpageheading">
          <h2>Windows</h2>
        </div>
        <Box sx={{ width: '100%' }}>
          <Grid container rowSpacing={0.1} spacing={0.1}>
            {Windowimages?.map((v, i) => {
              return (
                <Grid item xs={6} sm={4} md={4} lg={2.4} className="productImageConatiner">
                  <img src={v?.img} className="Product_image" />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </div>

      {/* Door frames */}
      <div className="product" id="product">
        <div className="productanotherpageheading">
          <h2>Door Frames</h2>
        </div>
        <Box sx={{ width: '100%' }}>
          <Grid container rowSpacing={0.1} spacing={0.1}>
            {Doorframes?.map((v, i) => {
              return (
                <Grid item xs={6} sm={4} md={4} lg={2.4} className="productImageConatiner">
                  <img src={v?.img} className="Product_image" />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </div>
      
      {/* Iron Frames */}
      <div className="product" id="product">
        <div className="productanotherpageheading">
          <h2>Iron Frames</h2>
        </div>
        <Box sx={{ width: '100%' }}>
          <Grid container rowSpacing={0.1} spacing={0.1}>
            {Ironframes?.map((v, i) => {
              return (
                <Grid item xs={6} sm={4} md={4} lg={2.4} className="productImageConatiner">
                  <img src={v?.img} className="Product_image_iron" />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </div>
      {/* Building Material */}
      <div className="product" id="product">
        <div className="productanotherpageheading">
          <h2>Building Material</h2>
        </div>
        <Box sx={{ width: '100%' }}>
          <Grid container rowSpacing={0.1} spacing={0.1}>
            {Buildingmaterial?.map((v, i) => {
              return (
                <Grid item xs={6} sm={4} md={4} lg={2.4} className="productImageConatiner">
                  <img src={v?.img} className="Product_image" />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </div>
      <Footer />
    </>
  )
}

export default Productanotherpage