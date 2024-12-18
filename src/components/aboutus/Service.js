import React from "react";
import { Box, Grid, Typography, Container, Paper } from "@mui/material";
import WaterDropIcon from "@mui/icons-material/Opacity";
import RecyclingIcon from "@mui/icons-material/Autorenew";
import FilterIcon from "@mui/icons-material/FilterAlt";
import StorefrontIcon from "@mui/icons-material/Storefront";
import BuildIcon from "@mui/icons-material/Build";
import WifiIcon from "@mui/icons-material/Wifi";
import bottleImage from "../../Vendors/image/water.png";

const Service = () => {
  // Data array to map over services
  const services = [
    {
      title: "Residential Waters",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas provident maiores quisquam.",
      icon: <WaterDropIcon sx={{ fontSize: 40, color: "#00c8ff" }} />,
    },
    {
      title: "Commercial Waters",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas provident maiores quisquam.",
      icon: <StorefrontIcon sx={{ fontSize: 40, color: "#00c8ff" }} />,
    },
    {
      title: "Filtration Plants",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas provident maiores quisquam.",
      icon: <FilterIcon sx={{ fontSize: 40, color: "#00c8ff" }} />,
    },
    {
      title: "Water Softening",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas provident maiores quisquam.",
      icon: <WifiIcon sx={{ fontSize: 40, color: "#00c8ff" }} />,
    },
    {
      title: "Market Research",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas provident maiores quisquam.",
      icon: <RecyclingIcon sx={{ fontSize: 40, color: "#00c8ff" }} />,
    },
    {
      title: "Project Planning",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas provident maiores quisquam.",
      icon: <BuildIcon sx={{ fontSize: 40, color: "#00c8ff" }} />,
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      {/* Section Header */}
      <Box textAlign="center" mb={5}>
        <Typography variant="subtitle1" sx={{ color: "#00c8ff", fontWeight: "bold" }}>
          OUR SERVICE
        </Typography>
        <Typography
          variant="h3"
          sx={{ fontWeight: "bold", color: "#102a43", mt: 1, lineHeight: 1.2 }}
        >
          Protect Your Family With <br /> Best Water
        </Typography>
      </Box>

      {/* Service Grid */}
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        {/* Left Column */}
        <Grid item xs={12} md={4}>
          {services.slice(0, 3).map((service, index) => (
            <Paper
              key={index}
              elevation={2}
              sx={{
                p: 3,
                mb: 2,
                display: "flex",
                alignItems: "center",
                borderRadius: "8px",
                transition: "0.3s",
                "&:hover": { boxShadow: "0 5px 15px rgba(0,0,0,0.2)" },
              }}
            >
              <Box mr={2}>{service.icon}</Box>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {service.description}
                </Typography>
              </Box>
            </Paper>
          ))}
        </Grid>

        {/* Center Image */}
        <Grid item xs={12} md={4} sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            component="img"
            src={bottleImage}
            alt="Bottle"
            sx={{ width: "100%", maxWidth: 250 }}
          />
        </Grid>

        {/* Right Column */}
        <Grid item xs={12} md={4}>
          {services.slice(3, 6).map((service, index) => (
            <Paper
              key={index}
              elevation={2}
              sx={{
                p: 3,
                mb: 2,
                display: "flex",
                alignItems: "center",
                borderRadius: "8px",
                transition: "0.3s",
                "&:hover": { boxShadow: "0 5px 15px rgba(0,0,0,0.2)" },
              }}
            >
              <Box mr={2}>{service.icon}</Box>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {service.description}
                </Typography>
              </Box>
            </Paper>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Service;
