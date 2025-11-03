import { Box, Button, CardMedia, Stack, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Box>
      <Box sx={{ textAlign: "center" }}>
        <Typography
          sx={{
            fontFamily: "Sansita Swashed",
            fontSize: "64px",
            color: "black",
            fontWeight: "600",
            marginTop: "100px",
          }}
        >
          Explore More
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "50px",
        }}
      >
        <Stack direction={"row"} sx={{ gap: "30px" }}>
          <Typography
            sx={{
              color: "#5D5D5D",
              fontFamily: "Poppins",
              fontSize: "24px",
              fontWeight: "Bold",
              borderBottom: "5px solid #933C24",
            }}
          >
            Cake
          </Typography>
          <Typography
            sx={{
              color: "#5D5D5D",
              fontFamily: "Poppins",
              fontSize: "24px",
              fontWeight: "Bold",
            }}
          >
            Muffins
          </Typography>
          <Typography
            sx={{
              color: "#5D5D5D",
              fontFamily: "Poppins",
              fontSize: "24px",
              fontWeight: "Bold",
            }}
          >
            Croissant
          </Typography>
          <Typography
            sx={{
              color: "#5D5D5D",
              fontFamily: "Poppins",
              fontSize: "24px",
              fontWeight: "Bold",
            }}
          >
            Bread
          </Typography>
          <Typography
            sx={{
              color: "#5D5D5D",
              fontFamily: "Poppins",
              fontSize: "24px",
              fontWeight: "Bold",
            }}
          >
            Tart
          </Typography>
          <Typography
            sx={{
              color: "#5D5D5D",
              fontFamily: "Poppins",
              fontSize: "24px",
              fontWeight: "Bold",
            }}
          >
            Favourite
          </Typography>
        </Stack>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "100px",
        }}
      >
        <Stack direction={"row"} sx={{ gap: "10px" }}>
          <CardMedia
            component={"image"}
            image="./images/Rectangle20.png"
            alt="food"
            sx={{ width: "270px", height: "222px" }}
          />{" "}
          <CardMedia
            component={"image"}
            image="./images/Rectangle21.png"
            alt="food"
            sx={{ width: "270px", height: "222px" }}
          />
          <CardMedia
            component={"image"}
            image="./images/Rectangle22.png"
            alt="food"
            sx={{ width: "270px", height: "222px" }}
          />
        </Stack>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        <Stack direction={"row"} sx={{ gap: "10px" }}>
          <CardMedia
            component={"image"}
            image="./images/Rectangle23.png"
            alt="food"
            sx={{ width: "270px", height: "222px" }}
          />{" "}
          <CardMedia
            component={"image"}
            image="./images/Rectangle24.png"
            alt="food"
            sx={{ width: "270px", height: "222px" }}
          />
          <CardMedia
            component={"image"}
            image="./images/Rectangle25.png"
            alt="food"
            sx={{ width: "270px", height: "222px" }}
          />
        </Stack>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "100px",
        }}
      >
        <Box
          sx={{
            backgroundImage: `url(${"./images/AboutBg.png"})`,
            width: "1280px",
            height: "454px",
            backgroundRepeat: "no-repeat",
            textAlign: "center",
          }}
        >
          <Stack direction={"column"} sx={{ marginTop: "40px" }}>
            <Typography
              sx={{
                color: "#F5F5F5",
                fontFamily: "Sansita Swashed",
                fontSize: "48px",
                fontWeight: "Bold",
              }}
            >
              About Us
            </Typography>
            <Typography
              sx={{
                marginLeft: "470px",
                color: "#B9B9B9",
                fontFamily: "Sansita Swashed",
                fontSize: "24px",
                height: "104px",
                width: "343px",
              }}
            >
              Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel
              bibendum lorem. Morbi convallis.
            </Typography>
            <Button
              sx={{
                marginTop: "40px",
                marginLeft: "550px",
                bgcolor: "#933C24",
                height: "63px",
                width: "195px",
                color: "#F5F5F5",
                fontFamily: "Inter",
                fontSize: "24px",
              }}
            >
              Read More
            </Button>
          </Stack>
        </Box>
      </Box>

      <Box sx={{ textAlign: "center", marginTop: "80px" }}>
        <Typography
          sx={{
            fontFamily: "Sansita Swashed",
            fontSize: "54px",
            color: "black",
            fontWeight: "Bolder",
          }}
        >
          Featured Treats
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "100px",
        }}
      >
        <Stack direction={"row"} sx={{ gap: "20px" }}>
          <Stack direction={"column"} sx={{ gap: "10px" }}>
            <CardMedia
              component={"image"}
              image="./images/Rectangle156.png"
              alt="food image"
              sx={{ width: "360px", height: "360px" }}
            />
            <Stack direction={"row"} sx={{ gap: "120px" }}>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontSize: "32px",
                  color: "black",
                  fontWeight: "Bold",
                }}
              >
                Puff Pastry
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontSize: "32px",
                  color: "black",
                  fontWeight: "Bold",
                }}
              >
                $8
              </Typography>
            </Stack>
          </Stack>
          <Stack direction={"column"} sx={{ gap: "10px" }}>
            <CardMedia
              component={"image"}
              image="./images/Rectangle153.png"
              alt="food image"
              sx={{ width: "360px", height: "360px" }}
            />
            <Stack direction={"row"} sx={{ gap: "120px" }}>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontSize: "32px",
                  color: "black",
                  fontWeight: "Bold",
                }}
              >
                Doughnuts
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontSize: "32px",
                  color: "black",
                  fontWeight: "Bold",
                }}
              >
                $8
              </Typography>
            </Stack>
          </Stack>
          <Stack direction={"column"} sx={{ gap: "10px" }}>
            <CardMedia
              component={"image"}
              image="./images/Rectangle154.png"
              alt="food image"
              sx={{ width: "360px", height: "360px" }}
            />
            <Stack direction={"row"} sx={{ gap: "120px" }}>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontSize: "32px",
                  color: "black",
                  fontWeight: "Bold",
                }}
              >
                Brownies
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontSize: "32px",
                  color: "black",
                  fontWeight: "Bold",
                }}
              >
                $8
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default About;
