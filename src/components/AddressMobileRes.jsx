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
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useForm } from "react-hook-form";

import { useState, useEffect } from "react";
import { useAuth } from "./utils/AuthContext";
import axios from "axios";


const AddressMobileRes = () => {
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

  //

  const { authData } = useAuth(); // Use the useAuth hook to access context
  const { token, user_id } = authData; // Destructure the token and user_id

  // Now you can access token and user_id and console.log them
  console.log("Token from Address comp:", token);
  console.log("user_id:", user_id);

  //

  // const onSubmit = (data) => {
  //   console.log({ ...data, dob: dayjs(data.dob).format("/DD/YYYY") });
  // };

  const onSubmit = async (data) => {
    try {
      // Construct the request body
      const requestBody = {
        user: {
          single_address: 0,
          current_address_attributes: {
            id: "{{current_address_id}}",
            address_line1: "dfdfdfddfdfdf",
            address_line2: "sdsdddsdd",
            landmark: "adasd1",
            admin_country_id: "1e0f1fa4-3b41-48fe-942f-a4142e92eb67",
            admin_state_id: "5c65f6f5-f3ce-414d-b809-55979e13fd88",
            admin_district_id: "d91b10ee-eba3-4989-bf29-eb3781bf0a70" ,
            admin_pincode_id:"b35f2398-da45-4ef6-bc4b-19d2a1275208" ,
            city: "",
          },
        },
      };
  
      // Make the POST request
      const response = await axios.post(
        "https://dev.gotroo.in/myprofile/update_address.json",
        requestBody,
        
      );
  
      // Handle the response as needed
      console.log("Response:", response.data);
    } catch (error) {
      // Handle errors here
      console.error("Error:", error);
    }
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
    {
      actionAt: "2023-07-05 11:26:41 +0530",
      actionBy: "John Doe",
      action: "edited",
      comments: "ok",
    },
    {
      actionAt: "2023-07-05 11:26:39 +0530",
      actionBy: "Jane Smith",
      action: "pending",
      comments: "checked",
    },
    {
      actionAt: "2023-07-05 11:26:39 +0530",
      actionBy: "Bob Johnson",
      action: "verified",
      comments: "ok",
    },
  ];

  return (
    <Box
      sx={{
        margin: " 30px auto",
        maxWidth: "95vw",
        // display: { xs: "flex", sm: "block" }
      }}
    >
      <Box sx={{ margin: " 30px auto", width: "95%" }}>
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

          <Box style={{ padding: "20px  30px" }}>
      

<Grid
                  item
                  xs={12}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Button type="submit" variant="contained" color="primary" onClick={handleSubmit(onSubmit)}>
                    Submit
                  </Button>
                </Grid>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default AddressMobileRes;
