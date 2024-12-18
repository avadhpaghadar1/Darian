import { Box, Container, Typography } from "@mui/material";
import ProductList from "../components/bottle/ProductList";
import Banner from "../components/common/Banner";
import ProductSection from "../components/home/ProductSection";

const InsulatedBottle = () => {
  return (
    <div>
        <Banner
        title="Insulated Bottle"
      />
      <ProductSection />
      <Container >
      <Typography sx={{fontSize:"32px", marginBottom:"24px", fontWeight:"bold", color:"#0094cc"}}>Thunder 1800</Typography>
      </Container>
      <Box sx={{ marginBottom: "70px" }} >
      <ProductList />
      </Box>
      <Container >
      <Typography sx={{fontSize:"32px", marginBottom:"24px", fontWeight:"bold", color:"#0094cc"}}>Thunder 2600</Typography>
      </Container>
      <Box sx={{ marginBottom: "90px" }} >
      <ProductList />
      </Box>
    </div>
  )
};

export default InsulatedBottle;
