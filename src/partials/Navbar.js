import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import logo from '../Vendors/image/logo.png';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed"
      color="default"
      sx={{
        backgroundColor: scrolled ? 'white' : 'transparent', 
        boxShadow: scrolled ? '0px 2px 4px rgba(0, 0, 0, 0.1)' : 'none',
        transition: 'background-color 0.3s ease, box-shadow 0.3s ease', 
        padding: '10px 20px',
        borderBottom: '1px solid #ddd',
        color: scrolled ? 'black' : 'white',
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="Logo" style={{ height: 70 }} />
        </Box>

        {/* Menu for mobile and desktop */}
        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              sx={{ ml: 'auto' }}
            >
              <MenuIcon />
            </IconButton>
            {mobileMenuOpen && (
              <Box
                sx={{
                  position: "absolute",
                  top: "64px",
                  right: 0,
                  backgroundColor: "white",
                  zIndex: 999,
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                }}
              >
                <Button sx={{ justifyContent: 'left' }} color="inherit" href="index.html">Home</Button>
                <Button sx={{ justifyContent: 'left' }} color="inherit" href="about.html">About</Button>
                <Button sx={{ justifyContent: 'left' }} color="inherit" href="service.html">Service</Button>
                <Button sx={{ justifyContent: 'left' }} color="inherit" href="blog.html">Blog</Button>
                <Button sx={{ justifyContent: 'left' }} aria-controls="pages-menu" aria-haspopup="true" onClick={handleMenuOpen} color="inherit">
                  Pages
                </Button>
                <Menu
                  id="pages-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                >
                  <MenuItem onClick={handleMenuClose} component="a" href="feature.html">
                    Our Feature
                  </MenuItem>
                  <MenuItem onClick={handleMenuClose} component="a" href="product.html">
                    Our Product
                  </MenuItem>
                  <MenuItem onClick={handleMenuClose} component="a" href="team.html">
                    Our Team
                  </MenuItem>
                  <MenuItem onClick={handleMenuClose} component="a" href="testimonial.html">
                    Testimonial
                  </MenuItem>
                  <MenuItem onClick={handleMenuClose} component="a" href="404.html">
                    404 Page
                  </MenuItem>
                </Menu>
              </Box>
            )}
          </>
        ) : (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button color="inherit" href="">Home</Button>
            <Button color="inherit" href="about.html">About</Button>
            <Button color="inherit" href="service.html">Service</Button>
            <Button color="inherit" href="blog.html">Blog</Button>
            <Button aria-controls="pages-menu" aria-haspopup="true" onClick={handleMenuOpen} color="inherit">
              Pages
            </Button>
            <Menu
              id="pages-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose} component="a" href="feature.html">
                Our Feature
              </MenuItem>
              <MenuItem onClick={handleMenuClose} component="a" href="product.html">
                Our Product
              </MenuItem>
              <MenuItem onClick={handleMenuClose} component="a" href="team.html">
                Our Team
              </MenuItem>
              <MenuItem onClick={handleMenuClose} component="a" href="testimonial.html">
                Testimonial
              </MenuItem>
              <MenuItem onClick={handleMenuClose} component="a" href="404.html">
                404 Page
              </MenuItem>
            </Menu>
            <Button color="inherit" href="contact.html">Contact</Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
