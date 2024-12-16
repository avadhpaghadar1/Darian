import React from "react";
import { Box } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Help = () => {
  const sendMessageOnWhatsApp = () => {
    const phoneNumber = "+916354273453"; // Replace with the desired WhatsApp number
    const message = "Hello, How are you!"; // Replace with the default message
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp link in a new tab
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 1000,
        cursor: "pointer",
      }}
      onClick={sendMessageOnWhatsApp}
    >
      <WhatsAppIcon
        sx={{
          color: "white",
          fontSize: 60,
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          borderRadius: "50%",
          padding: "10px",
          backgroundColor: "#25D366",
           "&:hover": {
          backgroundColor: "white",
          color:"#25D366",
        },
        }}
      />
    </Box>
  );
};

export default Help;
