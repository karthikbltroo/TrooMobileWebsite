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
  styled,
} from "@mui/material";

import { React } from "react";
import { useState } from "react";

const Profileform = () => {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const InputNew = styled(TextField)`
    && {
      .MuiInputBase-root {
        font-size: 20px;
      }
      // .MuiInputLabel-root {
      //   transform: translateY(40px);
      // }
      .Mui-focused {
        //  transform: translateY(40px);
        // transform: translateX(30px);
        font-size: 30px;
        font-weight: bold;
      }

      // 	.MuiInputLabel-animated{

      // }
    }
  `;

  const InputDesign = styled(TextField)`

 inputProps={{style: {fontSize: 23,fontWeight:'400' }}} 
  InputLabelProps={{style: {fontSize: 23, fontWeight:'400'}}} 
    }
`;

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "spaceBetween",
          marginTop: "30px",
          fontWeight: "900px",
          flex:"1",
          // display: { xs: "flex", sm: "block" } 
        }}
      >
        <Card  style={{
          maxWidth: "95vw",
          padding: "20px 20px",
          margin: " 20px auto",
          boxShadow: "0px 0px 13px rgba(0, 0, 0, .25)",
          // boxShadow: '-12px 4px 11px 2px rgba(218,31,44,0.89)',
          // borderRadius: "14px",
          overflow: "hidden",
          backgroundColor: "#fff",
          width:'80%'
        }} >
        <Tabs
        
          // indicatorColor="#ff0000"
          // color="secondary"
          sx={{
            "& button": { borderRadius: 2 },
            "& button:hover": { backgroundColor: "#727272", color:'#fff' },
            // "& button:focus": { backgroundColor: "#f47d20" },
            "& button:active": { backgroundColor: "#DA1F2c" ,
            margin: "auto", textTransform: "lowerCase"}
          }}
          // value={value}
          // onChange={(e, value) => setValue(value)}
        >
          <Tab label="Profile" />
          <Tab label="Identity Proofs" />
          <Tab label="Addresses" />
          <Tab label="Education" />
          <Tab label="Work History" />
          <Tab label="Reviews" />
          <Tab label="Bank Details" />
        </Tabs>
        </Card>
      </Box>
      
   

      <Card
        style={{
          maxWidth: "85vw",
          padding: "20px 20px",
          margin: " 0 auto",
          boxShadow: "0px 0px 13px rgba(0, 0, 0, .25)",
          // boxShadow: '-12px 4px 11px 2px rgba(218,31,44,0.89)',
          // borderRadius: "14px",
          overflow: "hidden",
          backgroundColor: "#fff",
          width:'80%'
        }}
      >
        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "spaceBetween",
              fontWeight: "900px",
            }}
          >
            <Typography variant="h4" color="secondary" style={{margin:'0 auto', color:'#fff', backgroundColor:'#727272' }}>
              Profile
            </Typography>
          </Box>
          {/* <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                gutterBottom
              >
                Please fill in all necessary details
              </Typography> */}
          {/* <Divider sx={{ borderBottomWidth: 4 }} /> */}

          <Box>
            <form style={{ marginTop: "30px" }}>
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
                  <InputDesign
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
        </CardContent>
      </Card>
    </>
  );
};

export default Profileform;
