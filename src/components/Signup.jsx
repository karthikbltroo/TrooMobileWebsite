import React, { useState, useEffect } from "react";
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
  Snackbar,
  MenuItem,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import Profile from "./candidates_comps/Profile";
import { useForm } from "react-hook-form";
import Axios from "axios";
import { useAuth } from "./utils/AuthContext";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

import CircularProgress from "@mui/material/CircularProgress";

const BorderBox = styled(Box)({
  display: "flex",
  height: "90vh",
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
  marginTop:'-35px',
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

const Signup = () => {
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

  const [selectedDate, setSelectedDate] = useState(null);
  const [otpSent, setOtpSent] = useState(false);
  const [enteredOtp, setEnteredOtp] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;

  const onSubmit = async (data) => {
    // Data to be sent in the API request
    const requestData = {
      primary_phone: data.mobilenumber,
      first_name: data.firstname,
      last_name: data.lastname,
      dob: selectedDate?.format("DD/MM/YYYY"),
      gender: data.gender,
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
        "https://dev.gotroo.in/sessions/otp_get.json",
        requestData,
        config
      );

      if (response.data.success) {
        setMessage(response.data.message);
        setOtpSent(true);
        setSnackbarOpen(true);

        const queryString = `?mobilenumber=${data.mobilenumber}`;
        // navigate(`/${queryString}`);
        navigate(
          `/LoginMobileResFromSignup?mobilenumber=${data.mobilenumber}&fromSignUp=true`
        );
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
                <Snackbar
                  open={snackbarOpen}
                  autoHideDuration={6000}
                  onClose={() => setSnackbarOpen(false)}
                  message={message}
                />
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
                        Sign Up
                      </Typography>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField
                        // inputProps={{ style: { fontSize: 23 } }} // font size of input text
                        // InputLabelProps={{
                        //   style: { fontSize: 23, fontWeight: "400" },
                        // }} // font size of input label
                        size="large"
                        placeholder="Enter First name"
                        label="First Name"
                        variant="standard"
                        fullWidth
                        required
                        {...register("firstname", {
                          required: true,
                          pattern: {
                            value: /^[a-zA-Z ]*$/,
                            message: "Invalid Text Entry",
                          },
                        })}
                        error={!!errors.firstname}
                        helperText={
                          errors.firstname && errors.firstname.message
                        }
                      />
                    </Grid>

                    <Grid xs={12} sm={6} item>
                      <TextField
                        // inputProps={{ style: { fontSize: 23 } }} // font size of input text
                        // InputLabelProps={{
                        //   style: { fontSize: 23, fontWeight: "400" },
                        // }} // font size of input label
                        size="large"
                        placeholder="Enter Last name"
                        label="Last Name"
                        variant="standard"
                        fullWidth
                        {...register("lastname", {
                          pattern: {
                            value: /^[a-zA-Z ]*$/,
                            message: "Invalid Text Entry",
                          },
                        })}
                        error={!!errors.lastname}
                        helperText={errors.lastname && errors.lastname.message}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField
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
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField
                        type="email"
                        placeholder="Enter email"
                        label="Email"
                        variant="standard"
                        fullWidth
                        required
                        {...register("email", {
                          required: true,
                          pattern: {
                            value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                            message: "Email is not valid",
                          },
                        })}
                        error={!!errors.email}
                        helperText={errors.email && errors.email.message}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        select
                        variant="standard"
                        label="Gender"
                        defaultValue=""
                        {...register("gender")}
                        error={!!errors.gender}
                        helperText={errors.gender && "Gender is required"}
                      >
                        <MenuItem value="">Not Selected</MenuItem>
                        <MenuItem value="Male">Male</MenuItem>
                        <MenuItem value="Female">Female</MenuItem>
                        <MenuItem value="Gender neutral">
                          Gender Neutral
                        </MenuItem>
                      </TextField>
                    </Grid>

                    <Grid xs={12} sm={6} item>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          label="Date of birth"
                          slotProps={{ textField: { variant: "standard" } }}
                          format="DD/MM/YYYY"
                          value={selectedDate} // Use selectedDate state
                          onChange={(newValue) => setSelectedDate(newValue)} // Update selectedDate state
                          renderInput={(props) => <TextField {...props} />}
                          maxDate={dayjs(formattedDate)}
                        />
                      </LocalizationProvider>
                    </Grid>

                    <Grid item xs={12}>
                      <Typography style={{ color: "#000" }} variant="body2">
                        Note : Only sign up for a client is availabe here.If you
                        want to sign up as a candidate, Please go to the Troo
                        website{" "}
                        <Link href="https://www.app.gotroo.in" target="_blank">
                          www.app.gotroo.in
                        </Link>
                      </Typography>
                    </Grid>

                    <Grid item xs={12}>
                      <Typography variant="body2">
                        Click "Get OTP" to agree to Troo's Terms of Use and
                        acknowledge that our Privacy Policy applies to you.
                      </Typography>
                    </Grid>

                    <Grid
                      item
                      xs={12}
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <Button type="submit" variant="contained" color="primary">
                        Get OTP
                      </Button>
                    </Grid>
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
        <Image
          src="src\assets\signin-left.webp"
          alt="User Profile"
          style={{ width: "40%", height: "50vh", objectFit: "cover" }}
        />
      </LeftDivision>

      <RightDivision>
        <Box
          sx={{
            height: "100%",
            // margin: " 30px auto",
            // maxWidth: "95vw",
            // display: { xs: "flex", sm: "block" }
          }}
        >
          <Box sx={{ margin: " 20px auto", width: "95%", height: "95vh" }}>
            <Card style={{ borderRadius: "14px" }}>
              <Box style={{ padding: "20px  30px" }}>
                <Snackbar
                  open={snackbarOpen}
                  autoHideDuration={6000}
                  onClose={() => setSnackbarOpen(false)}
                  message={message}
                />
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
                      sm={12}
                    >
                      <Typography variant="h4" style={{ color: "#DA1F2c" }}>
                        {" "}
                        Sign Up
                      </Typography>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField
                        // inputProps={{ style: { fontSize: 23 } }} // font size of input text
                        // InputLabelProps={{
                        //   style: { fontSize: 23, fontWeight: "400" },
                        // }} // font size of input label
                        size="large"
                        placeholder="Enter First name"
                        label="First Name"
                        variant="standard"
                        fullWidth
                        required
                        {...register("firstname", {
                          required: true,
                          pattern: {
                            value: /^[a-zA-Z ]*$/,
                            message: "Invalid Text Entry",
                          },
                        })}
                        error={!!errors.firstname}
                        helperText={
                          errors.firstname && errors.firstname.message
                        }
                      />
                    </Grid>

                    <Grid xs={12} sm={6} item>
                      <TextField
                        // inputProps={{ style: { fontSize: 23 } }} // font size of input text
                        // InputLabelProps={{
                        //   style: { fontSize: 23, fontWeight: "400" },
                        // }} // font size of input label
                        size="large"
                        placeholder="Enter Last name"
                        label="Last Name"
                        variant="standard"
                        fullWidth
                        {...register("lastname", {
                          pattern: {
                            value: /^[a-zA-Z ]*$/,
                            message: "Invalid Text Entry",
                          },
                        })}
                        error={!!errors.lastname}
                        helperText={errors.lastname && errors.lastname.message}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField
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
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField
                        type="email"
                        placeholder="Enter email"
                        label="Email"
                        variant="standard"
                        fullWidth
                        required
                        {...register("email", {
                          required: true,
                          pattern: {
                            value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                            message: "Email is not valid",
                          },
                        })}
                        error={!!errors.email}
                        helperText={errors.email && errors.email.message}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        select
                        variant="standard"
                        label="Gender"
                        defaultValue=""
                        {...register("gender")}
                        error={!!errors.gender}
                        helperText={errors.gender && "Gender is required"}
                      >
                        <MenuItem value="">Not Selected</MenuItem>
                        <MenuItem value="Male">Male</MenuItem>
                        <MenuItem value="Female">Female</MenuItem>
                        <MenuItem value="Gender neutral">
                          Gender Neutral
                        </MenuItem>
                      </TextField>
                    </Grid>

                    <Grid xs={12} sm={6} item>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          label="Date of birth"
                          slotProps={{ textField: { variant: "standard" } }}
                          format="DD/MM/YYYY"
                          value={selectedDate} // Use selectedDate state
                          onChange={(newValue) => setSelectedDate(newValue)} // Update selectedDate state
                          renderInput={(props) => <TextField {...props} />}
                          maxDate={dayjs(formattedDate)}
                        />
                      </LocalizationProvider>
                    </Grid>

                    <Grid item xs={12}>
                      <Typography style={{ color: "#000" }} variant="body2">
                        Note : Only sign up for a client is availabe here.If you
                        want to sign up as a candidate, Please go to the Troo
                        website{" "}
                        <Link href="https://www.app.gotroo.in" target="_blank">
                          www.app.gotroo.in
                        </Link>
                      </Typography>
                    </Grid>

                    <Grid item xs={12}>
                      <Typography variant="body2">
                        Click "Get OTP" to agree to Troo's Terms of Use and
                        acknowledge that our Privacy Policy applies to you.
                      </Typography>
                    </Grid>

                    <Grid
                      item
                      xs={12}
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <Button type="submit" variant="contained" color="primary">
                        Get OTP
                      </Button>
                    </Grid>
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

export default Signup;
