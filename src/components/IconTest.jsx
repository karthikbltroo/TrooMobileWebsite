import React from 'react';
import { BrowserRouter as Router, Link, NavLink, Routes, Route } from 'react-router-dom';
import { Button, Typography, styled } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import PersonIcon from '@mui/icons-material/Person';
import HelpIcon from '@mui/icons-material/Help';
import BusinessIcon from '@mui/icons-material/Business';
import PhoneIcon from '@mui/icons-material/Phone';
import SchoolIcon from '@mui/icons-material/School';
import EmailIcon from '@mui/icons-material/Email';

const StyledButton = styled(Button)(({ theme }) => ({
  '&.active': {
    borderBottom: `4px solid red`,
    fontWeight: 'bold',
    '& svg': {
      color: 'red',
    },
  },
  '&:hover': {
    backgroundColor: 'black',
    color: 'white',
  },
}));

const Navbar = styled('nav')(({ theme }) => ({
  borderBottom: '1px solid #ccc',
}));

const NavItem = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(1),
}));

const IconContainer = styled('div')(({ theme }) => ({
  marginRight: theme.spacing(1),
}));

const App = () => {
  return (
    <Router>
      <Navbar>
        <NavItem>
          {/* <StyledButton
            component={NavLink}
            to="/"
            activeClassName="active"
            color="inherit"
          >
            <IconContainer>
              <HomeIcon />
            </IconContainer>
           <Typography>Home</Typography> 
          </StyledButton> */}
          <StyledButton
            component={NavLink}
            to="/about"
            activeClassName="active"
            color="inherit"
          >
            <IconContainer>
              <InfoIcon />
            </IconContainer>
           <Typography>Profile </Typography> 
          </StyledButton>
          <StyledButton
            component={NavLink}
            to="/profile"
            activeClassName="active"
            color="inherit"
          >
            <IconContainer>
              <PersonIcon />
            </IconContainer>
            <Typography>Profile</Typography> 
          </StyledButton>
          <StyledButton
            component={NavLink}
            to="/help"
            activeClassName="active"
            color="inherit"
          >
            <IconContainer>
              <HelpIcon />
            </IconContainer>
            <Typography>Help</Typography> 
          </StyledButton>
          <StyledButton
            component={NavLink}
            to="/business"
            activeClassName="active"
            color="inherit"
          >
            <IconContainer>
              <BusinessIcon />
            </IconContainer>
            <Typography>Business</Typography> 
          </StyledButton>
          <StyledButton
            component={NavLink}
            to="/phone"
            activeClassName="active"
            color="inherit"
          >
            <IconContainer>
              <PhoneIcon />
            </IconContainer>
            <Typography>Phone</Typography> 
          </StyledButton>
          <StyledButton
            component={NavLink}
            to="/school"
            activeClassName="active"
            color="inherit"
          >
            <IconContainer>
              <SchoolIcon />
            </IconContainer>
            <Typography>School</Typography> 
          </StyledButton>
          <StyledButton
            component={NavLink}
            to="/email"
            activeClassName="active"
            color="inherit"
          >
            <IconContainer>
              <EmailIcon />
            </IconContainer>
            <Typography>E-Mail</Typography> 
          </StyledButton>
        </NavItem>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/help" element={<Help />} />
        <Route path="/business" element={<Business />} />
        <Route path="/phone" element={<Phone />} />
        <Route path="/school" element={<School />} />
        <Route path="/email" element={<Email />} />
      </Routes>
    </Router>
  );
};

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h2>About Us Page</h2>
    </div>
  );
};

const Profile = () => {
  return (
    <div>
      <h2>Profile Page</h2>
    </div>
  );
};

const Help = () => {
  return (
    <div>
      <h2>Help Page</h2>
    </div>
  );
};

const Business = () => {
  return (
    <div>
      <h2>Business Page</h2>
    </div>
  );
};

const Phone = () => {
  return (
    <div>
      <h2>Phone Page</h2>
    </div>
  );
};

const School = () => {
  return (
    <div>
      <h2>School Page</h2>
    </div>
  );
};

const Email = () => {
  return (
    <div>
      <h2>Email Page</h2>
    </div>
  );
};

export default App;
