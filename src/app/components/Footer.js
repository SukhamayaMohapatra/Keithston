"use client";

import { Box, CardMedia, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LocalParkingRoundedIcon from "@mui/icons-material/LocalParkingRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Box
      sx={{
        marginTop: "100px",
        backgroundImage: `url(${"./images/fotter_image.png"})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "600px",
        backgroundSize: "cover",
      }}
    >
      <Stack direction={"row"}>
        <CardMedia
          component={"image"}
          image="./images/logo.png"
          alt="logo name"
          sx={{
            width: "120px",
            height: "120px",
            marginTop: "80px",
            marginLeft: "50px",
          }}
        />
        <Typography
          sx={{
            fontFamily: "inter",
            fontSize: "24px",
            fontWeight: "Semi Bold",
            color: "#E9BD8D",
            marginLeft: "900px",
            marginTop: "120px",
          }}
        >
          Follow us
        </Typography>
        <Stack
          direction={"row"}
          sx={{ marginTop: "120px", gap: "40px", marginLeft: "50px" }}
        >
          <FacebookRoundedIcon fontSize="large" sx={{ color: "#E9BD8D" }} />
          <LocalParkingRoundedIcon fontSize="large" sx={{ color: "#E9BD8D" }} />
          <WhatsAppIcon fontSize="large" sx={{ color: "#E9BD8D" }} />
          <InstagramIcon fontSize="large" sx={{ color: "#E9BD8D" }} />
        </Stack>
      </Stack>

      <Divider sx={{ bgcolor: "#E9BD8D", marginTop: "30px" }} />

      <Stack direction={"row"} sx={{ marginLeft: "350px" }}>
        <Stack direction={"column"} sx={{ gap: "15px" }}>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontSize: "36px",
              fontWeight: "Bold",
              color: "#E9BD8D",
            }}
          >
            About Us
          </Typography>
          <Typography
            sx={{
              color: "#F5F5F5",
              fontFamily: "Poppins",
              fontSize: "24px",
              fontWeight: "Semi Bold",
            }}
          >
            (456) 789-12301
          </Typography>
          <Typography
            sx={{
              color: "#F5F5F5",
              fontFamily: "Poppins",
              fontSize: "24px",
              fontWeight: "Semi Bold",
            }}
          >
            info@modrino.co.uk
          </Typography>
          <Typography
            sx={{
              color: "#F5F5F5",
              fontFamily: "Poppins",
              fontSize: "24px",
              fontWeight: "Semi Bold",
            }}
          >
            South 13th street
          </Typography>
          <Typography
            sx={{
              color: "#F5F5F5",
              fontFamily: "Poppins",
              fontSize: "24px",
              fontWeight: "Semi Bold",
            }}
          >
            New york America
          </Typography>
        </Stack>
        <Stack direction={"column"} sx={{ marginLeft: "250px", gap: "15px" }}>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontSize: "36px",
              fontWeight: "Bold",
              color: "#E9BD8D",
            }}
          >
            Explore
          </Typography>
          <Typography
            sx={{
              color: "#F5F5F5",
              fontFamily: "Poppins",
              fontSize: "24px",
              fontWeight: "Semi Bold",
            }}
          >
            Home
          </Typography>
          <Typography
            sx={{
              color: "#F5F5F5",
              fontFamily: "Poppins",
              fontSize: "24px",
              fontWeight: "Semi Bold",
            }}
          >
            Blog
          </Typography>
          <Typography
            sx={{
              color: "#F5F5F5",
              fontFamily: "Poppins",
              fontSize: "24px",
              fontWeight: "Semi Bold",
            }}
          >
            Contact Us
          </Typography>
          <Typography
            sx={{
              color: "#F5F5F5",
              fontFamily: "Poppins",
              fontSize: "24px",
              fontWeight: "Semi Bold",
            }}
          >
            Services
          </Typography>
        </Stack>
        <Stack direction={"column"} sx={{ marginLeft: "400px", gap: "20px" }}>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontSize: "36px",
              fontWeight: "Bold",
              color: "#E9BD8D",
            }}
          >
            Recent News
          </Typography>
          <Stack direction={"row"} sx={{ gap: "20px" }}>
            <CardMedia
              component={"image"}
              image="./images/coffee.png"
              alt="image"
              sx={{ height: "67px", width: "100px" }}
            />
            <Stack direction={"column"}>
              <Typography
                sx={{
                  color: "#E9BD8C",
                  fontFamily: "Poppins",
                  fontSize: "24px",
                }}
              >
                June 14,2024
              </Typography>
              <Typography
                sx={{
                  color: "#F5F5F5",
                  fontFamily: "Poppins",
                  fontSize: "24px",
                }}
              >
                Puff pastry bliss.
              </Typography>
            </Stack>
          </Stack>
          <Stack direction={"row"} sx={{ gap: "20px" }}>
            <CardMedia
              component={"image"}
              image="./images/pastry.png"
              alt="image"
              sx={{ height: "67px", width: "100px" }}
            />
            <Stack direction={"column"}>
              <Typography
                sx={{
                  color: "#E9BD8C",
                  fontFamily: "Poppins",
                  fontSize: "24px",
                }}
              >
                June 14,2024
              </Typography>
              <Typography
                sx={{
                  color: "#F5F5F5",
                  fontFamily: "Poppins",
                  fontSize: "24px",
                }}
              >
                Puff pastry bliss.
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
