"use client";
import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

const HeroSection = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${"./images/background.png"})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "855px",
        backgroundSize: "cover",
      }}
    >
      <Stack
        direction={"column"}
        sx={{ paddingTop: "350px", marginLeft: "50px" }}
      >
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontSize: "24px",
            fontWeight: "Bold",
            color: "#E9BD8C",
          }}
        >
          Delicious Cafe
        </Typography>
        <Typography
          sx={{
            fontFamily: "Sansita Swashed",
            fontSize: "74px",
            width: "424px",
            height: "148px",
            color: "#F5F5F5",
          }}
        >
          Sweet Treats, Perfect Eats
        </Typography>
        <Stack direction={"row"} sx={{ marginTop: "70px", gap: "20px" }}>
          <Button
            sx={{
              fontSize: "24px",
              fontFamily: "Inter",
              bgcolor: "#933C24",
              width: "194px",
              height: "64px",
              color: "#000000",
              textTransform: "none",
            }}
          >
            Shop Now
          </Button>
          <Button
            sx={{
              fontSize: "24px",
              fontFamily: "Inter",
              color: "#933C24",
              width: "194px",
              height: "64px",
              bgcolor: "transparent",
              textTransform: "none",
            }}
          >
            learn More
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default HeroSection;
