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
  return (
    <Box
      sx={{ bgcolor: "var(--bs-dark)", py: 5, color: "var(--bs-body)" }}
      className="footer"
    >
      <Container maxWidth="lg">
        {/* Subscription Section */}
        <Grid container spacing={5} alignItems="center" mb={5}>
          <Grid item xs={12} md={5}>
            <Box
              display="flex"
              justifyContent={{ xs: "center", md: "flex-end" }}
              className="text-gray"
            >
              <IconButton
                color="secondary"
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
                color="secondary"
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
                color="secondary"
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
                color="secondary"
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
          </Grid>
        </Grid>

        {/* Footer Content */}
        <Grid container spacing={5}>
          {/* Column 1 */}
          <Grid item xs={12} md={3}>
          <img src={logo} alt="Darian" style={{  height: 110 }} />
            <Typography
              variant="body2"
              gutterBottom
              sx={{ lineHeight: "35px", color: "var(--bs-body)" }}
            >
              Dolor amet sit justo amet elitr clita ipsum elitr est. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit.
            </Typography> 
          </Grid>

          {/* Column 2: About Us Links */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom sx={{ color: "white" }}>
              About Us
            </Typography>
            <Box>
              {[
                "Why Choose Us",
                "Free Water Bottles",
                "Water Dispensers",
                "Bottled Water Coolers",
                "Contact Us",
                "Terms & Conditions",
              ].map((text, index) => (
                <Link
                  href="#"
                  key={index}
                  sx={{
                    display: "block",
                    lineHeight: "35px",
                    color: "var(--bs-body)",
                    transition: "0.5s",
                    mb: 1,
                    "&:hover": {
                      letterSpacing: "1px",
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
              <Typography variant="body2" sx={{ color: "var(--bs-body)" }}>
                Mon - Friday:
              </Typography>
              <Typography variant="body2" sx={{ color: "white" }}>
                09.00 am to 07.00 pm
              </Typography>
            </Box>
            <Box mb={3}>
              <Typography variant="body2" sx={{ color: "var(--bs-body)" }}>
                Saturday:
              </Typography>
              <Typography variant="body2" sx={{ color: "white" }}>
                10.00 am to 05.00 pm
              </Typography>
            </Box>
            <Box mb={3}>
              <Typography variant="body2" sx={{ color: "var(--bs-body)" }}>
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
              { icon: "fa-map-marker-alt", text: "123 Street, New York, USA" },
              { icon: "fas fa-envelope", text: "info@example.com" },
              { icon: "fas fa-envelope", text: "info@example.com" },
              { icon: "fas fa-phone", text: "+012 345 67890" },
              { icon: "fas fa-print", text: "+012 345 67890" },
            ].map((item, index) => (
              <Link
                href="#"
                key={index}
                sx={{
                  display: "block",
                  lineHeight: "35px",
                  color: "var(--bs-body)",
                  transition: "0.5s",
                  mb: 1,
                  "&:hover": {
                    letterSpacing: "1px",
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
          bgcolor: "var(--bs-dark)",
          pt: 4,
          borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        }}
        className="copyright"
      >
        <Container>
          <Typography
            variant="body2"
            align="center"
            sx={{ color: "var(--bs-body)" }}
          >
            © {currentYear} Darian | All Rights Reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
