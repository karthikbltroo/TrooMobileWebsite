import React, { useState, useEffect } from "react";
import {
  Card,
  Typography,
  Box,
  FormControl,
  Grid,
  Button,
  TextField,
  Snackbar,
} from "@mui/material";
import axios from "axios";
import Autocomplete from "@mui/material/Autocomplete";
import { useForm, Controller } from "react-hook-form";
import dayjs from "dayjs";
import { useAuth } from "./utils/AuthContext";
import CircularProgress from "@mui/material/CircularProgress";

const RequestNewVerification = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
  } = useForm();

  // const { authData } = useAuth();
  // const { token, user_id } = authData;

  let token = localStorage.getItem("accessToken");
  console.log("token from Request New Verification", token);

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);

  const [countryOptions, setCountryOptions] = useState([]);
  const [stateOptions, setStateOptions] = useState([]);

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const [countryId, setCountryId] = useState("");
  const [stateId, setStateId] = useState("");
  const [districtId, setDistrictId] = useState("");

  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [districtOptions, setDistrictOptions] = useState([]);

  const [selectedPinCode, setSelectedPinCode] = useState(null);
  const [pinCodeOptions, setPinCodeOptions] = useState([]);
  const [pinCodeId, setPinCodeId] = useState("");

  // State variables for address fields
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [landmark, setLandmark] = useState("");

  // Additional fields
  const [comments, setComments] = useState("");
  const [aadharNumber, setAadharNumber] = useState("");
  const [primaryPhone, setPrimaryPhone] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [fatherFirstName, setFatherFirstName] = useState("");
  const [fatherLastName, setFatherLastName] = useState("");
  const [loading, setLoading] = useState(false);

  // fetch country data
  useEffect(() => {
    axios
      .get("https://dev.gotroo.in/utils/populate_countries", {
        headers: {
          Accept: "application/json",
          Authorization: token,
        },
      })
      .then((response) => {
        setCountryOptions(response.data);
        console.log("the countries are", response.data);
      })
      .catch((error) => {
        console.error("Error fetching country data:", error);
      });
  }, []);

  // fetch states data
  useEffect(() => {
    if (countryId) {
      axios
        .get(
          `https://dev.gotroo.in/utils/populate_states?country_id=${countryId}`,
          {
            headers: {
              Accept: "application/json",
              Authorization: token,
            },
          }
        )
        .then((response) => {
          setStateOptions(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error fetching state data:", error);
        });
    }
  }, [countryId]);

  // Fetch district data based on state and user input
  const fetchDistrictData = (stateId, input) => {
    axios
      .get(
        `https://dev.gotroo.in/search/district.json?q=${input}&state_id=${stateId}`,
        {
          headers: {
            Accept: "application/json",
            Authorization: token,
          },
        }
      )
      .then((response) => {
        setDistrictOptions(response.data);
      })
      .catch((error) => {
        console.error("Error fetching district data:", error);
      });
  };

  // fetch pin code
  const fetchPinCodeData = (input) => {
    axios
      .get(`https://dev.gotroo.in/search/pincode.json?q=${input}`, {
        headers: {
          Accept: "application/json",
          Authorization: token,
        },
      })
      .then((response) => {
        setPinCodeOptions(response.data);
      })
      .catch((error) => {
        console.error("Error fetching pin code data:", error);
      });
  };

  // Handle country change
  const handleCountryChange = (event, value) => {
    setSelectedCountry(value);
    if (value) {
      setCountryId(value.id);
      // Reset the selected state and clear its value
      setSelectedState(null);
      setStateId("");
      setSelectedDistrict(null);
      setDistrictId("");
      setSelectedPinCode(null);
      setPinCodeId("");
    }
  };

  // Handle state change
  const handleStateChange = (event, value) => {
    setSelectedState(value);
    if (value) {
      setStateId(value.id);
      setSelectedDistrict(null);
      setDistrictId("");
      setSelectedPinCode(null);
      setPinCodeId("");
    }
  };
  // Handle district change
  const handleDistrictChange = (event, value) => {
    setSelectedDistrict(value);
    if (value) {
      // Reset the selected pin code and clear its value
      setSelectedPinCode(null);
      setPinCodeId("");
    }
  };

  //handle pin code change
  const handlePinCodeChange = (event, value) => {
    setSelectedPinCode(value);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const onSubmit = async (data) => {
    const payload = {
      verification_request: {
        comments: data.comments,
        candidate_details: {
          aadhar_number: data.aadharnumber,
          primary_phone: data.mobilenumber,
          first_name: data.firstname,
          last_name: data.lastname,
          email: data.email,
          father_first_name: data.fatherfirstname,
          father_last_name: data.fatherlastname,
          current_address_attributes: {
            address_line1: data.addressline1,
            address_line2: data.addressline2,
            landmark: data.landmark,
            admin_country_id: data.country.id,
            admin_state_id: data.state.id,
            admin_district_id: data.district.id,
            admin_pincode_id: data.pincode.id,
            city: "",
          },
        },
      },
    };

    console.log("the form entry are", payload);

    try {
      setLoading(true); // Show loading spinner
      // Perform the API request using Axios
      const response = await axios.post(
        "https://dev.gotroo.in/verification_requests.json",
        payload,
        {
          headers: {
            Accept: "application/json",
            Authorization: token,
          },
        }
      );

      if (response.data.success) {
        console.log("Request updated successfully:", response.data);
        setSnackbarMessage("Request updated successfully");
        setSnackbarOpen(true);
      }
    } catch (error) {
      console.error("Error updating request:", error);
      setSnackbarMessage("Error updating request");
      setSnackbarOpen(true);
    } finally {
      setLoading(false);
    }
  };

  return (
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
              New Verification
            </Typography>
          </Box>

          <Box style={{ padding: "20px 30px" }}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={3}>
                {/* start */}
                <Grid item xs={12} sm={6}>
                  <TextField
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
                    helperText={errors.firstname && errors.firstname.message}
                  />
                </Grid>

                <Grid xs={12} sm={6} item>
                  <TextField
                    size="large"
                    placeholder="Enter Last name"
                    label="Last Name"
                    variant="standard"
                    fullWidth
                    required
                    {...register("lastname", {
                      required: true,
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
                    size="large"
                    placeholder="Enter Father First name"
                    label="Father First Name"
                    variant="standard"
                    fullWidth
                    required
                    {...register("fatherfirstname", {
                      required: true,
                      pattern: {
                        value: /^[a-zA-Z ]*$/,
                        message: "Invalid Text Entry",
                      },
                    })}
                    error={!!errors.fatherfirstname}
                    helperText={
                      errors.fatherfirstname && errors.fatherfirstname.message
                    }
                  />
                </Grid>

                <Grid xs={12} sm={6} item>
                  <TextField
                    size="large"
                    placeholder="Enter Father Last name"
                    label="Father Last Name"
                    variant="standard"
                    fullWidth
                    required
                    {...register("fatherlastname", {
                      required: true,
                      pattern: {
                        value: /^[a-zA-Z ]*$/,
                        message: "Invalid Text Entry",
                      },
                    })}
                    error={!!errors.fatherlastname}
                    helperText={
                      errors.fatherlastname && errors.fatherlastname.message
                    }
                  />
                </Grid>

                <Grid item xs={12} sm={4}>
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

                <Grid item xs={12} sm={4}>
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

                <Grid item xs={12} sm={4}>
                  <TextField
                    fullWidth
                    size="large"
                    placeholder="Enter Aadhar Number"
                    variant="standard"
                    label="Aadhar Number"
                    {...register("aadharnumber", {
                      pattern: {
                        value: /^\d{12}$/,
                        message: "Invalid aadhar number",
                      },
                    })}
                    error={!!errors.aadharnumber}
                    helperText={
                      errors.aadharnumber && errors.aadharnumber.message
                    }
                  />
                </Grid>

                <Grid xs={12} sm={12} item>
                  <TextField
                    size="large"
                    placeholder="Enter Address"
                    label="Address Line 1"
                    variant="standard"
                    fullWidth
                    required
                    {...register("addressline1", {
                      required: true,
                      message: "Enter address",
                    })}
                    error={!!errors.addressline1}
                    helperText={
                      errors.addressline1 && errors.addressline1.message
                    }
                  />
                </Grid>

                <Grid xs={12} sm={12} item>
                  <TextField
                    size="large"
                    placeholder="Enter Address"
                    label="Address Line 2"
                    variant="standard"
                    fullWidth
                    {...register("addressline2", {
                      message: "Enter address",
                    })}
                    error={!!errors.addressline2}
                    helperText={
                      errors.addressline2 && errors.addressline2.message
                    }
                  />
                </Grid>

                <Grid xs={12} sm={12} item>
                  <TextField
                    size="large"
                    placeholder="Enter Landmark"
                    label="Landmark"
                    variant="standard"
                    fullWidth
                    required
                    {...register("landmark", {
                      required: true,
                      message: "Enter Landmark",
                    })}
                    error={!!errors.landmark}
                    helperText={errors.landmark && errors.landmark.message}
                  />
                </Grid>

                <Grid item xs={12} sm={3}>
                  <FormControl fullWidth>
                    <Controller
                      name="country"
                      control={control}
                      defaultValue={null}
                      rules={{ required: "Country is required" }}
                      render={({ field }) => (
                        <Autocomplete
                          {...field}
                          id="country"
                          options={countryOptions}
                          getOptionLabel={(option) => option.name}
                          onChange={(e, value) => {
                            field.onChange(value);
                            handleCountryChange(e, value);
                          }}
                          value={selectedCountry}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              label="Country"
                              variant="standard"
                              error={!!errors.country}
                              helperText={
                                errors.country && errors.country.message
                              }
                            />
                          )}
                        />
                      )}
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={12} sm={3}>
                  <FormControl fullWidth>
                    <Controller
                      name="state"
                      control={control}
                      defaultValue={null}
                      rules={{ required: "State is required" }}
                      render={({ field }) => (
                        <Autocomplete
                          {...field}
                          id="state"
                          options={stateOptions}
                          getOptionLabel={(option) => option.name}
                          onChange={(e, value) => {
                            field.onChange(value);
                            handleStateChange(e, value);
                          }}
                          value={selectedState}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              label="State"
                              variant="standard"
                              error={!!errors.state}
                              helperText={errors.state && errors.state.message}
                            />
                          )}
                        />
                      )}
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={12} sm={3}>
                  <FormControl fullWidth>
                    <Controller
                      name="district"
                      control={control}
                      defaultValue={null}
                      rules={{ required: "District is required" }}
                      render={({ field }) => (
                        <Autocomplete
                          {...field}
                          id="district"
                          options={districtOptions}
                          getOptionLabel={(option) => option.name}
                          onInputChange={(event, newInputValue) => {
                            fetchDistrictData(stateId, newInputValue);
                          }}
                          onChange={(e, value) => {
                            field.onChange(value);
                            handleDistrictChange(e, value);
                          }}
                          value={selectedDistrict}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              label="District"
                              variant="standard"
                              error={!!errors.district}
                              helperText={
                                errors.district && errors.district.message
                              }
                            />
                          )}
                        />
                      )}
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={12} sm={3}>
                  <FormControl fullWidth>
                    <Controller
                      name="pincode"
                      control={control}
                      defaultValue={null}
                      rules={{ required: "Pin Code is required" }}
                      render={({ field }) => (
                        <Autocomplete
                          {...field}
                          id="pincode"
                          options={pinCodeOptions}
                          getOptionLabel={(option) => option.pincode}
                          onInputChange={(event, newInputValue) => {
                            fetchPinCodeData(newInputValue);
                          }}
                          onChange={(e, value) => {
                            field.onChange(value);
                            handlePinCodeChange(e, value);
                          }}
                          value={selectedPinCode}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              label="Pin Code"
                              variant="standard"
                              error={!!errors.pincode}
                              helperText={
                                errors.pincode && errors.pincode.message
                              }
                            />
                          )}
                        />
                      )}
                    />
                  </FormControl>
                </Grid>

                <Grid xs={12} sm={12} item>
                  <TextField
                    size="large"
                    placeholder="Enter comments"
                    label="Comments"
                    variant="standard"
                    fullWidth
                    {...register("comments", {
                      message: "Enter comments",
                    })}
                    error={!!errors.comments}
                    helperText={errors.comments && errors.comments.message}
                  />
                </Grid>

                {/* <Grid item xs={12} sm={3}>
                  <CircularProgress
                    style={{ visibility: loading ? "visible" : "hidden" }}
                    color="primary"
                  />
                </Grid> */}

              

                <Grid item xs={12} sm={3} style={{ margin: "15px auto" }}>
                <Box style={{ display: 'flex', alignItems: 'center' }}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Submit
                  </Button>
                  {loading && (
        <CircularProgress
          style={{ marginLeft: '10px' }}
          color="primary"
        />
      )}
                  </Box>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Card>
      </Box>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message={snackbarMessage}
      />
    </Box>
  );
};

export default RequestNewVerification;
