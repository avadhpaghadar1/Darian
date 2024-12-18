import React from "react";
import { Box, Typography, Button, Grid, Container } from "@mui/material";
import image from "../../Vendors/image/about.jpg";

const DeliverProduct = () => {
  return (
    <Box sx={{ backgroundColor: "#fefefe", paddingY: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Left Side - Image Section */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: "relative",
                border: "4px solid #0094cc",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#0094cc",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  padding: "8px 16px",
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: "1rem",
                }}
              >
                4+ Years Experience
              </Box>
              <img
                src={image}
                alt="Cycling Team"
                style={{
                  width: "100%",
                  display: "block",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Grid>

          {/* Right Side - Text Section */}
          <Grid item xs={12} md={6} sx={{ marginY :"10px"}}>
            <Typography
              variant="subtitle2"
              sx={{ color: "#0094cc", fontWeight: "bold", letterSpacing: 1 }}
            >
              ABOUT US
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                marginBottom: 2,
                color: "#102a43",
                lineHeight: 1,
              }}
            >
              We Deliver The Quality Water.
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#595959", marginBottom: 3 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Harum
              quidem quas totam nostrum! Maxime rerum voluptatem sed, facilis
              unde a aperiam nulla voluptatibus excepturi ipsum iusto
              consequuntur.
            </Typography>

            {/* Feature Cards */}
            <Box
              sx={{
                backgroundColor: "#f2f9f9",
                padding: 2,
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                marginBottom: 2,
              }}
            >
              <Box
                sx={{
                  width: 60,
                  height: 50,
                  backgroundColor: "#00d1f9 ",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 2,
                }}
              >
                <Typography sx={{ color: "#fff", fontSize: "1.5rem" }}><i className="fas fa-tint text-white fa-2x"></i></Typography>
              </Box>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Satisfied Customer
                </Typography>
                <Typography variant="body2" sx={{ color: "#595959" }}>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Quas
                  provident maiores quisquam.
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                backgroundColor: "#f2f9f9",
                padding: 2,
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                marginBottom: 3,
              }}
            >
              <Box
                sx={{
                  width: 60,
                  height: 50,
                  backgroundColor: "#00d1f9 ",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 2,
                }}
              >
                <Typography sx={{ color: "#fff", fontSize: "1.5rem" }}><i className="fas fa-faucet text-white fa-2x"></i></Typography>
              </Box>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Standard Product
                </Typography>
                <Typography variant="body2" sx={{ color: "#595959" }}>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Quas
                  provident maiores quisquam.
                </Typography>
              </Box>
            </Box>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#0094cc",
                color: "#fff",
                paddingY: 2,
                paddingX:3,
                borderRadius: 20,
                textTransform: 'none',
                fontWeight: "bold",
                "&:hover": { backgroundColor: "#002855" },
              }}
            >
              Read More
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DeliverProduct;
