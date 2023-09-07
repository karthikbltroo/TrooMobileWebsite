import React from "react";
import {
  Card,
  CardContent,
  TextField,
  Typography,
  Grid,
  Button,
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Container,
  Tabs,
  Tab,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
  Autocomplete,
  Chip,
 


} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  AccountBox,
  Article,
  Group,
  Home,
  ModeNight,
  Person,
  Settings,
  Storefront,
} from "@mui/icons-material";
import { Accordion, AccordionSummary, AccordionDetails, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useForm } from "react-hook-form";

import { useState , useEffect} from "react";

const Profile = () => {
  const [value, setValue] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log({ ...data, dob: dayjs(data.dob).format("/DD/YYYY") });
  };



  

  const [expanded, setExpanded] = React.useState(false);

  const handleAccordionChange = () => {
    setExpanded(!expanded);
  };


  const StyledTab = styled(Tab)({
    "&.Mui-selected": {
      color: "red",
    },
  });
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);

  const handleCountryChange = (event, value) => {
    setSelectedCountry(value);
    setSelectedState(null);
  };

  const handleStateChange = (event, value) => {
    setSelectedState(value);
  };

  const countries = [
    { name: "India", states: ["Delhi", "Mumbai", "Kolkata"], district: [""] },
    { name: "USA", states: ["California", "New York", "Texas"] },
    { name: "UK", states: ["London", "Manchester", "Birmingham"] },
  
  ];

  const data = [
    { actionAt: '2023-07-05 11:26:41 +0530', actionBy: 'John Doe', action: 'edited', comments:'ok' },
    { actionAt: '2023-07-05 11:26:39 +0530', actionBy: 'Jane Smith', action: 'pending',  comments:'checked' },
    { actionAt: '2023-07-05 11:26:39 +0530', actionBy: 'Bob Johnson', action: 'verified', comments:'ok'  },
  ];

// Image code
const ImageBox = styled(Box)({
  width: 200,
  height: 200,
  border: "3px solid #ccc",
  overflow: "hidden",
  // borderStyle:'dotted'
  // display: "flex",
  // justifyContent: "center",
  // alignItems: "center",
});
const UploadImageBox = styled(Box)({
  width: 500,
  height: 200,
  border: "3px solid #ccc",
  overflow: "hidden",
  // borderStyle:'dotted'
  // display: "flex",
  // justifyContent: "center",
  // alignItems: "center",
});

const ImagePreview = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

const [existingImage, setExistingImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isFileSelected, setIsFileSelected] = useState(false);

  useEffect(() => {
    fetchImage(); // Fetch the image
  }, []);

  const fetchImage = async () => {
    try {
      const response = await fetch(
        "https://source.unsplash.com/random" // Sample image API (returns a random image)
      );
      setExistingImage(response.url); // Set the image URL
    } catch (error) {
      console.log(error);
    }
  };

  // functions
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleFileDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setSelectedFile(file);
    setIsFileSelected(true);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setIsFileSelected(true);
  };

  const handleImageDelete = () => {
    setSelectedFile(null);
    setIsFileSelected(false);
  };
  // functions
