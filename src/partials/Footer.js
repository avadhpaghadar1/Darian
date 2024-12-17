import React from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
  IconButton,
  Link,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import logo from '../Vendors/image/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const instaLink = "https://www.instagram.com/darian_enterprise/profilecard/?igsh=cHFvcTl0ejByaHd0";
  const linkdinLink = "https://in.linkedin.com/company/darian-enterprise";
  return (
    <Box
      sx={{ bgcolor: "#0a244f", py: 5, color: "var(--bs-body)" }}
      className="footer"
    >
      <Container maxWidth="lg" sx={{py:3}}>
        {/* Subscription Section */}
        <Grid container spacing={5} alignItems="center" mb={5}>
          {/* <Grid item xs={12} md={5}>
            <Box
              display="flex"
              justifyContent={{ xs: "center", md: "flex-end" }}
              className="text-gray"
            >
              <IconButton
                color="primary"
                sx={{
                  mx: 1,
                  "&:hover": {
                    backgroundColor: "var(--bs-white)",
                  },
                  "&:hover svg": {
                    color: "var(--bs-primary)",
                  },
                }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                color="primary"
                sx={{
                  mx: 1,
                  "&:hover": {
                    backgroundColor: "var(--bs-white)",
                  },
                  "&:hover svg": {
                    color: "var(--bs-primary)",
                  },
                }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                color="primary"
                sx={{
                  mx: 1,
                  "&:hover": {
                    backgroundColor: "var(--bs-white)",
                  },
                  "&:hover svg": {
                    color: "var(--bs-primary)",
                  },
                }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                color="primary"
                sx={{
                  mx: 1,
                  "&:hover": {
                    backgroundColor: "var(--bs-white)",
                  },
                  "&:hover svg": {
                    color: "var(--bs-primary)",
                  },
                }}
              >
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid> */}
        </Grid>

        {/* Footer Content */}
        <Grid container spacing={5}>
          {/* Column 1 */}
          <Grid item xs={12} md={3}>
          <img src={logo} alt="Darian" style={{  height: 110 }} />
            <Typography
              variant="body2"
              gutterBottom
              sx={{ lineHeight: "35px", color: "white" }}
            >
              Dolor amet sit justo amet elitr clita ipsum elitr est. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit.
            </Typography> 
            <Box
              display="flex"
              justifyContent={{ xs: "flex-start", md: "flex-start" }}
              className="text-gray"
            >
              <IconButton
                color="primary"
                sx={{
                  me: 1,
                  "&:hover": {
                    backgroundColor: "var(--bs-white)",
                  },
                  "&:hover svg": {
                    color: "var(--bs-primary)",
                  },
                }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                color="primary"
                sx={{
                  me: 1,
                  "&:hover": {
                    backgroundColor: "var(--bs-white)",
                  },
                  "&:hover svg": {
                    color: "var(--bs-primary)",
                  },
                }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                href={instaLink}
                color="primary"
                sx={{
                  me: 1,
                  "&:hover": {
                    backgroundColor: "var(--bs-white)",
                  },
                  "&:hover svg": {
                    color: "var(--bs-primary)",
                  },
                }}
              >
                <InstagramIcon  />
              </IconButton>
              <IconButton
                href={linkdinLink}
                color="primary"
                sx={{
                  me: 1,
                  "&:hover": {
                    backgroundColor: "var(--bs-white)",
                  },
                  "&:hover svg": {
                    color: "var(--bs-primary)",
                  },
                }}
              >
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Column 2: About Us Links */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom sx={{ color: "white" }}>
              Pages
            </Typography>
            <Box>
              {[
                "Home",
                "Insulated Bottles",
                "Other Product",
                "About Us",
                "Contact Us",
              ].map((text, index) => (
                <Link
                  href="#"
                  key={index}
                  sx={{
                    display: "block",
                    lineHeight: "35px",
                    color: "white",
                    transition: "0.5s",
                    textDecoration:"none",
                    "&:hover": {
                      color: "var(--bs-primary)",
                    },
                  }}
                >
                  <i className="fas fa-angle-right" /> {text}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Column 3: Business Hours */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom sx={{ color: "white" }}>
              Business Hours
            </Typography>
            <Box mb={3}>
              <Typography variant="body2" sx={{ color: "grey" }}>
                Mon - Friday:
              </Typography>
              <Typography variant="body2" sx={{ color: "white" }}>
                09.00 am to 07.00 pm
              </Typography>
            </Box>
            <Box mb={3}>
              <Typography variant="body2" sx={{ color: "grey" }}>
                Saturday:
              </Typography>
              <Typography variant="body2" sx={{ color: "white" }}>
                10.00 am to 05.00 pm
              </Typography>
            </Box>
            <Box mb={3}>
              <Typography variant="body2" sx={{ color: "grey" }}>
                Vacation:
              </Typography>
              <Typography variant="body2" sx={{ color: "white" }}>
                All Sunday is our vacation
              </Typography>
            </Box>
          </Grid>

          {/* Column 4: Contact Info */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom sx={{ color: "white" }}>
              Contact Info
            </Typography>
            {[
              { icon: "fa-map-marker-alt",link:"#", text: "Victoria Industrial Park, 17, Rd Number 5, near Kotak Mahindra Bank, Kathwada GIDC, Odhav Industrial Estate, Odhav, Ahmedabad, Kathwada, Gujarat 382430" },
              { icon: "fas fa-envelope",link:"mailto:info@darianindustries.com", text: "info@darianindustries.com" },
              { icon: "fas fa-phone",link:"tel:6354273453", text: "+91 63542 73453" },
            ].map((item, index) => (
              <Link
                href={item.link}
                key={index}
                sx={{
                  display: "block",
                  lineHeight: "20px",
                  color: "white",
                  transition: "0.5s",
                  textDecoration:"none",
                  mb: 2,
                  "&:hover": {
                    color: "var(--bs-primary)",
                  },
                }}
              >
                <i className={item.icon} /> {item.text}
              </Link>
            ))}
          </Grid>
        </Grid>
      </Container>

      {/* Copyright Section */}
      <Box
        sx={{
          bgcolor: "#0a244f",
          pt: 4,
          borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        }}
        className="copyright"
      >
        <Container>
          <Typography
            variant="body2"
            align="center"
            sx={{ color: "white" }}
          >
            © {currentYear} Darian | All Rights Reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
