import React from "react";
import {
  Box,
  Typography,
  Avatar,
  Grid,
  IconButton,
  Rating,
  Container,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import profileOne from "../../Vendors/image/team-1.jpg";
import profileTwo from "../../Vendors/image/team-2.jpg";

const testimonials = [
  {
    id: 1,
    name: "Client Name",
    profession: "Profession",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt pariatur officiis quis molestias, sit iure sunt voluptatibus accusantium laboriosam dolore.",
    avatar: profileOne,
    rating: 5,
  },
  {
    id: 2,
    name: "Client Name",
    profession: "Profession",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt pariatur officiis quis molestias, sit iure sunt voluptatibus accusantium laboriosam dolore.",
    avatar: profileTwo,
    rating: 5,
  },
];

const Testimonial = () => {
  return (
    <Box sx={{  paddingY: "6rem", backgroundColor: "#f4f9fc" }}>
      <Container maxWidth="lg">
        {/* Section Header */}
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            color: "#007bff",
            mb: 2,
            fontWeight: "bold",
            letterSpacing: 1,
          }}
        >
          TESTIMONIALS
        </Typography>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            color: "#002855",
            fontWeight: "bold",
            mb: 4,
          }}
        >
          Our Clients Reviews.
        </Typography>

        {/* Testimonials Grid */}
        <Grid container spacing={4} justifyContent="center">
          {testimonials.map((testimonial) => (
            <Grid item xs={12} sm={6} key={testimonial.id}>
              <Box
                sx={{
                  textAlign: "center",
                  border: "1px solid #e0e0e0",
                  borderRadius: 4,
                  padding: 3,
                  backgroundColor: "#ffffff",
                  boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: "#6c757d",
                    mb: 3,
                    fontStyle: "italic",
                    lineHeight: 1.8,
                  }}
                >
                  {testimonial.review}
                </Typography>
                <Avatar
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  sx={{
                    width: 90,
                    height: 90,
                    margin: "0 auto",
                    border: "3px solid #007bff",
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    color: "#002855",
                    fontWeight: "bold",
                    mt: 2,
                    fontSize: "1.1rem",
                  }}
                >
                  {testimonial.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#6c757d", mb: 1, fontSize: "0.9rem" }}
                >
                  {testimonial.profession}
                </Typography>
                <Rating
                  value={testimonial.rating}
                  readOnly
                  sx={{ color: "#007bff" }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Navigation Buttons */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 4,
          }}
        >
          <IconButton
            sx={{
              color: "#007bff",
              backgroundColor: "#e7f5ff",
              "&:hover": { backgroundColor: "#d0ebff" },
              borderRadius: "50%",
            }}
          >
            <ArrowBackIosIcon />
          </IconButton>
          <IconButton
            sx={{
              color: "#007bff",
              backgroundColor: "#e7f5ff",
              "&:hover": { backgroundColor: "#d0ebff" },
              borderRadius: "50%",
              ml: 2,
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonial;
