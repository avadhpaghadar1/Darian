import React, { useState } from "react";
import { Box, Typography, TextField, Button, Grid } from "@mui/material";
import { LocationOn, MailOutline, Phone } from "@mui/icons-material";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendMessage = () => {
    const { name, phone, message } = formData;
    if (!name || !phone) {
      const whatsappURL = `https://wa.me/+916354273453?text=${encodeURIComponent(
        `Hello, How are you`
      )}`;
      window.open(whatsappURL, "_blank");
      return;
    }

    const whatsappURL = `https://wa.me/+916354273453?text=${encodeURIComponent(
      `Hello, my name is ${name}. My phone number is ${phone}. Message: ${message}`
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <Box
      sx={{
        backgroundColor: "#f8fcff",
        padding: "80px 20px",
        overflowX: "hidden", // Prevent horizontal scrolling
        textAlign: "center", // Ensure center alignment
        display:"flex",
        justifyContent:"center",
      }}
    >
      <Grid
        container
        // spacing={4}
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Left Column: Contact Form */}
        <Grid item xs={12} md={6}>
          <Box sx={{ marginBottom: 6 }}>
            <Typography
              variant="h6"
              sx={{
                color: "#00bfff",
                fontWeight: "bold",
                textTransform: "uppercase",
                marginBottom: 1,
              }}
            >
              Let's Connect
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                color: "#0a244f",
                marginBottom: 2,
              }}
            >
              Send Your Message
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#6c757d",
                marginBottom: 4,
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              The contact form is currently inactive. Reach us via WhatsApp for
              a quick response.
            </Typography>
          </Box>
          <Box component="form" sx={{ padding: "0 20px" }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  variant="outlined"
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "5px",
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  variant="outlined"
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "5px",
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone"
                  variant="outlined"
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "5px",
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  variant="outlined"
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "5px",
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  multiline
                  rows={4}
                  variant="outlined"
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "5px",
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  fullWidth
                  variant="contained"
                  onClick={handleSendMessage}
                  sx={{
                    backgroundColor: "#00bfff",
                    color: "white",
                    padding: "10px 0",
                    textTransform: "none",
                    fontSize: "16px",
                    fontWeight: "bold",
                    borderRadius: "5px",
                    "&:hover": {
                      backgroundColor: "#0094cc",
                    },
                  }}
                >
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        {/* Right Column: Contact Details */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            {/* Address */}
            <Grid item xs={12}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: "20px",
                  borderRadius: "8px",
                  backgroundColor: "white",
                  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                  textAlign: "center",
                  marginTop: { xs: "20px", sm: "0px" }, 
                }}
              >
                <LocationOn
                  sx={{ color: "#00bfff", fontSize: "40px", marginRight: 2 }}
                />
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      color: "#0a244f",
                      marginBottom: "5px",
                      textAlign: "left",
                    }}
                  >
                    Address
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#6c757d", textAlign: "left",}}>
                    Victoria Industrial Park, 17, Rd Number 5, Kathwada,
                    Gujarat 382430
                  </Typography>
                </Box>
              </Box>
            </Grid>

            {/* Mail */}
            <Grid item xs={12} sm={6}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: "20px",
                  borderRadius: "8px",
                  backgroundColor: "white",
                  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <MailOutline
                  sx={{ color: "#00bfff", fontSize: "40px", marginRight: 2 }}
                />
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      color: "#0a244f",
                      marginBottom: "5px",
                      textAlign: "left",
                    }}
                  >
                    Mail Us
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#6c757d" }}>
                    info@darianindustries.com
                  </Typography>
                </Box>
              </Box>
            </Grid>

            {/* Telephone */}
            <Grid item xs={12} sm={6}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: "20px",
                  borderRadius: "8px",
                  backgroundColor: "white",
                  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                  textAlign: "left",
                }}
              >
                <Phone
                  sx={{ color: "#00bfff", fontSize: "40px", marginRight: 2 }}
                />
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      color: "#0a244f",
                      marginBottom: "5px",
                    }}
                  >
                    Telephone
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#6c757d" }}>
                    (+91) 63542 73453
                  </Typography>
                </Box>
              </Box>
            </Grid>

            {/* Map */}
            <Grid item xs={12}>
              <Box
                sx={{
                  width: "100%",
                  height: "300px",
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.709901289054!2d72.6883211!3d23.0385403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8710f72080c5%3A0xb0f7ed6e3b6bcdcf!2sDarian%20Enterprise!5e0!3m2!1sen!2sin!4v1695026893246!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: "none" }}
                  allowFullScreen
                  loading="lazy"
                  title="Google Maps"
                ></iframe>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
