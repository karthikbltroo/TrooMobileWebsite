import React, { Component } from "react";
import {
  Box,
  Paper,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  useMediaQuery,
} from "@mui/material";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { responsiveFontSizes } from "@mui/material/styles";
// for search bar
import { IconButton, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Padding } from "@mui/icons-material";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

//

let theme = createTheme();
theme = responsiveFontSizes(theme);

const Home = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/candidates/profile">Candidates</Link>
          </li>
          {/* 
          <li>
            <Link to="/help">Help</Link>
          </li> */}
        </ul>
      </nav>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        {/* <Typography sx={{ typography: { sm: 'h1', xs: 'h6' }}} >
    Hello world!
</Typography> */}
        <Box style={{ fontSize: "20px", marginTop: "20px" }}>
          <ThemeProvider theme={theme}>
            <Typography
              variant="h1"
              component="h6"
              style={{
                fontSize: "40px",
                fontWeight: "bold",
                marginBottom: "10px",
                display: "flex",
                justifyContent: "center",
                margin: "0 auto",
                alignContent: "center",
                alignText: "center",
              }}
            >
              Welcome Name{" "}
            </Typography>

            <Typography
              variant="subtitle"
              component="p"
              style={{
                maxWidth: "65vw",
                margin: "20px auto",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Track & verify the full-career path of your potential employees
            </Typography>

            <TextField
              label="Search Employee name"
              style={{
                width: "80vw",
                marginTop: "30px",
                margin: "0 auto",
                display: "flex",
                boxShadow: " rgba(149, 157, 165, 0.2) 0px 8px 24px",
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </ThemeProvider>
        </Box>
      </Box>
      {/* <Grid>
        <Grid
          item
          xs={12}
          sm={6}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            
            height: "100vh",
            color: "blue",
          }}
        >
          <Typography variant="h1" component="h2">
            Welcome
          </Typography>

          
        </Grid>
            <Grid
          item
          xs={12}
          sm={6}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            
            height: "100vh",
            color: "blue",
          }}
        >
          <Typography variant="h1" component="h2">
            Welcome Troo
          </Typography>
          <Grid item style={{display:'flex'}}>
<Typography  >Track & verify the full-career path of your potential employees</Typography>
</Grid>
          
        </Grid>
      </Grid> */}
    </>
  );
};

export default Home;
