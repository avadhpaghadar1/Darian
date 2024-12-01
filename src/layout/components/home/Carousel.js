import React from 'react';
import Slider from 'react-slick';
import { Box } from '@mui/material';
import slideOne from "../../Vendors/image/slideOne.jpg";
import slideTwo from "../../Vendors/image/slideTwo.jpg";
import slideThree from "../../Vendors/image/slideThree.jpg";
import slideFour from "../../Vendors/image/slideFour.jpg";


// Define custom styles for the carousel
const carouselSettings = {
  dots: false,
  infinite: true,
  speed: 500,
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
        position: 'absolute',
        top: '50%',
        left: '10px',
        transform: 'translateY(-50%)',
        zIndex: 2,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        color: '#fff',
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
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
        position: 'absolute',
        top: '50%',
        right: '10px',
        transform: 'translateY(-50%)',
        zIndex: 2,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        color: '#fff',
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
        },
      }}
    >
      &#9654;
    </Box>
  );
}

const Carousel = () => {
  return (
    <Slider {...carouselSettings}>
      {/* Slide 1 */}
      <Box sx={{ position: 'relative' }}>
        <img src={slideOne} alt="No-Image" style={{ width: '100%', height: '1000px' }} />
      </Box>

      {/* Slide 2 */}
      <Box sx={{ position: 'relative' }}>
        <img src={slideTwo} alt="No-Image" style={{ width: '100%', height: '1000px' }} />
      </Box>

       {/* Slide 3 */}
       <Box sx={{ position: 'relative' }}>
        <img src={slideThree} alt="No-Image" style={{ width: '100%', height: '1000px' }} />
      </Box>

      {/* Slide 4 */}
      <Box sx={{ position: 'relative' }}>
        <img src={slideFour} alt="No-Image" style={{ width: '100%', height: '1000px' }} />
      </Box>
    </Slider>
  );
};

export default Carousel;
