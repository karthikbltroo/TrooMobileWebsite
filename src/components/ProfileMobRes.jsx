import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Snackbar,
  Divider,
  Button,
} from "@mui/material";
import axios from "axios";

const ProfileMobRes = () => {
  const [userData, setUserData] = useState(null);

  let token = localStorage.getItem("accessToken");

  useEffect(() => {
    const headers = {
      Accept: "application/json",
      Authorization: token,
    };

    // Make a GET request to the API with the specified headers
    axios
      .get("https://dev.gotroo.in/myprofile.json", {
        headers: headers,
      })
      .then((response) => {
        setUserData(response.data.data.user);
      })
      .catch((error) => {
        console.error("Error fetching verification requests:", error);
      });
  }, []);

  return (
    <>
      <Box
        sx={{
          margin: "30px auto",
          maxWidth: "95vw",
        }}
      >
        <Box sx={{ margin: "30px auto", width: "95%" }}>
          <Card style={{ borderRadius: "14px" }}>
            <Box
              style={{
                backgroundColor: "#727272",
                color: "#fff",
                height: "50px",
                padding: "10px 30px",
              }}
            >
              <Typography style={{ fontSize: "24px", fontWeight: "600" }}>
                Profile
              </Typography>
            </Box>

            <Box style={{ padding: "20px 30px" }}>
              <Box style={{ margin: "10px auto" }}>
                <Grid container spacing={3}>
                  <Grid
                    item
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      // color="textSecondary"
                      variant="subtitle2"
                      gutterBottom
                      color="gray"
                    >
                      Name
                    </Typography>
                    <Typography
                      color="#000"
                      gutterBottom
                      fontSize={20}
                      style={{ marginLeft: "20px" }}
                    >
                      {userData
                        ? `${userData.first_name} ${userData.last_name}`
                        : ""}
                    </Typography>
                  </Grid>
                </Grid>

                <Grid container spacing={1}>
                  <Grid
                    item
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      // color="textSecondary"
                      variant="subtitle2"
                      gutterBottom
                      color="gray"
                    >
                      Mobile Number
                    </Typography>
                    <Typography
                      color="#000"
                      gutterBottom
                      fontSize={20}
                      style={{ marginLeft: "20px" }}
                    >
                      {userData ? userData.primary_phone : ""}
                    </Typography>
                  </Grid>
                </Grid>

                <Grid container spacing={1}>
                  <Grid
                    item
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      // color="textSecondary"
                      variant="subtitle2"
                      gutterBottom
                      color="gray"
                    >
                      E-Mail
                    </Typography>
                    <Typography
                      color="#000"
                      gutterBottom
                      fontSize={20}
                      style={{ marginLeft: "10px" }}
                    >
                      {userData ? userData.primary_phone : ""}
                    </Typography>
                  </Grid>
                </Grid>
{/* 
                <Grid container spacing={1}>
                  <Grid
                    item
                    xs={6}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <Typography variant="subtitle2" gutterBottom color="gray">
                      Name:
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <Typography color="#000" gutterBottom fontSize={20}>
                      {userData
                        ? `${userData.first_name} ${userData.last_name}`
                        : ""}
                    </Typography>
                  </Grid>
                </Grid>

                <Grid container spacing={1}>
                  <Grid
                    item
                    xs={6}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <Typography variant="subtitle2" gutterBottom color="gray">
                      Mobile Number:
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <Typography color="#000" gutterBottom fontSize={20}>
                      {userData ? userData.primary_phone : ""}
                    </Typography>
                  </Grid>
                </Grid>

                <Grid container spacing={1}>
                  <Grid
                    item
                    xs={6}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <Typography variant="subtitle2" gutterBottom color="gray">
                      E-Mail:
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <Typography color="#000" gutterBottom fontSize={20}>
                      {userData ? userData.email : ""}
                    </Typography>
                  </Grid>
                </Grid> */}

                {/* <Typography variant="body1">
                  Date of Birth {userData ? userData.dob : ""}
                </Typography>
                <Typography variant="body1">
                  Gender: {userData ? userData.gender : ""}
                </Typography> */}
              </Box>
            </Box>
          </Card>
        </Box>
      </Box>
    </>
  );
};

export default ProfileMobRes;