// Image code

  return (
    <Box
      sx={{
        margin: " 30px auto",
        maxWidth: "95vw",
        // display: { xs: "flex", sm: "block" }
      }}
    >
      <Box sx={{ margin: " 30px auto", width: "95%" }}>
        <Card style={{ borderRadius:"14px"}}>
          <Box
            style={{
              backgroundColor: "#727272",
              color: "#fff",
              height: "50px",
              padding: "10px 30px",
              
             
            }}
          >
            <Typography style={{ fontSize: "24px", fontWeight: "600" }}>
              Profile Entry
            </Typography>
          </Box>

          <Box style={{ padding: "20px  30px" }}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={3}>
       {/* image code */}
       <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "10%",
        width: "93%",
        margin: "30px auto",
      }}
    >
      <Grid container rowSpacing={3} columnSpacing={0.1}>
        <Grid item xs={12} sm={3}>
          <ImageBox>
            <Typography variant="h6" align="center">
              Existing Image
            </Typography>
            {existingImage ? (
              <ImagePreview src={existingImage} />
            ) : (
              <Typography variant="h6" align="center">
                No Image Found
              </Typography>
            )}
          </ImageBox>
        </Grid>

        <Grid item xs={12} sm={6}>
          <UploadImageBox onDragOver={handleDragOver} onDrop={handleFileDrop}>
            <Typography variant="h6" align="center">
              Upload Image
            </Typography>
            <Button
              variant="contained"
              color="primary"
              component="label"
              style={{
                alignItems: "center",
                justifyContent: "center",
                margin: "30px 0 30px 180px",
              }}
            >
              Choose File
              <input
                type="file"
                accept=".png, .jpeg, .jpg"
                hidden
                onChange={handleFileUpload}
              />
            </Button>
            <Box>
              <Typography variant="body1" align="center">
                Drag and drop an image file here
              </Typography>
            </Box>
          </UploadImageBox>
        </Grid>

        {/* third */}

        <Grid item xs={12} sm={3}>
          {isFileSelected ? (
            <ImageBox>
              <Box>
                <Typography variant="h6" align="center">
                  Selected File
                </Typography>
                <ImagePreview
                  src={selectedFile && URL.createObjectURL(selectedFile)}
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleImageDelete}
                  style={{ marginTop: "16px" }}
                >
                  Remove File
                </Button>
              </Box>
            </ImageBox>
          ) : (
            <ImageBox>
              <Box style={{ alignItems: "center", justifyContent: "center" }}>
                <Typography variant="subtitle" align="center">
                  No image selected
                </Typography>
              </Box>
            </ImageBox>
          )}
        </Grid>
        {/* third */}
      </Grid>
    </Box>
       {/* image code Ends */}

                <Grid xs={12} sm={6} item>
                  <TextField
                    inputProps={{ style: { fontSize: 23, fontWeight: "500" } }} // font size of input text
                    InputLabelProps={{
                      style: { fontSize: 23, fontWeight: "500" },
                    }} // font size of input label
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
                    inputProps={{ style: { fontSize: 23 } }} // font size of input text
                    InputLabelProps={{
                      style: { fontSize: 23, fontWeight: "500" },
                    }} // font size of input label
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

                <Grid xs={12} sm={6} item>
                  <TextField
                    // inputProps={{ style: { fontSize: 23, fontWeight: "500" } }} // font size of input text
                    // InputLabelProps={{
                    //   style: { fontSize: 23, fontWeight: "500" },
                    // }} // font size of input label
                    size="large"
                    placeholder="Enter Father First Name"
                    label="Father First Name"
                    variant="standard"
                    fullWidth
                    // required
                    {...register("fatherfirstname", {
                      // required: true,
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
                    // inputProps={{ style: { fontSize: 23, fontWeight: "500" } }} // font size of input text
                    // InputLabelProps={{
                    //   style: { fontSize: 23, fontWeight: "500" },
                    // }} // font size of input label
                    size="large"
                    placeholder="Enter Father Last Name"
                    label="Father Last Name"
                    variant="standard"
                    fullWidth
                    // required
                    {...register("fatherlastname", {
                      
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
                    fullWidth
                    placeholder="Enter Alternate Phone Number"
                    variant="standard"
                    label="Alternate Phone Number"
                    {...register("alternatephonenumber", {
                      // required: true,
                      pattern: {
                        value: /^\d{10}$/,
                        message: "Invalid phone number",
                      },
                    })}
                    error={!!errors.alternatephonenumber}
                    helperText={
                      errors.alternatephonenumber &&
                      errors.alternatephonenumber.message
                    }
                  />
                </Grid>

                <Grid item xs={12} sm={4}>
                  <TextField
                    fullWidth
                    placeholder="Enter Landline Number"
                    variant="standard"
                    label=" Landline Number"
                    {...register("landlinenumber", {
                      // required: true,
                      pattern: {
                        value: /^\d{10}$/,
                        message: "Invalid phone number",
                      },
                    })}
                    error={!!errors.landlinenumber}
                    helperText={
                      errors.landlinenumber && errors.landlinenumber.message
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

                <Grid xs={12} sm={4} item>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label="Date of birth"
                      format="DD/MM/YYYY"
                      value={value}
                      slotProps={{ textField: { variant: "standard" } }}
                      onChange={(newValue) => setValue(newValue)
                        
                      }
                      
                      renderInput={(props) => <TextField {...props} />}
                      {...register('dob')}
                    
                      maxDate={dayjs(formattedDate)}
                    />
                  </LocalizationProvider>
                </Grid>

                <Grid item xs={12} sm={4}>
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
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                    <MenuItem value="neutral">Gender Neutral</MenuItem>
                  </TextField>
                </Grid>

                <Grid item xs={12} sm={4}>
                  <Autocomplete
                    options={countries}
                    getOptionLabel={(country) => country.name}
                    onChange={handleCountryChange}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Place of Birth - Country"
                        variant="standard"
                      />
                    )}
                  />
                </Grid>

                <Grid item xs={12} sm={4}>
                  <Autocomplete
                    options={selectedCountry ? selectedCountry.states : []}
                    getOptionLabel={(state) => state}
                    onChange={handleStateChange}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Place of Birth - State"
                        variant="standard"
                      />
                    )}
                  />
                </Grid>

                <Grid item xs={12} sm={4}>
                  <Autocomplete
                    variant="standard"
                    options={
                      selectedState
                        ? ["District 1", "District 2", "District 3"]
                        : []
                    }
                    getOptionLabel={(district) => district}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Place of Birth - District"
                        variant="standard"
                      />
                    )}
                  />
                </Grid>
                <Grid xs={12} sm={4} item>
                  <TextField
                    // inputProps={{ style: { fontSize: 23,  } }} // font size of input text
                    // InputLabelProps={{
                    //   style: { fontSize: 23, fontWeight: "500" },
                    // }} // font size of input label
                    size="large"
                    placeholder="Enter City/Taluk/Village"
                    label="City/Taluk/Village"
                    variant="standard"
                    fullWidth
                    // required
                    {...register("citytaluk", {
                     
                      pattern: {
                        value: /^[a-zA-Z ]*$/,
                        message: "Invalid Text Entry",
                      },
                    })}
                    error={!!errors.citytaluk}
                    helperText={errors.citytaluk && errors.citytaluk.message}
                  />
                </Grid>

                <Grid item xs={12} sm={4}>
                  <Autocomplete
                    options={["Admin", "Manager", "Executive"]}
                    getOptionLabel={(state) => state}
                    onChange={handleStateChange}
                    required
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Select Roles"
                        variant="standard"
                      />
                    )}
                  />
                </Grid>

                <Grid xs={12} sm={4} item>
                  <TextField
                    // inputProps={{ style: { fontSize: 23,  } }} // font size of input text
                    // InputLabelProps={{
                    //   style: { fontSize: 23, fontWeight: "500" },
                    // }} // font size of input label
                    size="large"
                    placeholder="Additional information"
                    label="Additional information"
                    variant="standard"
                    fullWidth
                    // required
                    {...register("additionalinfo", {
                      // required: true,
                      pattern: {
                        value: /^[a-zA-Z ]*$/,
                        message: "Invalid Text Entry",
                      },
                    })}
                    error={!!errors.additionalinfo}
                    helperText={
                      errors.additionalinfo && errors.additionalinfo.message
                    }
                  />
                </Grid>

                <Grid xs={12} sm={12} item>
                  <TextField
                    // inputProps={{ style: { fontSize: 23,  } }} // font size of input text
                    // InputLabelProps={{
                    //   style: { fontSize: 23, fontWeight: "500" },
                    // }} // font size of input label
                    size="large"
                    placeholder="internal comment"
                    label="internal comment"
                    variant="standard"
                    fullWidth
                    // required
                    {...register("internalcomment", {
                      // required: true,
                      pattern: {
                        value: /^[a-zA-Z ]*$/,
                        message: "Invalid Text Entry",
                      },
                    })}
                    error={!!errors.internalcomment}
                    helperText={
                      errors.internalcomment && errors.internalcomment.message
                    }
                  />
                </Grid>

                <Grid item xs={12} sm={4}>
                  <TextField
                    fullWidth
                    select
                    variant="standard"
                    label="Verification status"
                    defaultValue=""
                    {...register("verficationstatus")}
                    helperText={
                      errors.verficationstatus && errors.verficationstatus.message
                    }
                  >
                    <MenuItem value="pending">Pending</MenuItem>
                    <MenuItem value="edited">Edited</MenuItem>
                    <MenuItem value="needinformation">Need Information</MenuItem>
                    <MenuItem value="rejected">Rejected</MenuItem>
                    <MenuItem value="approved">Approved</MenuItem>
                  </TextField>
                </Grid>



                <Grid xs={12} sm={12} item>
                  <TextField
                    // inputProps={{ style: { fontSize: 23, fontWeight: "500" } }} // font size of input text
                    // InputLabelProps={{
                    //   style: { fontSize: 23, fontWeight: "500" },
                    // }} // font size of input label
                    variant='standard'
                    size="large"
                    placeholder="Enter Comments"
                    label="Comments"
                   multiline
                    fullWidth
                    // required
                    {...register("Comments", {
                      // required: true,
                      pattern: {
                        value: /^[a-zA-Z ]*$/,
                        message: "Invalid Text Entry",
                      },
                    })}
                    error={!!errors.Comments}
                    helperText={errors.Comments && errors.Comments.message}
                  />
                </Grid>

{/* Accordian component */}
<Grid   xs={12} sm={12} item  >
<Accordion expanded={expanded} onChange={handleAccordionChange}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>Verification History</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <TableContainer component={Paper} sx={{ display: expanded ? 'block' : 'none' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell> <Typography>Action At </Typography></TableCell>
                <TableCell> <Typography>Action By </Typography></TableCell>
                <TableCell> <Typography>Action </Typography></TableCell>
                <TableCell> <Typography>Comments</Typography> </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.id}>
                  <TableCell> <Typography> {row.actionAt}</Typography>  </TableCell>
                  <TableCell> <Typography>   {row.actionBy} </Typography></TableCell>
                  <TableCell> <Typography>{row.action}</Typography></TableCell>
                  <TableCell>  <Typography>{row.comments}</Typography> </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </AccordionDetails>
    </Accordion>
</Grid>

{/* Accordian component */}

                <Box style={{ margin: "100px auto" }}>
                  <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary">
                      Submit
                    </Button>
                  </Grid>
                </Box>
              </Grid>
            </form>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default Profile;
