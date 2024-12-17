import React from "react";
import { Box, Grid, Typography, Button, Card, CardMedia, CardContent, Container } from "@mui/material";
import blogImageOne from "../../Vendors/image/blog-1.jpg";
import blogImageTwo from "../../Vendors/image/blog-2.jpg";
import blogImageThree from "../../Vendors/image/blog-3.jpg";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      image: blogImageOne, // Replace with actual image URL
      title: "Top Insulated Water Bottles for Your Active Lifestyle",
      description:
        "Discover the best insulated water bottles designed to keep your beverages hot or cold for hours. Ideal for daily use and adventures.",
      date: "Jan 12 2025",
    },
    {
      id: 2,
      image: blogImageTwo, // Replace with actual image URL
      title: "Sustainable and Durable: Our Insulated Bottle Line",
      description:
        "Learn how our insulated water bottles combine sustainability and durability, perfect for eco-conscious consumers.",
      date: "Jan 12 2025",
    },
    {
      id: 3,
      image: blogImageThree, // Replace with actual image URL
      title: "How Insulated Bottles Improve Daily Hydration",
      description:
        "Find out how our insulated water bottles help maintain your daily hydration with ease and efficiency.",
      date: "Jan 12 2025",
    },
  ];

  return (
    <Box sx={{ backgroundColor: "#f8fcff", paddingY: { xs: 4, md: 8 } }}>
      {/* Blog Section Container */}
      <Container maxWidth="lg">
        {/* Blog Header */}
        <Box textAlign="center" marginBottom={4}>
          <Typography
            variant="subtitle1"
            sx={{ color: "#00bfff", textTransform: "uppercase", fontWeight: "bold" }}
          >
            Our Blog
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              color: "#0a244f",
              fontSize: { xs: "28px", sm: "32px", md: "36px" },
            }}
          >
            Latest Blog & News
          </Typography>
        </Box>

        {/* Blog Cards */}
        <Grid container spacing={4} justifyContent="center">
          {blogPosts.map((post) => (
            <Grid item xs={12} sm={6} md={4} key={post.id}>
              <Card
                sx={{
                  borderRadius: "12px",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                  overflow: "hidden",
                  position: "relative",
                  height: "100%",
                }}
              >
                {/* Image */}
                <CardMedia
                  component="img"
                  height="200"
                  image={post.image}
                  alt={post.title}
                />

                {/* Date Badge */}
                <Box
                  sx={{
                    position: "absolute",
                    top: "10px",
                    left: "10px",
                    backgroundColor: "#00bfff",
                    color: "white",
                    padding: "6px 10px",
                    borderRadius: "4px",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  📅 {post.date}
                </Box>

                {/* Content */}
                <CardContent sx={{ padding: "20px", textAlign: "left" }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      color: "#0a244f",
                      marginBottom: "10px",
                    }}
                  >
                    {post.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#6c757d", marginBottom: "20px" }}>
                    {post.description}
                  </Typography>
                  <Button
                    href="#"
                    variant="text"
                    sx={{
                      color: "#00bfff",
                      fontWeight: "bold",
                      textTransform: "none",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    Read More &#8594;
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Blog;
