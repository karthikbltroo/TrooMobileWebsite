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

const UserverificationList = () => {
  const [verificationRequests, setVerificationRequests] = useState([]);

  useEffect(() => {
    const headers = {
      Accept: "application/json",
      Authorization:
        "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiZjVhMjIwMDMtZGNkYi00MTVkLWFjYzQtZjliODYwMDcyZjQ0IiwiZXhwaXJlc19hdCI6IjIwMjMtMDktMjAgMTM6MTg6MTEgKzAwMDAifQ.rQwlbz-13JTvJb2WWJuXo2QJd2lia0uBWbwjUmqFY4I",
    };

    // Make a GET request to the API with the specified headers
    axios
      .get("https://dev.gotroo.in/verification_requests.json", {
        headers: headers,
      })
      .then((response) => {
        const { verification_requests: requests } = response.data.data;
        setVerificationRequests(requests);
      })
      .catch((error) => {
        console.error("Error fetching verification requests:", error);
      });
  }, []);

  return (
    <>
      {/* <Box
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
             Request For New Verification
            </Typography>
          </Box>

          <Box style={{ padding: "20px 30px" }}>
            <Box>
              {verificationRequests.map((request) => (
                <Box
                  key={request.id}
                  variant="outlined"
                  style={{ marginBottom: "16px" }}
                >
                  <Box>
                    <Grid container spacing={0.1}>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="h6">
                          {`${request.extra_details.candidate_details.first_name} ${request.extra_details.candidate_details.last_name}`}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography
                          color="textSecondary"
                          variant="subtitle1"
                          gutterBottom
                        >
                          Status: {request.status}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography color="textSecondary" gutterBottom>
                          Created At: {request.created_at}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography color="textSecondary" gutterBottom>
                          Updated At: {request.updated_at}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={12}>
                        <Divider style={{marginTop:'10px'}} />
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Card>
      </Box>
    </Box> */}

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
                Verification Requests
              </Typography>
            </Box>

            <Box style={{ padding: "20px 30px" }}>
              <Box>
                {verificationRequests.map((request) => (
                  <Box
                    key={request.id}
                    variant="outlined"
                    style={{ marginBottom: "16px" }}
                  >
                    <Box>
                      <Grid container spacing={0.1}>
                        <Grid item xs={12} sm={6}>
                          <Typography variant="subtitle1" color="secondary">
                            {`${request.extra_details.candidate_details.first_name} ${request.extra_details.candidate_details.last_name}`}
                          </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Typography
                            // color="textSecondary"
                            variant="subtitle2"
                            gutterBottom
                            color="gray"
                          >
                            Status - {request.status}
                            
                          </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Typography color="textSecondary" gutterBottom fontSize={14} >
                            Created At - {request.created_at}
                          </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Typography color="textSecondary" gutterBottom fontSize={14}>
                            Updated At - {request.updated_at}
                          </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                          <Divider sx={{ marginTop: "8px", borderTopWidth: "1px" }} />
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Card>
        </Box>
      </Box>
    </>
  );
};

export default UserverificationList;
