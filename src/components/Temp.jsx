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
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom';

import { useState } from "react";

const Temp = () => {

  const StyledTab = styled(Tab)({
    "&.Mui-selected": {
      color: "red"
    }
  });
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Box
      sx={{
        margin: " 30px auto",
        maxWidth: "95vw",
        // display: { xs: "flex", sm: "block" }
      }}
    >


      <Box sx={{ margin: " 30px auto", width:'95%', }}>
        <Card>
              <Box ><Typography style={{fontSize:'16px', fontWeight:'500'}} >
              <List sx={{ display:'flex', justifyContent:'center', alignItems:'center', margin:'auto', fontSize:'60px', fontWeight:'500'}} >
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <Article />
              </ListItemIcon>
              <ListItemText primary="Identity Proofs" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <ListItemText primary="Addresses" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/workhistory">
              <ListItemIcon>
                <Storefront />
              </ListItemIcon>
              <ListItemText primary="Education" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText primary="Work history" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Reviews" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Bank Details" />
            </ListItemButton>
          </ListItem>

         
          <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="secondary"  >
                    Add New
                  </Button>
                </Grid>
           

        
        </List>





              </Typography>
        {/* <Tabs
                sx={{  justifyContent:'center', alignItems:'center', margin:'auto', fontSize:'60px', fontWeight:'500'}}
                // indicatorColor="#ff0000"
                color="#000"
                // value={value}
                // onChange={(e, value) => setValue(value)}
              >
                <Tab  label="candidates" />
                <Tab  label="manage master" />
                <Tab label="roles" />
                <Tab label="Requests" />
                <Tab label="Request Candidate" />
              </Tabs> */}
              </Box>
        </Card>
      </Box>

      <Box sx={{ margin: " 30px auto", width:'95%'}}>
        <Card >
          <Box style={{backgroundColor:'#727272', color:'#fff', height:'50px', padding:'10px 30px'}} ><Typography style={{fontSize:'24px', fontWeight:'600'}}  >Profile Entry</Typography></Box>
          
          <Box style={{padding: '20px  30px'}}>
            <form >
              <Grid container spacing={3}>
                {/* <Grid xs={12} sm={6} item>
                   <Box sx={{width:'200px', height:'200px', backgroundColor:'blue', marginTop:'30px' }}  > </Box>
                  </Grid>

                  <Grid xs={12} sm={6} item>
                   <Box sx={{width:'200px', height:'200px', backgroundColor:'red', marginTop:'30px' }}  > </Box>
                  </Grid> */}

                <Grid xs={12} sm={6} item>
                  <TextField
                   
                    size="large"
                    placeholder="Enter first name"
                    label="First Name"
                    variant="standard"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    // inputProps={{ style: { fontSize: 23, fontWeight: "500" } }} // font size of input text
                    // InputLabelProps={{
                    //   style: { fontSize: 23, fontWeight: "500" },
                    // }} // font size of input label
                    placeholder="Enter last name"
                    label="Last Name"
                    variant="standard"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                  style={{fontSize:'45px', fontWeight:'300px'}}
                    placeholder="Father first name"
                    label="Father first name"
                    variant="standard"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    placeholder="Father first name"
                    label="Father first name"
                    variant="standard"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    InputLabelProps={{ fontsize: "200px" }}
                    type="email"
                    placeholder="Enter email"
                    label="Email"
                    variant="standard"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth  >
                      <InputLabel  id="demo-simple-select-label"  >
                        Gender
                      </InputLabel>
                      <Select
                     
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        variant="standard"
                        onChange={handleChange}
                      >
                        <MenuItem value={10}>Male</MenuItem>
                        <MenuItem value={20}>Female</MenuItem>
                        <MenuItem value={30}>Gender neutral</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    type="email"
                    placeholder="Enter email"
                    label="Email"
                    variant="standard"
                    fullWidth
                    required
                  />
                </Grid>
                {/* start of places */}
                <Grid item xs={12} sm={4} style={{ marginTop: 20 }}>
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        place of birth
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        variant="standard"
                        onChange={handleChange}
                      >
                        <MenuItem value={10}>Pune</MenuItem>
                        <MenuItem value={20}>Bangalore</MenuItem>
                        <MenuItem value={30}>Mumbai</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4} style={{ marginTop: 20 }}>
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        place of state
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        variant="standard"
                        onChange={handleChange}
                      >
                        <MenuItem value={10}>Pune</MenuItem>
                        <MenuItem value={20}>Bangalore</MenuItem>
                        <MenuItem value={30}>Mumbai</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4} style={{ marginTop: 20 }}>
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        place of district
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        variant="standard"
                        onChange={handleChange}
                      >
                        <MenuItem value={10}>Pune</MenuItem>
                        <MenuItem value={20}>Bangalore</MenuItem>
                        <MenuItem value={30}>Mumbai</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Grid>

                {/* start of places */}
                <Grid item xs={12} sm={4}>
                  <TextField
                    type="number"
                    placeholder="mobile number"
                    label="mobile number"
                    variant="standard"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    type="number"
                    placeholder="Alternate phone number"
                    label="Alternate Phone"
                    variant="standard"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    type="number"
                    placeholder="Landline number"
                    label="Landline number"
                    variant="standard"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Internal comment"
                    multiline
                    rows={4}
                    placeholder="Internal comment"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="secondary">
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Card>
      </Box>





    </Box>
  );
};

export default Temp;
