import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { CardMedia, Stack } from "@mui/material";

const Header = () => {
  return (
    <>
      <Box>
        <AppBar
          position="fixed"
          sx={{ bgcolor: "transparent", boxShadow: "none" }}
        >
          <Toolbar>
            <CardMedia
              component={"image"}
              image="./images/logo.png"
              alt="logo name"
              sx={{
                width: "87px",
                height: "99px",
                marginTop: "10px",
                marginLeft: "30px",
              }}
            />
            <Stack direction={"row"} sx={{ gap: "40px", marginLeft: "300px" }}>
              <Typography
                sx={{
                  fontFamily: "poppins",
                  fontSize: "22px",
                  fontWeight: "bold",
                }}
              >
                Home
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "22px",
                  fontWeight: "bold",
                }}
              >
                Blog
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "22px",
                  fontWeight: "bold",
                }}
              >
                Contact US
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "22px",
                  fontWeight: "bold",
                }}
              >
                Services
              </Typography>
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
