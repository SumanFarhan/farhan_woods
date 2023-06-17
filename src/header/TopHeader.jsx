import React from 'react'
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from '@mui/icons-material/Facebook';
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import "./header.css"

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#b98424',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: "white"
}));

const facebookLink = 'https://www.facebook.com/profile.php?id=100093566328012&mibextid=ZbWKwL';

const TopHeader = () => {
    return (
        <>
            <div className='headerTop'>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container >
                        <Grid item lg={0.5} xs={0.7} md={0.2}>

                        </Grid>
                        <Grid item lg={1.5}>
                            <Item >
                                <PhoneIcon />
                                0334-2300564</Item>
                        </Grid>
                        <Grid item lg={2.4}>
                            <Item> <MailOutlineIcon />
                                farhanhashim4600@gmail.com</Item>
                        </Grid>
                        <Grid item lg={3} xs={10} md={4} sm={5}>
                            <Item> <AccessTimeIcon />
                                Monday-Saturday|10:00am-06:00pm</Item>
                        </Grid>
                        <Grid item lg={3.5} xs={0.5} md={2} sm={0.5}>

                        </Grid>
                        <Grid item lg={1}>
                            <Item> 
                            <a href={facebookLink} target="_blank" rel="noopener noreferrer">
                                <FacebookIcon />
                                </a>
                                </Item>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </>
    )
}

export default TopHeader