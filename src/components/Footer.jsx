import React, { useState } from "react";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  Avatar,
  Tooltip,
  IconButton,
  MenuItem,
  Box,
  Menu,
  SvgIcon,
  Stack,
  styled,
  Container,
  Grid,
  Link,
} from "@mui/material";
import BadgeIcon from "@mui/icons-material/Badge";
import DrawerComp from "./DrawerComp";
import SVGComponent from "./SVGComponent";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

const Footer = () => {
  return (
    <>
      {location.pathname !== "/" &&
        location.pathname !== "/LoginMobileResFromSignup" &&
        location.pathname !== "/LoginMobileResDirectSecond" &&
        location.pathname !== "/signup" && (
          <Box
            component="footer"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[200]
                  : theme.palette.grey[800],
              p: 6,
            }}
            style={{marginTop:'70vh'}}
          >
            <Container maxWidth="lg" >
              <Grid container spacing={5}>
                <Grid item xs={12} sm={4}>
                  <Typography variant="h6" color="text.primary" gutterBottom>
                    About Us
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  Track & verify the full-career path of your potential employees
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography variant="h6" color="text.primary" gutterBottom>
                    Contact Us
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  Address: No. 1605, 11th Main, Off Jeevan Bhima Nagar Main Road, HAL Stage 3, Bengaluru, Bengaluru Urban, Karnataka,560008
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Email: support@gotroo.in
                  </Typography>
                  {/* <Typography variant="body2" color="text.secondary">
                    Phone: +1 234 567 8901
                  </Typography> */}
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography variant="h6" color="text.primary" gutterBottom>
                    Follow Us
                  </Typography>
                  <Link href="https://www.facebook.com/" color="inherit">
                    <Facebook />
                  </Link>
                  <Link
                    href="https://www.instagram.com/"
                    color="inherit"
                    sx={{ pl: 1, pr: 1 }}
                  >
                    <Instagram />
                  </Link>
                  <Link href="https://www.twitter.com/" color="inherit">
                    <Twitter />
                  </Link>
                </Grid>
              </Grid>
              <Box mt={5}>
                <Typography
                  variant="body2"
                  color="text.primary"
                  align="center"
                >
                  {"Copyright © "}
                  <Link color="inherit" href="https://dev.gotroo.in/sessions/signin">
                    Troo
                  </Link>{" "}
                  {new Date().getFullYear()}
                  {"."}
                </Typography>
              </Box>
            </Container>
          </Box>
        )}
    </>
  );
};

export default Footer;
