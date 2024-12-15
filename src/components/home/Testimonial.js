import React, { useState } from "react";
import { Box, Typography, Rating, Container } from "@mui/material";
import Slider from "react-slick";
import { testimonials } from "../../Vendors/reviews";

const Testimonial = () => {
  const [reviews] = useState(testimonials);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ paddingY: "6rem" }}>
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

        {/* Slider / Carousel */}
        <Slider
          {...settings}
          className="testimonial-slider" // Add a unique class name here
          style={{
            margin: "0 auto",
            padding: "10px 0",
          }}
        >
          {reviews.length > 0 ? (
            reviews.map((review, index) => (
              <Box
                key={index}
                sx={{
                  textAlign: "center",
                  border: "1px solid #e0e0e0",
                  borderRadius: 4,
                  padding: 4,
                  backgroundColor: "#ffffff",
                  boxSizing: "border-box",
                  margin: "0 15px", // Adjust the margin between slides
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
                  {review.review}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#002855",
                    fontWeight: "bold",
                    mt: 2,
                    fontSize: "1.1rem",
                  }}
                >
                  {review.name}
                </Typography>
                <Rating value={review.rating} readOnly sx={{ color: "#007bff" }} />
              </Box>
            ))
          ) : (
            <Typography variant="h6" sx={{ textAlign: "center", color: "#6c757d" }}>
              No reviews available.
            </Typography>
          )}
        </Slider>
      </Container>

      {/* Scoped Styles using the unique class name */}
      <style>
        {`
          /* Target only the testimonial slider */
          .testimonial-slider .slick-slider {
            padding: 0 15px;
          }

          /* Margin between each slide */
          .testimonial-slider .slick-slide {
            margin: 0 15px;
          }

          /* Prevent slides from overlapping */
          .testimonial-slider .slick-track {
            display: flex !important;
            align-items: center;
          }

          /* Adjust the position of dots for the testimonial slider */
          .testimonial-slider .slick-dots {
            bottom: -30px;
          }
        `}
      </style>
    </Box>
  );
};

export default Testimonial;
