import React from "react";
import Slider from "react-slick";
import { Box } from "@mui/material";
import slideOne from "../../Vendors/image/slideOne.jpg";
import slideTwo from "../../Vendors/image/slideTwo.jpg";
import slideThree from "../../Vendors/image/slideThree.jpg";
import slideFour from "../../Vendors/image/slideFour.jpg";

// Carousel settings
const carouselSettings = {
  dots: false,
  infinite: true,
  speed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
};

// Custom Previous Arrow
function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <Box
      className={className}
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "50%",
        left: "15px",
        transform: "translateY(-50%)",
        zIndex: 2,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        color: "#fff",
        "&:hover": {
          backgroundColor: "rgba(0, 0, 0, 0.8)",
        },
      }}
    >
      &#9664;
    </Box>
  );
}

// Custom Next Arrow
function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <Box
      className={className}
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "50%",
        right: "15px",
        transform: "translateY(-50%)",
        zIndex: 2,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        color: "#fff",
        "&:hover": {
          backgroundColor: "rgba(0, 0, 0, 0.8)",
        },
      }}
    >
      &#9654;
    </Box>
  );
}

const Carousel = () => {
  return (
    <Box
      sx={{
        margin: "0 auto",
        overflow: "hidden",
      }}
    >
      <Slider {...carouselSettings}>
        {/* Slide 1 */}
        <Box>
          <img
            src={slideOne}
            alt="Slide One"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "fill",
            }}
          />
        </Box>

        {/* Slide 2 */}
        <Box>
          <img
            src={slideTwo}
            alt="Slide Two"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "fill",
            }}
          />
        </Box>

        {/* Slide 3 */}
        <Box>
          <img
            src={slideThree}
            alt="Slide Three"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "fill",
            }}
          />
        </Box>

        {/* Slide 4 */}
        <Box>
          <img
            src={slideFour}
            alt="Slide Four"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "fill",
            }}
          />
        </Box>
      </Slider>
    </Box>
  );
};

export default Carousel;
