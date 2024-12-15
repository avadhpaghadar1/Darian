import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import logo from "../Vendors/image/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuItems = [
    { label: "Home", link: "/" },
    { label: "Bottle", link: "/product" },
    { label: "Insulated Bottle", link: "/bottle" },
    { label: "About", link: "/about" },
    { label: "Contact", link: "/contact" },
  ];

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: scrolled ? "#fff" : "#0a244f",
        boxShadow: scrolled ? "0px 2px 4px rgba(0, 0, 0, 0.1)" : "none",
        transition: "background-color 0.3s ease, box-shadow 0.3s ease",
        padding: "10px 20px",
        color: scrolled ? "#102a43" : "#fff",
        zIndex: 1100,
        textTransform: "uppercase",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="Logo" style={{ height: 80 }} />
        </Box>

        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <MenuIcon />
            </IconButton>

            {mobileMenuOpen && (
              <Box
                sx={{
                  position: "absolute",
                  top: "90px",
                  left: 0,
                  right:0,
                  width: "100%",
                  backgroundColor: "#0a244f",
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                  // zIndex: 1200,
                }}
              >
                {menuItems.map((item, index) => (
                  <Button
                    key={index}
                    href={item.link}
                    sx={{
                      display: "block",
                      width: "100%",
                      textAlign: "left",
                      padding: "10px 20px",
                      backgroundColor: "#0a244f",
                      color: location.pathname === item.link ? "#00c8ff" : "#fff",
                      fontWeight: location.pathname === item.link ? "bold" : "normal",
                      textTransform: "uppercase",
                      "&:hover": { backgroundColor: "#2b496a" },
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>
            )}
          </>
        ) : (
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            {menuItems.map((item, index) => (
              <Box
                key={index}
                sx={{
                  position: "relative",
                  display: "inline-block",
                  "&:hover > .after": {
                    opacity: 1,
                  },
                }}
              >
                <Link
                  to={item.link}
                  style={{
                    color:
                      location.pathname === item.link
                        ? "#00c8ff"
                        : scrolled
                        ? "#102a43"
                        : "#fff",
                    textDecoration: "none",
                    fontSize: "16px",
                    fontWeight: location.pathname === item.link ? "bold" : "500",
                    position: "relative",
                    padding: "10px 15px",
                    // backgroundColor: scrolled ? "#f5f5f5" : "#1c3b57",
                    borderRadius: "4px",
                    transition: "background-color 0.3s ease, color 0.3s ease",
                  }}
                >
                  {item.label}
                </Link>
              </Box>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
