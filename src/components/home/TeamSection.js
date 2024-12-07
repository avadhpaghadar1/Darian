import React from "react";
import { Box, Grid, Typography, IconButton, Card, CardMedia, CardContent, Container } from "@mui/material";
import { Facebook, Phone } from "@mui/icons-material";
import teamOne from "../../Vendors/image/team-1.jpg";
import teamTwo from "../../Vendors/image/team-2.jpg";
import teamThree from "../../Vendors/image/team-3.jpg";
import teamFour from "../../Vendors/image/team-4.jpg";

const teamMembers = [
  { name: "Dipesh Bhuva", role: "CFO & Founder", imgSrc: teamOne, delay: "0.2s",phone:"tel:+919999999999",facebook:"www.facebook.com" },
  { name: "Pritesh Bhuva", role: "CEO", imgSrc: teamTwo, delay: "0.4s",phone:"tel:+919999999999",facebook:"www.facebook.com" },
  { name: "Ankit Vaghasiya", role: "CIO", imgSrc: teamThree, delay: "0.6s",phone:"tel:+919999999999",facebook:"www.facebook.com" },
  { name: "Gopal Boghra", role: "COO", imgSrc: teamFour, delay: "0.8s",phone:"tel:+919999999999",facebook:"www.facebook.com" },
];

const TeamSection = () => {
  return (
    <Box sx={{ py: 10 }}>
      <Container>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h4" color="primary" sx={{ textTransform: 'uppercase' }}>
            Our Team
          </Typography>
          <Typography variant="h5" sx={{ mb: 3, textTransform: 'capitalize' }}>
            What is Really SEO & How Can I Use It?
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} md={6} lg={3} key={index} sx={{ position: 'relative', overflow: 'hidden' }}>
              <Card
                sx={{
                  borderRadius: 2,
                  border: '1px solid',
                  borderColor: '#19409a',
                  position: 'relative',
                  padding:'10px',
                  overflow: 'hidden',
                  '&:hover .hoverEffect': {
                    opacity: 1,
                    top: 0, // Slide in effect from top to bottom
                  },
                  '&:hover .socialIcons': {
                    opacity: 1,
                    bottom: '15px',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="300"
                  image={member.imgSrc}
                  alt={member.name}
                  sx={{ borderRadius: '10px 10px 0 0' }}
                />
                {/* Hover effect layer */}
                <Box
                  className="hoverEffect"
                  sx={{
                    position: 'absolute',
                    top: '-100%',
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 209, 249, 0.2)',
                    transition: '0.5s',
                    zIndex: 3,
                    opacity: 0,
                  }}
                />
                {/* Social Icons */}
                <Box
                  className="socialIcons"
                  sx={{
                    position: 'absolute',
                    bottom: '-100px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    gap: 1,
                    zIndex: 4,
                    transition: '0.5s',
                    opacity: 0,
                  }}
                >
                  <IconButton href={member.phone} sx={{ bgcolor: 'primary.main', color: 'white' }}>
                    <Phone />
                  </IconButton>
                  <IconButton href={member.facebook} sx={{ bgcolor: 'primary.main', color: 'white' }}>
                    <Facebook />
                  </IconButton>
                </Box>
                {/* Team Member Info */}
                <CardContent sx={{ textAlign: 'center', backgroundColor: 'background.paper' }}>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    {member.name}
                  </Typography>
                  <Typography variant="body2">{member.role}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TeamSection;
