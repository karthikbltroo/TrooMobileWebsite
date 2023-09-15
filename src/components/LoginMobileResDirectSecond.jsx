import React, {useState,useEffect} from "react";
import {
  Card,
  CardContent,
  Box,
  Typography,
  TextField,
  Button,
  Link as MuiLink,
  useMediaQuery,
  Divider,
  Stack,
  Grid,
  Snackbar
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link, useLocation, useNavigate ,useSearchParams  } from "react-router-dom";
import Profile from "./candidates_comps/Profile";
import { useForm } from "react-hook-form";
import Axios from "axios";
import { useAuth } from "./utils/AuthContext";

const BorderBox = styled(Box)({
  display: "flex",
  height: "80vh",
  marginTop: "40px",
  overflow: "hidden", // To keep the border wrap both divisions
});

const LeftDivision = styled(CardContent)({
  flex: "0 0 40%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#DA1F2c", // Background color for the left division
  width: "40%", // Apply background color to half of the width
  marginLeft: "50px",
  height: "80vh",
});

const Image = styled("img")({
  width: "100%",
  height: "50vh",
});

const RightDivision = styled(CardContent)({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: ({ theme }) => theme.spacing(2),
});

const Form = styled("form")({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: ({ theme }) => theme.spacing(3),
});

const StyledTextField = styled(TextField)({
  width: "100%",
  marginBottom: ({ theme }) => theme.spacing(2),
});

const SignUpButton = styled(Button)({
  width: "100%",
});

const DividerContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: ({ theme }) => theme.spacing(2),
});

const DividerStyled = styled(Divider)({
  backgroundColor: "#1976D2",
});

