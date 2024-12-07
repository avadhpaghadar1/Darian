import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import bottleOne from "../Vendors/image/bottle/image_one.jpg";
import bottleTwo from "../Vendors/image/bottle/image_two.jpg";
import bottleThree from "../Vendors/image/bottle/image_three.jpg";

const bottles = [
  {
    id: 1,
    size: "2L 1 Bottle",
    name: "Mineral Water Bottle",
    price: "₹35.00",
    image: bottleOne,
  },
  {
    id: 2,
    size: "4L 2 Bottles",
    name: "RO Water Bottle",
    price: "₹70.00",
    image: bottleTwo,
  },
  {
    id: 3,
    size: "6L 3 Bottles",
    name: "UV Water Bottle",
    price: "₹100.00",
    image: bottleThree, // Replace with actual image
  },
];

const ProductSection = () => {
  return (
    <Box sx={{ padding: "2rem", textAlign: "center" }}>
      {/* Header */}
      <Typography variant="h4" fontWeight="bold" sx={{ color: "#002855", mb: 4 }}>
        We Deliver Best Quality Bottle Packs.
      </Typography>

      {/* Bottle Grid */}
      <Grid container spacing={4}>
        {bottles.map((bottle) => (
          <Grid item xs={12} sm={6} md={4} key={bottle.id}>
            <Card
              sx={{
                boxShadow: 3,
                borderRadius: 2,
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: 6,
                },
              }}
            >
              {/* Image */}
              <CardMedia
                component="img"
                image={bottle.image}
                alt={bottle.name}
                sx={{ objectFit: "contain", padding: "1rem" }}
              />

              {/* Content */}
              <CardContent>
                <Typography variant="body2" color="textSecondary">
                  {bottle.size}
                </Typography>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ color: "#002855", mb: 1 }}
                >
                  {bottle.name}
                </Typography>
                <Typography variant="h6" fontWeight="bold" sx={{ color: "#007bff", mb: 2 }}>
                  {bottle.price}
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#002855",
                    "&:hover": {
                      backgroundColor: "#0056b3",
                    },
                  }}
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductSection;
