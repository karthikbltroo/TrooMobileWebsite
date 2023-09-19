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
  let token = localStorage.getItem("accessToken");
  console.log("token from user verification", token);

  useEffect(() => {
    const headers = {
      Accept: "application/json",
      Authorization:token,
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
          </Card>
        </Box>
      </Box>


    
      <Box
        sx={{
          margin: "30px auto",
          maxWidth: "95vw",
        }}
      >


        <Box sx={{ margin: "30px auto", width: "95%" }}>

        {verificationRequests.length === 0 ? (


<Card style={{ borderRadius: "14px", marginBottom: "16px" }}>
              <CardContent>
                <Typography
                  variant="subtitle2"
                  gutterBottom
                  color="gray"
                  style={{display:'flex', justifyContent:'center', alignContent:'center'}}
                >
                  No User Request Found
                </Typography>
              </CardContent>
            </Card>
          ) : (
          verificationRequests.map((request) => (
            <Card
              key={request.id}
              style={{ borderRadius: "14px", marginBottom: "16px" }}
            >
              <CardContent>
                {/* <Typography variant="subtitle1" color="secondary">
                  {`${request.extra_details.candidate_details.first_name} ${request.extra_details.candidate_details.last_name}`}
                </Typography>
                <Typography variant="subtitle2" gutterBottom color="gray">
                  Status - {request.status}
                </Typography>
                <Typography color="textSecondary" gutterBottom fontSize={14}>
                  Created At - {request.created_at}
                </Typography>
                <Typography color="textSecondary" gutterBottom fontSize={14}>
                  Updated At - {request.updated_at}
                </Typography> */}

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
                      <Typography
                        color="textSecondary"
                        gutterBottom
                        fontSize={14}
                      >
                        Created At - {request.created_at}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography
                        color="textSecondary"
                        gutterBottom
                        fontSize={14}
                      >
                        Updated At - {request.updated_at}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12}></Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          ))
        
          )}
        </Box>
      </Box>




    </>
  );
};

export default UserverificationList;
