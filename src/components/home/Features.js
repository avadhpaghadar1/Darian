import React from "react";
import { Box, Typography, Grid, Card, CardContent, Avatar, Link, Container } from "@mui/material";
import { WaterDrop, FilterAlt, Recycling, Science } from "@mui/icons-material"; // MUI Icons

const features = [
  {
    id: 1,
    title: "Quality Check",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Libero repellat deleniti necessitatibus.",
    icon: <WaterDrop fontSize="large" />,
  },
  {
    id: 2,
    title: "5 Steps Filtration",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Libero repellat deleniti necessitatibus.",
    icon: <FilterAlt fontSize="large" />,
  },
  {
    id: 3,
    title: "Composition",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Libero repellat deleniti necessitatibus.",
    icon: <Recycling fontSize="large" />,
  },
  {
    id: 4,
    title: "Lab Control",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Libero repellat deleniti necessitatibus.",
    icon: <Science fontSize="large" />,
  },
];

const Features = () => {
  return (
    <Box sx={{ paddingY: "6rem", backgroundColor: "#f8fcfd" }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Typography variant="h6" sx={{ color: "#007bff", textTransform: "uppercase", textAlign: "center", mb: 1 }}>
          Our Feature
        </Typography>
        <Typography
          variant="h2"
          fontWeight="bold"
          sx={{ color: "#002855", textAlign: "center", mb: 4 }}
        >
          A Trusted Name In Bottled Water Industry
        </Typography>

        {/* Features Grid */}
        <Grid container spacing={4}>
          {features.map((feature) => (
            <Grid item xs={12} sm={6} md={3} key={feature.id}>
              <Card
                sx={{
                  textAlign: "center",
                  boxShadow: 3,
                  borderRadius: 2,
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: 6,
                  },
                }}
              >
                <CardContent>
                  {/* Icon */}
                  <Avatar
                    sx={{
                      backgroundColor: "#00cfff",
                      width: 60,
                      height: 60,
                      margin: "0 auto 1rem",
                    }}
                  >
                    {feature.icon}
                  </Avatar>

                  {/* Title */}
                  <Typography variant="h6" fontWeight="bold" sx={{ color: "#002855", mb: 1 }}>
                    {feature.title}
                  </Typography>

                  {/* Description */}
                  <Typography variant="body2" sx={{ color: "#666", mb: 2 }}>
                    {feature.description}
                  </Typography>

                  {/* Link */}
                  <Link
                    href="#"
                    underline="hover"
                    sx={{
                      color: "#007bff",
                      fontWeight: "bold",
                      fontSize: "0.9rem",
                    }}
                  >
                    Read More &raquo;
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;
