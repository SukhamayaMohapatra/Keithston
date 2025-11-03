"use client";
import { Box, Button, CardMedia, Stack, Typography } from "@mui/material";
import React from "react";
import InfoOutlineIcon from "@mui/icons-material/InfoOutline";

const Dashboard = () => {
  return (
    <Box>
      <Typography
        sx={{
          fontFamily: "Sansita Swashed",
          fontSize: "64px",
          color: "black",
          fontWeight: "600",
          textAlign: "center",
          marginTop: "50px",
          marginBottom: "50px",
        }}
      >
        Top Products
      </Typography>
      <Stack
        direction={"row"}
        sx={{
          gap: "10px",

          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "360px",
            height: "411px",
            backgroundImage: `url(${"./images/fotter_image.png"})`,
          }}
        >
          <CardMedia
            component={"image"}
            image="./images/food1.png"
            alt="food"
            sx={{ width: "270px", height: "222px" }}
          />
          <Stack direction={"row"} sx={{ gap: "150px", marginLeft: "40px" }}>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontSize: "24px",
                fontWeight: "600",
                color: "white",
              }}
            >
              $40
            </Typography>
            <InfoOutlineIcon fontSize="large" sx={{ color: "white" }} />
          </Stack>
          <Stack
            direction={"row"}
            sx={{ gap: "30px", marginLeft: "40px", marginTop: "10px" }}
          >
            <Typography
              sx={{
                fontFamily: "Inter",
                fontSize: "24px",
                fontWeight: "400",
                color: "white",
                width: "147px",
                height: "46px",
              }}
            >
              Whole Grain Bread
            </Typography>
            <Button
              sx={{
                bgcolor: "#933C24",
                width: "71px",
                height: "49px",
                color: "white",
                textTransform: "none",
                marginTop: "10px",
                fontSize: "24px",
              }}
            >
              Add
            </Button>
          </Stack>
        </Box>
        <Box
          sx={{
            width: "360px",
            height: "411px",
            backgroundImage: `url(${"./images/fotter_image.png"})`,
          }}
        >
          <Stack direction={"column"}>
            <CardMedia
              component={"image"}
              image="./images/food2.png"
              alt="food"
              sx={{ width: "270px", height: "230px" }}
            />
            <Stack direction={"row"} sx={{ gap: "150px", marginLeft: "40px" }}>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontSize: "24px",
                  fontWeight: "600",
                  color: "white",
                }}
              >
                $40
              </Typography>
              <InfoOutlineIcon fontSize="large" sx={{ color: "white" }} />
            </Stack>
            <Stack
              direction={"row"}
              sx={{ gap: "30px", marginLeft: "40px", marginTop: "10px" }}
            >
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontSize: "24px",
                  fontWeight: "400",
                  color: "white",
                  width: "147px",
                  height: "46px",
                }}
              >
                Whole Grain Bread
              </Typography>
              <Button
                sx={{
                  bgcolor: "#933C24",
                  width: "71px",
                  height: "49px",
                  color: "white",
                  textTransform: "none",
                  marginTop: "10px",
                  fontSize: "24px",
                }}
              >
                Add
              </Button>
            </Stack>
          </Stack>
        </Box>
        <Box
          sx={{
            width: "360px",
            height: "411px",
            backgroundImage: `url(${"./images/fotter_image.png"})`,
          }}
        >
          <Stack direction={"column"}>
            <CardMedia
              component={"image"}
              image="./images/food3.png"
              alt="food"
              sx={{ width: "270px", height: "222px" }}
            />
            <Stack direction={"row"} sx={{ gap: "150px", marginLeft: "40px" }}>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontSize: "24px",
                  fontWeight: "600",
                  color: "white",
                }}
              >
                $40
              </Typography>
              <InfoOutlineIcon fontSize="large" sx={{ color: "white" }} />
            </Stack>
            <Stack
              direction={"row"}
              sx={{ gap: "30px", marginLeft: "40px", marginTop: "10px" }}
            >
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontSize: "24px",
                  fontWeight: "400",
                  color: "white",
                  width: "147px",
                  height: "46px",
                }}
              >
                Whole Grain Bread
              </Typography>
              <Button
                sx={{
                  bgcolor: "#933C24",
                  width: "71px",
                  height: "49px",
                  color: "white",
                  textTransform: "none",
                  marginTop: "10px",
                  fontSize: "24px",
                }}
              >
                Add
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
      <Stack
        direction={"row"}
        sx={{
          gap: "10px",
          marginTop: "10px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "360px",
            height: "411px",
            backgroundImage: `url(${"./images/fotter_image.png"})`,
          }}
        >
          <Stack direction={"column"} sx={{ marginLeft: "20px" }}>
            <CardMedia
              component={"image"}
              image="./images/food4.png"
              alt="food"
              sx={{ width: "100%", height: "280px" }}
            />
            <Stack direction={"row"} sx={{ gap: "150px", marginLeft: "40px" }}>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontSize: "24px",
                  fontWeight: "600",
                  color: "white",
                }}
              >
                $40
              </Typography>
              <InfoOutlineIcon fontSize="large" sx={{ color: "white" }} />
            </Stack>
            <Stack
              direction={"row"}
              sx={{ gap: "30px", marginLeft: "40px", marginTop: "10px" }}
            >
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontSize: "24px",
                  fontWeight: "400",
                  color: "white",
                  width: "147px",
                  height: "46px",
                }}
              >
                Whole Grain Bread
              </Typography>
              <Button
                sx={{
                  bgcolor: "#933C24",
                  width: "71px",
                  height: "49px",
                  color: "white",
                  textTransform: "none",
                  marginTop: "10px",
                  fontSize: "24px",
                }}
              >
                Add
              </Button>
            </Stack>
          </Stack>
        </Box>
        <Box
          sx={{
            width: "360px",
            height: "411px",
            backgroundImage: `url(${"./images/fotter_image.png"})`,
          }}
        >
          <Stack direction={"column"}>
            <CardMedia
              component={"image"}
              image="./images/food5.png"
              alt="food"
              sx={{ width: "270px", height: "280px" }}
            />
            <Stack direction={"row"} sx={{ gap: "150px", marginLeft: "40px" }}>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontSize: "24px",
                  fontWeight: "600",
                  color: "white",
                }}
              >
                $40
              </Typography>
              <InfoOutlineIcon fontSize="large" sx={{ color: "white" }} />
            </Stack>
            <Stack
              direction={"row"}
              sx={{ gap: "30px", marginLeft: "40px", marginTop: "10px" }}
            >
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontSize: "24px",
                  fontWeight: "400",
                  color: "white",
                  width: "147px",
                  height: "46px",
                }}
              >
                Whole Grain Bread
              </Typography>
              <Button
                sx={{
                  bgcolor: "#933C24",
                  width: "71px",
                  height: "49px",
                  color: "white",
                  textTransform: "none",
                  marginTop: "10px",
                  fontSize: "24px",
                }}
              >
                Add
              </Button>
            </Stack>
          </Stack>
        </Box>
        <Box
          sx={{
            width: "360px",
            height: "411px",
            backgroundImage: `url(${"./images/fotter_image.png"})`,
          }}
        >
          <Stack direction={"column"}>
            <CardMedia
              component={"image"}
              image="./images/food6.png"
              alt="food"
              sx={{ width: "270px", height: "280px", alignSelf: "center" }}
            />
            <Stack direction={"row"} sx={{ gap: "150px", marginLeft: "40px" }}>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontSize: "24px",
                  fontWeight: "600",
                  color: "white",
                }}
              >
                $40
              </Typography>
              <InfoOutlineIcon fontSize="large" sx={{ color: "white" }} />
            </Stack>
            <Stack
              direction={"row"}
              sx={{ gap: "30px", marginLeft: "40px", marginTop: "10px" }}
            >
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontSize: "24px",
                  fontWeight: "400",
                  color: "white",
                  width: "147px",
                  height: "46px",
                }}
              >
                Whole Grain Bread
              </Typography>
              <Button
                sx={{
                  bgcolor: "#933C24",
                  width: "71px",
                  height: "49px",
                  color: "white",
                  textTransform: "none",
                  marginTop: "10px",
                  fontSize: "24px",
                }}
              >
                Add
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
      <Box
        sx={{
          marginTop: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            backgroundImage: `url(${"./images/group1.png"})`,
            width: "1280px",
            height: "442px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Stack direction={"column"}>
            <Typography
              sx={{
                fontFamily: "Sanshita Swashed",
                fontSize: "48px",
                fontWeight: "600",
                color: "#933C24",
                textAlign: "center",
                width: "309px",
                height: "90px",
              }}
            >
              20% Off Your First Order
            </Typography>
            <Typography
              sx={{
                marginTop: "60px",
                fontFamily: "Inter",
                fontSize: "24px",
                color: "#5D5D5D",
                textAlign: "center",
                width: "309px",
                height: "74px",
              }}
            >
              Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel
              bibenjgg.
            </Typography>
            <Button
              sx={{
                marginTop: "40px",
                marginLeft: "60px",
                bgcolor: "#933C24",
                width: "202px",
                height: "63px",
                color: "white",
                textTransform: "none",
                borderRadius: "12px",
                fontFamily: "Inter",
                fontSize: "24px",
              }}
            >
              Learn More
            </Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
