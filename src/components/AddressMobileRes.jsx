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
import { useForm } from "react-hook-form";
import dayjs from "dayjs";
import { useAuth } from "./utils/AuthContext";

const AddressMobileRes = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const { authData } = useAuth();
  const { token, user_id } = authData;

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

  // Fetch initial data,
  useEffect(() => {
    axios
      .get("https://dev.gotroo.in/myprofile/address.json", {
        headers: {
          Accept: "application/json",
          Authorization: token,
        },
      })
      .then((response) => {
        const { permanent_address } = response.data.data;
        setSelectedCountry(permanent_address.country);
        setCountryId(permanent_address.country.id); 
        setSelectedState(permanent_address.state);
        setStateId(permanent_address.state.id);
        setSelectedDistrict(permanent_address.district);
        setDistrictId(permanent_address.district.id);
        setSelectedPinCode(permanent_address.pincode);
        setPinCodeId(permanent_address.pincode.id);

        // Set initial values for address fields
        setAddressLine1(permanent_address.address_line1);
        setAddressLine2(permanent_address.address_line2);
        setLandmark(permanent_address.landmark);
      })
      .catch((error) => {
        console.error("Error fetching initial country data:", error);
      });
  }, [token]);

  // fetch country data
  useEffect(() => {
    axios
      .get("https://dev.gotroo.in/utils/populate_countries", {
        headers: {
          Accept: "application/json",
          Authorization:
            "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiZjVhMjIwMDMtZGNkYi00MTVkLWFjYzQtZjliODYwMDcyZjQ0IiwiZXhwaXJlc19hdCI6IjIwMjMtMDktMjAgMTM6MTg6MTEgKzAwMDAifQ.rQwlbz-13JTvJb2WWJuXo2QJd2lia0uBWbwjUmqFY4I",
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
              Authorization:
                "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiZjVhMjIwMDMtZGNkYi00MTVkLWFjYzQtZjliODYwMDcyZjQ0IiwiZXhwaXJlc19hdCI6IjIwMjMtMDktMjAgMTM6MTg6MTEgKzAwMDAifQ.rQwlbz-13JTvJb2WWJuXo2QJd2lia0uBWbwjUmqFY4I",
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

  // fetch district data
  // Fetch district data based on state and user input
  const fetchDistrictData = (stateId, input) => {
    axios
      .get(
        `https://dev.gotroo.in/search/district.json?q=${input}&state_id=${stateId}&term=${input}`,
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

  // Handle district change
  const handleDistrictChange = (event, value) => {
    setSelectedDistrict(value);
  };

  // Handle country change
  const handleCountryChange = (event, value) => {
    setSelectedCountry(value);
    if (value) {
      setCountryId(value.id);
    }
  };

  // Handle state change
  const handleStateChange = (event, value) => {
    setSelectedState(value);
    if (value) {
      setStateId(value.id);
    }
  };

  //handle pin code change
  const handlePinCodeChange = (event, value) => {
    setSelectedPinCode(value);
  };

  const onSubmit = (data) => {
    if (!selectedCountry) {
      setSnackbarMessage("Select a country before saving.");
      setSnackbarOpen(true);
      return;
    }

    const payload = {
      user: {
        single_address: 0,
        permanent_address_attributes: {
          id: "b6564328-72ff-461a-b22f-98c49f9d095b",
          address_line1: addressLine1,
          address_line2: addressLine2,
          landmark: landmark,
          admin_country_id: countryId, 
          admin_state_id: stateId, 
          admin_district_id: selectedDistrict?.id, 
          admin_pincode_id: selectedPinCode?.id, 
          city: "",
        },
      },
    };

    axios
      .post("https://dev.gotroo.in/myprofile/update_address.json", payload, {
        headers: {
          Accept: "application/json",
          Authorization:
            "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiZjVhMjIwMDMtZGNkYi00MTVkLWFjYzQtZjliODYwMDcyZjQ0IiwiZXhwaXJlc19hdCI6IjIwMjMtMDktMjAgMTM6MTg6MTEgKzAwMDAifQ.rQwlbz-13JTvJb2WWJuXo2QJd2lia0uBWbwjUmqFY4I",
        },
      })
      .then((response) => {
        console.log("Address updated successfully:", response.data);
        setSnackbarMessage("Address updated successfully");
        setSnackbarOpen(true);
      })
      .catch((error) => {
        console.error("Error updating address:", error);
        setSnackbarMessage("Error updating address");
        setSnackbarOpen(true);
      });
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
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
              Add Address
            </Typography>
          </Box>

          <Box style={{ padding: "20px 30px" }}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={3}>

              <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <TextField
                      {...register("addressLine1")}
                      label="Address Line 1"
                      variant="standard"
                      value={addressLine1}
                      onChange={(e) => setAddressLine1(e.target.value)}
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <TextField
                      {...register("addressLine2")}
                      label="Address Line 2"
                      variant="standard"
                      value={addressLine2}
                      onChange={(e) => setAddressLine2(e.target.value)}
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <TextField
                      {...register("landmark")}
                      label="Landmark"
                      variant="standard"
                      value={landmark}
                      onChange={(e) => setLandmark(e.target.value)}
                    />
                  </FormControl>
                </Grid>







                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <Autocomplete
                      {...register("country")}
                      id="country"
                      options={countryOptions}
                      getOptionLabel={(option) => option.name}
                      onChange={handleCountryChange}
                      value={selectedCountry}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Country"
                          variant="standard"
                          error={!!errors.country}
                          helperText={errors.country && "Country is required"}
                        />
                      )}
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={12} sm={4}>
                  <FormControl fullWidth>
                    <Autocomplete
                      {...register("state")}
                      id="state"
                      options={stateOptions}
                      getOptionLabel={(option) => option.name}
                      onChange={handleStateChange}
                      value={selectedState}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="State"
                          variant="standard"
                          error={!!errors.state}
                          helperText={errors.state && "State is required"}
                        />
                      )}
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={12} sm={4}>
                  <FormControl fullWidth>
                    <Autocomplete
                      {...register("district")}
                      id="district"
                      options={districtOptions}
                      getOptionLabel={(option) => option.name}
                      onInputChange={(event, newInputValue) => {
                        fetchDistrictData(stateId, newInputValue);
                      }}
                      onChange={handleDistrictChange}
                      value={selectedDistrict}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="District"
                          variant="standard"
                          error={!!errors.district}
                          helperText={errors.district && "District is required"}
                        />
                      )}
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={12} sm={4}>
                  <FormControl fullWidth>
                    <Autocomplete
                      {...register("pincode")}
                      id="pincode"
                      options={pinCodeOptions}
                      getOptionLabel={(option) => option.pincode}
                      onInputChange={(event, newInputValue) => {
                        fetchPinCodeData(newInputValue);
                      }}
                      onChange={handlePinCodeChange}
                      value={selectedPinCode}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Pin Code"
                          variant="standard"
                          error={!!errors.pincode}
                          helperText={errors.pincode && "Pin Code is required"}
                        />
                      )}
                    />
                  </FormControl>
                </Grid>

<Grid item xs={12} sm={3} style={{margin:'15px auto'}}>
<Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              
              >
                Submit
              </Button>

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

export default AddressMobileRes;
