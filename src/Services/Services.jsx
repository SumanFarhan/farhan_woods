import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import "./Services.css"


const servicesImages = [
  // {
  //   img:
  // },
  // {
  //   img:
  // },
  // {
  //   img:
  // },
  // {
  //   img:
  // },
  // {
  //   img:
  // },
  // {
  //   img:
  // } 
]

const Services = () => {
  return (
    <>
      <div className='mainServices'>
        <Box
          pl={{ sm: 10 }} pr={{ sm: 10 }}
          py={{ sm: 10 }}>
          <Grid container rowSpacing={0} columnSpacing={{ xs: 0, sm: 0, md: 0 }}
            spacing={{ sm: 0 }}>
            <Grid item xs={6} lg={3.5} md={4} sm={6}>
              <div className='livingRoom' >
                <h1>Living Room</h1>
                <p>It's the perfect space to be inspired. It's a place to explore. A place to imagine. A place to be creative. And it can be yours.</p>
              </div>
            </Grid>
            {servicesImages?.map((v, i) => {
              return (
                <Grid item xs={6} lg={3.5} md={4} sm={6}>
                  <img src={v?.img} style={{ width: '350px', height: '250px' }} />
                </Grid>
              );
            })}
          </Grid>
        </Box>

      </div>
    </>
  )
}

export default Services