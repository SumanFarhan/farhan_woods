import React from 'react'
import { Progress } from 'antd';
import 'antd/dist/antd.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import "./Banner.css"


const Banner = () => {
    return (
        <>
            <div className="mainConcept">
                <div className="leftConcept">
                    <p className='concept-para'>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
                </div>
                <div className="rightConcept">
                    <Box className='circle'>
                        <Grid container spacing={0.5}>
                            <Grid item xs={6}  sm={4} md={4}>
                                <Progress
                                    type="circle"
                                    strokeColor={{
                                        '0%': '#FAB407',
                                        '100%': 'black',
                                    }}
                                    percent={90}
                                />
                                <h4 className='headingBanner'>Designing</h4>
                            </Grid>
                            <Grid item xs={6}  sm={4} md={4}>
                                <Progress
                                    type="circle"
                                    strokeColor={{
                                        '0%': '#FAB407',
                                        '100%': 'black',
                                    }}
                                    percent={95}

                                />
                                <h4 className='headingBanner'>Approved</h4>
                            </Grid>
                            <Grid item xs={6}  sm={4} md={4}>
                                <Progress
                                    type="circle"
                                    strokeColor={{
                                        '0%': '#FAB407',
                                        '100%': 'black',
                                    }}
                                    percent={100}
                                />
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


