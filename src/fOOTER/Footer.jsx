import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BusinessIcon from "@mui/icons-material/Business";
import FacebookIcon from '@mui/icons-material/Facebook';
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 3, sm: 5 }}
        bgcolor="#b98424"
        color="white"
      >
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid item xs={12} sm={4}>
              <Box>
                <h2 className="Heading">Menu</h2>
              </Box>
              <Box>
                <Link className="linkText" href="/" color="inherit">
                  About us
                </Link>
                <hr className="line" />
              </Box>
              <Box>
                <Link className="linkText" href="/" color="inherit">
                  Products
                </Link>
                <hr className="line" />
              </Box>
              <Box>
                <Link className="linkText" href="/" color="inherit">
                  Download Catolgue
                </Link>
                <hr className="line" />
              </Box>
              <Box>
                <Link className="linkText" href="/" color="inherit">
                  Location
                </Link>
                <hr className="line" />
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box>
                <h2 className="Heading">Contact Us</h2>
              </Box>
              <Box>
                <span className="text_contactus">
                  <MailOutlineIcon />
                  farhanhashim4600@gmail.com
                </span>
              </Box>
              <hr className="line" />
              <Box>
                <span className="text_contactus">
                  <PhoneIcon />
                  03342300564
                </span>
              </Box>
              <hr className="line" />
              <Box>
                <span className="text_contactus">
                  <AccessTimeIcon />
                  Working Hours:Monday-Saturday|10:00am-06:00pm
                </span>
              </Box>
              <hr className="line" />
              <Box>
                <span className="text_contactus">
                  <BusinessIcon />
                  XYZ,karachi
                </span>
              </Box>
              <hr className="line" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box>
                <h2 className="Heading">Location</h2>
              </Box>
              <Box>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.871597296205!2d67.04498604981399!3d24.79984995371534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33cfd85283a2f%3A0x8e4443010f37c9d6!2sKFC!5e0!3m2!1sen!2s!4v1664521420778!5m2!1sen!2s"
                  width="350"
                  height="200"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <div className="footerCopyright">
      <hr/>
        <div className="space"></div>
        <div className="textFooterCopyrightdiv">
          <span className="textFooterCopyright">Farhan Woods</span> &copy;{new Date().getFullYear()}
        </div>
        <div className="socialIcon"><FacebookIcon/></div>
      </div>

    </>
  );
};

export default Footer;
