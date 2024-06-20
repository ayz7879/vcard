import React from "react";
import {
  Box,
  Typography,
  Avatar,
  Card,
  CardContent,
  useMediaQuery,
  Fade,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

const NameSection = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        height: isSmallScreen ? "auto" : "500px",
        backgroundColor: "#1a1a1a",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        textAlign: "center",
        color: "#ffffff",
      }}
    >
      {/* Background Image */}
      <Box
        component="img"
        src="https://www.desktopbackground.org/download/2560x1600/2015/10/07/1022659_dragon-ball-kid-goku-backgrounds-wallpapers-mbagusi-com_3500x2625_h.png"
        alt="Background"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          filter: "brightness(50%)", // Darken the image for better text contrast
        }}
      />

      {/* Content Overlay */}
      <Fade in={true} timeout={1000}>
        <Card
          variant="outlined"
          sx={{
            position: "relative",
            zIndex: 1,
            backgroundColor: "rgba(255, 255, 255, 0.1)", // Semi-transparent white
            backdropFilter: "blur(10px)", // Glassmorphism effect
            borderRadius: "16px",
            padding: "30px 20px",
            maxWidth: "400px",
            width: "100%",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          }}
        >
          <CardContent>
            <Box sx={{ textAlign: "center", marginBottom: "20px" }}>
              <Avatar
                alt="Profile Picture"
                src="https://is.zobj.net/image-server/v1/images?r=JZVN4JC3LxPt7AZ3D6Rlp1BrH0q7dlyoZPCM9U08H8jT3gTMqbZ_Fu1aDmoh0IChR36JLh0kLWAXUFzJ990UUQ2FpSN5THd4etzN5l4U2VFJ9sHZuDOLlWwo0wmaP_O47MfpiagQyHoANe4ddw290Uy_kqmZ8CIr9P_8UNVcF5g2nPCWlW2QUcDAZJIrBtsZ8qKT2NSP1Mm2T8TTd5va3sUbeeu4x2qKMSIWhQ"
                sx={{
                  width: 100,
                  height: 100,
                  marginBottom: 2,
                  border: "3px solid #fff", // White border for better contrast
                }}
              />
            </Box>
            <Typography variant={isSmallScreen ? "h6" : "h4"} gutterBottom>
              Ashish Yadav
            </Typography>
            <Typography variant="body2" gutterBottom>
              yashish393@gmail.com
            </Typography>
            <Typography variant="body2" gutterBottom>
              +91 7879701086
            </Typography>
            <Typography variant="body2" gutterBottom>
              65/3 Ravi Jagrati Nagar
            </Typography>
          </CardContent>
        </Card>
      </Fade>
    </Box>
  );
};

export default NameSection;