const LoginMobileResDirectSecond = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [message, setMessage] = useState("");
  const { authData, setAuth } = useAuth();
  

  // const isFromSignUp = location.state && location.state.fromSignUp;

   // Retrieve the 'mobilenumber' query parameter
   const mobileNumberFromQuery = searchParams.get('mobilenumber');
   const isFromSignUp = searchParams.get("fromSignUp") === "true";
   console.log("value is ", isFromSignUp)

   console.log('from params', mobileNumberFromQuery)
   console.log('searchParams:', Object.fromEntries(searchParams));




  const onSubmit = async (data) => {
    // Data to be sent in the API request
    const requestData = {
      user_identifier: mobileNumberFromQuery,
      otp: data.otp,
     
    };

    try {
      setLoading(true); // Show loading spinner
      const config = {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      };

      // Perform the API request using Axios
      const response = await Axios.post(
        "https://dev.gotroo.in/sessions/authenticate.json",
        requestData,
        config
      );

      if (response.data.success) {
        const { token, user_id } = response.data.data;
        setAuth(token, user_id);
        setMessage(response.data.message);
        
        navigate("/addressNew");
        setSnackbarOpen(true);
      } else {
        setMessage(response.data.message || "An error occurred.");
        setSnackbarOpen(true);
      }
      // Open the Snackbar to show the message
    } catch (error) {
      console.log("API Request Error:", error);
      if (error.response && error.response.data) {
        setMessage(
          error.response.data.message ||
            (error.response.status === 500
              ? "Internal Server Error"
              : "An error occurred.")
        );
      } else {
        setMessage("An error occurred");
      }
      setSnackbarOpen(true); // Open the Snackbar to show the error
    } finally {
      setLoading(false); // Hide loading spinner
    }
  };

  


  if (isMobile) {
    return (
      <>
       
        {/* ... mobile UI code ... */}
        <Box
          sx={{
            margin: " 30px auto",
            maxWidth: "95vw",
            // display: { xs: "flex", sm: "block" }
          }}
        >
          <Box sx={{ margin: " 30px auto", width: "95%" }}>
            <Card style={{ borderRadius: "14px" }}>
              <Box style={{ padding: "20px  30px" }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <Image
                        src="src\assets\Image_Edited.png"
                        alt="User Profile"
                        style={{
                          width: "80%",
                          height: "80%",
                          display: "flex",
                          margin: "0px auto",
                        }}
                      />
                    </Grid>

                    <Grid
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      item
                      xs={12}
                      sm={6}
                    >
                      <Typography
                        variant="h4"
                        mt={-5}
                        style={{ color: "#DA1F2c" }}
                      >
                        {" "}
                        Login 
                      </Typography>
                    </Grid>
                    <Snackbar
            open={snackbarOpen}
            autoHideDuration={6000}
            onClose={() => setSnackbarOpen(false)}
            message={message}
          />

                    <Grid item xs={12}>
                      <Typography style={{ color: "#000" }} variant="body2">
                        Note : If you are a client, enter your registered number
                        below. If you are a Candidate, Please login via the Troo
                        website www.app.gotroo.in{" "}
                        <Link href="https://www.app.gotroo.in" target="_blank">
                          www.app.gotroo.in
                        </Link>
                      </Typography>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      {/* <TextField
                        fullWidth
                        size="large"
                        placeholder="Enter Mobile Number"
                        variant="standard"
                        label="Mobile Number"
                        required
                        {...register("mobilenumber", {
                          required: true,
                          pattern: {
                            value: /^\d{10}$/,
                            message: "Invalid phone number",
                          },
                        })}
                        error={!!errors.mobilenumber}
                        helperText={
                          errors.mobilenumber && errors.mobilenumber.message
                        }
                        defaultValue={isFromSignUp ? mobileNumberFromQuery : ""}
                        disabled={isFromSignUp}
                      /> */}

<TextField
                        fullWidth
                        size="large"
                        placeholder="Enter Mobile Number"
                        variant="standard"
                        label="Mobile Number"
                        disabled
                        value={mobileNumberFromQuery}
                      />


                    </Grid>

                    {/* {!isFromSignUp && (
                      <>
                    <Grid
                      item
                      xs={12}
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <Button type="submit" variant="contained" color="primary">
                        Get OTP
                      </Button>
                    </Grid>

                    <Grid item xs={12}>
                      <Typography variant="body2">
                        Click "Get OTP" to agree to Troo's Terms of Use and
                        acknowledge that our Privacy Policy applies to you.
                      </Typography>
                    </Grid>
                    </>)} */}

                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        size="large"
                        placeholder="Enter OTP"
                        variant="standard"
                        label="OTP"
                        required
                        {...register("otp", {
                          required: true,
                          pattern: {
                            value: /^\d{6}$/,
                            message: "Invalid OTP",
                          },
                        })}
                        error={!!errors.otp}
                        helperText={errors.otp && errors.otp.message}
                      />
                    </Grid>

                    <Grid
                      item
                      xs={12}
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <Button type="submit" variant="contained" color="primary" >
                        Login  
                      </Button>
                    </Grid>
                    {/* {!isFromSignUp && (
                    <Grid item
                      xs={12}>
                      <Typography
                        variant="body2"
                        style={{display: "flex", justifyContent: "center", marginTop: "5px", fontWeight: "bold",fontSize:'18px' }}
                      >
                        New User
                        <span style={{ marginLeft: "5px" }}>
                          <MuiLink component={Link} to="/signup">
                            Sign Up Here
                          </MuiLink>
                        </span>
                      </Typography>
                    </Grid>)} */}
                  </Grid>
                </form>
              </Box>
            </Card>
          </Box>
        </Box>
      </>
    );
  }

  return (
    // desktop layout
    <BorderBox>
      <LeftDivision>
        <Box style={{ margin: "10px 50px" }}>
          <Typography style={{ color: "#fff" }} variant="h4">
            Verify the truth about career track record
          </Typography>
        </Box>
        <Box style={{ margin: "10px 50px" }}>
          <Typography style={{ color: "#fff" }} variant="h6">
            Login in to use our tool.
          </Typography>
        </Box>
        <Image src="src\assets\signin-left.webp" 

alt="User Profile"
style={{ width: "40%", height: "50vh", objectFit: "cover" }}
         />
      </LeftDivision>

      <RightDivision  >
      <Box
          sx={{
            height:'100%'
            // margin: " 30px auto",
            // maxWidth: "95vw",
            // display: { xs: "flex", sm: "block" }
          }}
        >
          <Box sx={{ margin: " 20px auto", width: "95%", height:'95vh' }}>
            <Card style={{ borderRadius: "14px" }}>
              <Box style={{ padding: "20px  30px" }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Grid container spacing={3}>
           
                    <Grid
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        
                      }}
                      item
                      xs={12}
                      sm={6}
                    >
                      <Typography
                        variant="h4"
                        
                        style={{ color: "#DA1F2c" }}
                      >
                        {" "}
                        Login  
                      </Typography>
                    </Grid>
                    <Snackbar
            open={snackbarOpen}
            autoHideDuration={6000}
            onClose={() => setSnackbarOpen(false)}
            message={message}
          />

                    <Grid item xs={12}>
                      <Typography style={{ color: "#000" }} variant="body2">
                        Note : If you are a client, enter your registered number
                        below. If you are a Candidate, Please login via the Troo
                        website www.app.gotroo.in{" "}
                        <Link href="https://www.app.gotroo.in" target="_blank">
                          www.app.gotroo.in
                        </Link>
                      </Typography>
                    </Grid>




                    <Grid item xs={12} sm={6}>
                    
                      {/* <TextField
                        fullWidth
                        size="large"
                        placeholder="Enter Mobile Number"
                        variant="standard"
                        label="Mobile Number"
                        required
                        {...register("mobilenumber", {
                          required: true,
                          pattern: {
                            value: /^\d{10}$/,
                            message: "Invalid phone number",
                          },
                        })}
                        error={!!errors.mobilenumber}
                        helperText={
                          errors.mobilenumber && errors.mobilenumber.message
                        }
                        defaultValue={isFromSignUp ? mobileNumberFromQuery : ""}
                        disabled={isFromSignUp}
                      /> */}

<TextField
                        fullWidth
                        size="large"
                        placeholder="Enter Mobile Number"
                        variant="standard"
                        label="Mobile Number"
                        disabled
                        value={mobileNumberFromQuery}
                      />




                    </Grid>


                    {/* {!isFromSignUp && (
<>
                    <Grid
                      item
                      xs={6}
                      style={{ display: "flex", justifyContent: "center", alignItems:'center', alignContent:'center', margin:'10px auto' }}
                    >
                      <Button type="submit" variant="contained" color="primary">
                        Get OTP
                      </Button>
                    </Grid>

                    <Grid item xs={12}>
                      <Typography variant="body2">
                        Click "Get OTP" to agree to Troo's Terms of Use and
                        acknowledge that our Privacy Policy applies to you.
                      </Typography>
                    </Grid>
                    </>
                    )} */}

                    <Grid item xs={6}>
                      <TextField
                        fullWidth
                        size="large"
                        placeholder="Enter OTP"
                        variant="standard"
                        label="OTP"
                        required
                        {...register("otp", {
                          required: true,
                          pattern: {
                            value: /^\d{6}$/,
                            message: "Invalid OTP",
                          },
                        })}
                        error={!!errors.otp}
                        helperText={errors.otp && errors.otp.message}
                      />
                    </Grid>

                    <Grid
                      item
                      xs={6}
                      style={{ display: "flex", justifyContent: "center", alignItems:'center', alignContent:'center', margin:'10px auto' }}
                    >
                      <Button type="submit" variant="contained" color="primary">
                        Login
                      </Button>
                    </Grid>


{/* 
                    {!isFromSignUp && (
                    <Grid item
                      xs={12}>
                      <Typography
                        variant="body2"
                        style={{display: "flex", justifyContent: "center", marginTop: "5px", fontWeight: "bold",fontSize:'18px' }}
                      >
                        New User
                        <span style={{ marginLeft: "5px" }}>
                          <MuiLink component={Link} to="/signup">
                            Sign Up Here
                          </MuiLink>
                        </span>
                      </Typography>
                    </Grid>)} */}



                  </Grid>
                </form>
              </Box>
            </Card>
          </Box>
        </Box>
      </RightDivision>
    </BorderBox>
  );
};

export default LoginMobileResDirectSecond;
