import React from 'react'
import { Progress } from 'antd';
import 'antd/dist/antd.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Fade from 'react-reveal/Fade';
import "./Banner.css"


const Banner = () => {
    return (
        <>
            <div className="mainConcept">
                <div className="leftConcept">
                    <Fade left>
                        <p className='concept-para'>A good design should be based on the client's needs and preferences.The second step is approved by customer,in order to achieve this, we asure that the materials we use are high quality.Our customers deserve to feel safe about their purchase. </p>
                    </Fade>
                </div>
                <div className="rightConcept">
                    <Box className='circle'>
                        <Grid container spacing={0.5}>
                            <Grid item xs={6} sm={4} md={4}>
                                <Fade bottom>
                                    <Progress
                                        type="circle"
                                        strokeColor={{
                                            '0%': '#FAB407',
                                            '100%': 'black',
                                        }}
                                        percent={90}
                                    />
                                </Fade>
                                <h4 className='headingBanner'>Designing</h4>
                            </Grid>
                            <Grid item xs={6} sm={4} md={4}>
                                <Fade bottom>
                                    <Progress
                                        type="circle"
                                        strokeColor={{
                                            '0%': '#FAB407',
                                            '100%': 'black',
                                        }}
                                        percent={95}

                                    />
                                </Fade>
                                <h4 className='headingBanner'>Approved</h4>
                            </Grid>
                            <Grid item xs={6} sm={4} md={4}>
                                <Fade bottom>
                                    <Progress
                                        type="circle"
                                        strokeColor={{
                                            '0%': '#FAB407',
                                            '100%': 'black',
                                        }}
                                        percent={100}
                                    />
                                </Fade>
                                <h4 className='headingBanner'>Guaranteed</h4>
                            </Grid>
                        </Grid>
                    </Box>
                </div>
            </div>
        </>
    )
}

export default Banner


