import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import Menu from "@mui/material/Menu"
import MenuIcon from "@mui/icons-material/Menu"
import Container from "@mui/material/Container"
import Button from "@mui/material/Button"
import MenuItem from "@mui/material/MenuItem"
import Image from "mui-image"
import logo from "../asssets/logo.png"
import "./header.css"

const pages = [
  {
    page: "Home",
    link: "#home"
  },
  {
    page: "About us",
    link: "#about"
  },
  {
    page: "Products",
    link: "#product"
  },
  {
    page: "Services",
    link: "#services"
  },
  {
    page: "Contact us",
    link: "#contact"
  },
  {
    page: "Location",
    link: "#location"
  },

]

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <AppBar position="static" className="app_bar">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <a href="#home"> */}
            <img src={logo}   className="logo"/>
            {/* </a> */}

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" }
              }}
            >
              {pages.map((v, i) => (
                <MenuItem key={i} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"><a href={v?.link}
                    className="menu">{v?.page}</a></Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Image src={logo} className="logo_responsive" sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((v) => (
              <Button
                key={v?.page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: "block", width: '118px' }}
              >
                <a href={v?.link}
                  className="menu">{v?.page}</a>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default ResponsiveAppBar
