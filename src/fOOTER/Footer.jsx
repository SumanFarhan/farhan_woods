import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BusinessIcon from "@mui/icons-material/Business";
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link, animateScroll as scroll } from "react-scroll";
import "./Footer.css";

const footerMenuLink = [
  {
    text: "About us",
    link: "about"
  },
  {
    text: "Products",
    link: "product"
  },
  {
    text: "Services",
    link: "services"
  },
]
const footerContact = [
  {
    icon: <MailOutlineIcon />,
    text: "farhanhashim4600@gmail.com",
  },
  {
    icon: <PhoneIcon />,
    text: "0334-2300564"
  },
  {
    icon: <AccessTimeIcon />,
    text: "Working Hours:Monday-Saturday|10:00am-06:00pm"
  },
  {
    icon: <BusinessIcon />,
    text: "XYZ,karachi"
  },
]

const facebookLink = 'https://www.facebook.com/profile.php?id=100093566328012&mibextid=ZbWKwL';

const Footer = () => {
  return (
    <>
      <Box
        px={{ xs: 3, sm: 9 }}
        py={{ xs: 3, sm: 5 }}

        bgcolor="#b98424"
        color="white"
        id="location"
      >
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid item xs={12} sm={6} md={4}>
              <Box>
                <h2 className="Heading">Menu</h2>
              </Box>
              {footerMenuLink.map((v, index) => {
                return (
                  <Box key={index}>
                    <Link to={v?.link}
                      className="linkText" color="inherit">
                      {v?.text}
                    </Link>
                    <hr className="line" />
                  </Box>
                );
              })}
              <Box>
                <a href="https://drive.google.com/file/d/1O6yhbbtAv1gO0T3GCDC7XD2AQaPo_TQQ/view?usp=sharing" target="_blank"
                  className="linkText" color="inherit">
                  Download Catalogue
                </a>
                <hr className="line" />
              </Box>
            </Grid>
            {/* contact us */}
            <Grid item xs={12} sm={6} md={4}>
              <Box>
                <h2 className="Heading">Contact Us</h2>
              </Box>
              {footerContact?.map((v, i) => {
                return (
                  <>
                    <Box key={i}>
                      <span className="text_contactus" >
                        {v?.icon}
                        {v?.text}
                      </span>
                    </Box>
                    <hr className="line" />
                  </>
                );
              })}

            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box>
                <h2 className="Heading">Location</h2>
              </Box>
              <Box>
                <iframe
                  className="footerMap"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.8819443860925!2d67.00846421404867!3d24.867881351086545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33fe65f9f0c8f%3A0x5c5dc60dc960a580!2sFarhan%20Woods!5e0!3m2!1sen!2s!4v1669181425385!5m2!1sen!2s"
                  width="350"
                  height="180"
                  allowFullScreen=""
                  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <div className="footerCopyright">
        <hr />
        <div className="space"></div>
        <div className="textFooterCopyrightdiv">
          &copy; Copyright {new Date().getFullYear()}  - <span className="textFooterCopyright"
            onClick={() => {
              scroll.scrollToTop();
            }}>  Farhan Woods</span>
        </div>
        <div className="socialIcon">
          <a href={facebookLink} target="_blank" rel="noopener noreferrer">
            <FacebookIcon />
          </a></div>
      </div>

    </>
  );
};

export default Footer;
