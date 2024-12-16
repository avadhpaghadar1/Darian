import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import BannerImage from "../../Vendors/image/droplet-water.jpg";

const Banner = ({ title, subtitle, titleTypography, subtitleTypography }) => {
    return (
        <Box
            sx={{
                position: "relative",
                height: "400px",
                backgroundImage: `url(${BannerImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                }}
            />
            <Container sx={{ position: "relative", zIndex: 1 }}>
                <Grid container spacing={2} direction="column" alignItems="center">
                    <Grid item>
                        <Typography sx={{ variant: "h1", fontSize: "40px", color: "#fff", fontWeight: "bold", textAlign: "center", }}>
                            {title}
                        </Typography>
                    </Grid>
                    <Grid item>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Banner;
