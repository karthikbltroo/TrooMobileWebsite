import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  NavLink,
} from "react-router-dom";
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
  styled,
} from "@mui/material";

import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import BrandingWatermarkOutlinedIcon from "@mui/icons-material/BrandingWatermarkOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";
import ReviewsOutlinedIcon from "@mui/icons-material/ReviewsOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";

const StyledButton = styled(Button)(({ theme }) => ({
  "&.active": {
    borderBottom: `4px solid red`,
    fontWeight: "bold",
    "& svg": {
      color: "#DA1F2c",
    },
  },
  "&:hover": {
    // backgroundColor: 'black',
    // color: 'white',
  },
}));

const Navbar = styled("nav")(({ theme }) => ({
  borderBottom: "1px solid #ccc",
}));

const NavItem = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginBottom: theme.spacing(1),
}));

const IconContainer = styled("div")(({ theme }) => ({
  marginRight: theme.spacing(2),
}));

const CandidateDetailsHome = () => {
  return (
    <div>
      <Box sx={{ margin: " 30px auto", width: "92%" }}>
        <Card style={{ borderRadius: "14px" }}>
          <Box>
            <Navbar>
              <NavItem>
                <StyledButton
                  component={NavLink}
                  to="profile"
                  activeClassName="active"
                  color="inherit"
                >
                  <IconContainer>
                    <PersonOutlineOutlinedIcon />
                  </IconContainer>
                  <Typography style={{ fontSize: "12px" }}>Profile </Typography>
                </StyledButton>

                <StyledButton
                  component={NavLink}
                  to="identityproofs"
                  activeClassName="active"
                  color="inherit"
                >
                  <IconContainer>
                    <BrandingWatermarkOutlinedIcon />
                  </IconContainer>
                  <Typography style={{ fontSize: "12px" }}>
                    Identity Proofs
                  </Typography>
                </StyledButton>

                <StyledButton
                  component={NavLink}
                  to="addresses"
                  activeClassName="active"
                  color="inherit"
                >
                  <IconContainer>
                    <LocationOnOutlinedIcon />
                  </IconContainer>
                  <Typography style={{ fontSize: "12px" }}>
                    Addresses
                  </Typography>
                </StyledButton>

                <StyledButton
                  component={NavLink}
                  to="education"
                  activeClassName="active"
                  color="inherit"
                >
                  <IconContainer>
                    <SchoolOutlinedIcon />
                  </IconContainer>
                  <Typography style={{ fontSize: "12px" }}>
                    Education
                  </Typography>
                </StyledButton>

                <StyledButton
                  component={NavLink}
                  to="workhistory"
                  activeClassName="active"
                  color="inherit"
                >
                  <IconContainer>
                    <WorkHistoryOutlinedIcon />
                  </IconContainer>
                  <Typography style={{ fontSize: "12px" }}>
                    Work History
                  </Typography>
                </StyledButton>

                <StyledButton
                  component={NavLink}
                  to="reviews"
                  activeClassName="active"
                  color="inherit"
                >
                  <IconContainer>
                    <ReviewsOutlinedIcon />
                  </IconContainer>
                  <Typography style={{ fontSize: "12px" }}>Reviews</Typography>
                </StyledButton>

                <StyledButton
                  component={NavLink}
                  to="bankdetails"
                  activeClassName="active"
                  color="inherit"
                >
                  <IconContainer>
                    <AccountBalanceOutlinedIcon />
                  </IconContainer>
                  <Typography style={{ fontSize: "12px" }}>
                    Bank Details
                  </Typography>
                </StyledButton>

                <Button type="submit" variant="contained" color="secondary">
                  Add New
                </Button>
              </NavItem>
            </Navbar>
          </Box>
        </Card>
      </Box>

      <Outlet />
    </div>
  );
};

export default CandidateDetailsHome;
