import React from "react";
import { Box, Button, styled, Card, CardContent,Grid,Typography } from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import BrandingWatermarkOutlinedIcon from "@mui/icons-material/BrandingWatermarkOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";
import ReviewsOutlinedIcon from "@mui/icons-material/ReviewsOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  NavLink,
} from "react-router-dom";

// const IconContainer = styled("div")(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   marginRight: theme.spacing(2),
//   marginBottom: theme.spacing(1),
//   "&:last-child": {
//     marginRight: 0,
//   },
// }));

const StyledButton = styled(Button)(({ theme }) => ({
  // display: "flex",
  // alignItems: "center",
  textTransform: "capitalize",
  "&.active": {
    borderBottom: `4px solid red`,
    fontWeight: "bold",
    "& svg": {
      color: "#DA1F2c",
    },
  },
  "&:hover": {
    backgroundColor: "black",
    color: "white",
  },
}));

const NineIconsLinks = () => {
  return (
    <>
      {/* <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "20px",
        }}
      >
        <Card variant="outlined" sx={{ maxWidth: "95vw" }}>
          <CardContent>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <IconContainer>
                <StyledButton
                  component="a"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <PersonOutlineOutlinedIcon sx={{ marginRight: "0.5rem" }} />
                  <span>Profile</span>
                </StyledButton>
              </IconContainer>
              <IconContainer>
                <StyledButton
                  component="a"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BrandingWatermarkOutlinedIcon
                    sx={{ marginRight: "0.5rem" }}
                  />
                  <span>Identity proofs</span>
                </StyledButton>
              </IconContainer>
              <IconContainer>
                <StyledButton
                  component="a"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LocationOnOutlinedIcon sx={{ marginRight: "0.1rem" }} />
                  <span>Addresses</span>
                </StyledButton>
              </IconContainer>
            </Box>
          </CardContent>
        </Card>
      </Box> */}

      <h2>Second copy</h2>
      <Box>
      <Box style={{ maxWidth: "95vw", margin: "10px auto" }}>
        <Card >
          <Grid container spacing={1} style={{margin:'10px auto'}} >
            <Grid xs={4} sm={2} item>
             
                <StyledButton
                  component={NavLink}
                  to="profile"
                  activeClassName="active"
                  color="inherit"
                >
                  <BrandingWatermarkOutlinedIcon
                    sx={{ marginRight: "0.5rem" }}
                  />
                      <Typography style={{ fontSize: "18px" }}>Profile </Typography>
                </StyledButton>
            
            </Grid>
            <Grid xs={4} sm={2} item>
             
                <StyledButton
                  component={NavLink}
                  to="identityproofs"
                  activeClassName="active"
                  color="inherit"
                >
                  <BrandingWatermarkOutlinedIcon
                    sx={{ marginRight: "0.5rem" }}
                  />
                      <Typography style={{ fontSize: "18px" }}>Profile </Typography>
                </StyledButton>
            
            </Grid>
            <Grid xs={4} sm={2} item>
            
                <StyledButton
                component={NavLink}
                to="addresses"
                activeClassName="active"
                color="inherit"
                >
                  <BrandingWatermarkOutlinedIcon
                    sx={{ marginRight: "0.5rem" }}
                  />
                  <span>Identity proofs</span>
                </StyledButton>
             
            </Grid>
            <Grid xs={4} sm={2} item>
             
                <StyledButton
                 component={NavLink}
                 to="education"
                 activeClassName="active"
                 color="inherit"
                >
                  <BrandingWatermarkOutlinedIcon
                    sx={{ marginRight: "0.5rem" }}
                  />
                  <span>Identity proofs</span>
                </StyledButton>
             
            </Grid>
            <Grid xs={4} sm={2} item>
             
                <StyledButton
                  component={NavLink}
                  to="workhistory"
                  activeClassName="active"
                  color="inherit"
                >
                  <BrandingWatermarkOutlinedIcon
                    sx={{ marginRight: "0.5rem" }}
                  />
                  <span>Identity proofs</span>
                </StyledButton>
             
            </Grid>
            <Grid xs={4} sm={2} item>
             
                <StyledButton
                 component={NavLink}
                 to="reviews"
                 activeClassName="active"
                 color="inherit"
                >
                  <BrandingWatermarkOutlinedIcon
                    sx={{ marginRight: "0.5rem" }}
                  />
                  <span>Identity proofs</span>
                </StyledButton>
            
            </Grid>
          </Grid>
        </Card>
      </Box>
      <Outlet />
      </Box>
    </>
  );
};

export default NineIconsLinks;
