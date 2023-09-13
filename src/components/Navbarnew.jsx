import React, { useState } from "react";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  Avatar,
  Tooltip,
  IconButton,
  MenuItem,
  Box,
  Menu,
  SvgIcon,
  Stack,
  styled,
} from "@mui/material";
import BadgeIcon from "@mui/icons-material/Badge";
import DrawerComp from "./DrawerComp";
import SVGComponent from "./SVGComponent";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";

const Navbarnew = () => {
  const [value, setValue] = useState();
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  const settings = ["Profile", "Account", "Logout"];
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const StyledButton = styled(Button)(({ theme }) => ({
    textDecoration: "none",
    color: "inherit",
    padding: "6px 16px",
    borderRadius: "4px",
    transition: "background-color 0.3s, color 0.3s",
    "&.active": {
      // backgroundColor: "#f0f8ff", // Light blue color for active tab
      color: "#000", // Blue color for active text
      "& svg": {
        color: "red", // Blue color for active icon
      },
    },
    // "&:hover": {
    //   backgroundColor: "#f0f8ff", // Light blue color on hover
    // },
  }));

  return (
    <React.Fragment>
      {location.pathname !== "/" &&
        location.pathname !== "/LoginMobileResFromSignup" &&
        location.pathname !== "/LoginMobileResDirectSecond" &&
        location.pathname !== "/signup" && (
          <AppBar position="sticky">
            <Toolbar sx={{ background: "#fff" }}>
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="50.000000pt"
                height="50.000000pt"
                viewBox="0 0 1316.000000 470.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <g
                  transform="translate(0.000000,470.000000) scale(0.100000,-0.100000)"
                  fill="#000000"
                  stroke="none"
                >
                  <path
                    d="M7775 4465 c-158 -20 -223 -33 -333 -70 -289 -98 -528 -268 -695
-495 -26 -36 -52 -70 -57 -77 -22 -27 -95 -173 -127 -258 -36 -93 -60 -179
-84 -300 -17 -89 -17 -369 0 -455 37 -187 58 -254 129 -410 70 -153 234 -348
399 -473 273 -208 565 -307 906 -307 238 0 461 42 647 122 76 32 92 41 172 90
186 113 328 246 446 417 49 70 152 268 152 292 0 8 4 19 9 25 4 5 14 29 20 54
62 236 79 381 62 543 -12 110 -36 243 -51 282 -5 11 -16 45 -25 75 -42 137
-139 308 -252 441 -97 116 -215 219 -338 296 -22 14 -199 101 -230 113 -117
47 -232 74 -410 95 -140 17 -204 17 -340 0z m255 -671 c339 -36 598 -324 625
-695 10 -147 -15 -280 -82 -418 -38 -79 -59 -108 -131 -181 -94 -94 -160 -135
-282 -177 -65 -22 -93 -25 -205 -26 -138 -1 -192 10 -305 60 -126 57 -252 176
-323 305 -74 133 -109 335 -89 507 6 55 16 110 21 123 35 90 50 121 88 180
107 169 280 287 463 317 90 15 123 18 140 15 8 -1 44 -6 80 -10z"
                  />
                  <path
                    d="M757 3533 c-4 -3 -7 -159 -7 -345 l0 -338 423 0 c316 0 426 -3 435
-12 9 -9 12 -264 12 -1085 l0 -1073 395 0 395 0 0 1080 c0 594 1 1081 3 1082
1 1 193 5 427 8 l425 5 0 340 0 340 -1251 3 c-688 1 -1254 -1 -1257 -5z"
                  />
                  <path
                    d="M3537 3534 c-4 -4 -7 -648 -7 -1431 l0 -1423 395 0 395 0 2 428 3
427 169 3 c116 2 173 -1 182 -9 8 -6 53 -71 101 -143 375 -567 447 -674 469
-693 l25 -23 439 0 c241 0 441 3 444 8 2 4 -9 27 -26 52 -78 114 -211 310
-318 465 -251 365 -310 454 -310 463 0 6 35 31 78 58 214 132 315 232 400 399
16 33 36 78 42 100 7 22 16 50 21 62 4 12 16 81 25 153 15 122 15 141 0 259
-38 302 -156 501 -386 653 -87 57 -231 120 -330 145 -191 47 -183 46 -1015 50
-435 2 -794 1 -798 -3z m1496 -708 c87 -22 120 -41 170 -95 72 -81 93 -190 61
-314 -26 -100 -81 -167 -172 -207 -95 -42 -179 -51 -482 -48 l-285 3 -3 330
c-1 181 0 336 3 344 8 20 623 9 708 -13z"
                  />
                  <path
                    d="M11025 3515 c-105 -15 -196 -32 -245 -47 -285 -86 -459 -187 -646
-373 -273 -270 -414 -609 -414 -995 0 -168 19 -287 72 -460 32 -104 32 -104
79 -205 135 -291 407 -534 740 -663 161 -63 200 -73 434 -112 116 -20 374 -2
509 35 28 8 74 20 101 28 28 8 93 31 145 52 494 198 803 599 885 1151 37 245
-16 562 -135 804 -102 208 -223 350 -425 500 -127 94 -317 200 -360 200 -8 0
-16 4 -19 9 -3 5 -22 12 -42 16 -20 3 -44 10 -53 15 -22 12 -149 38 -244 50
-101 13 -268 11 -382 -5z m322 -690 c74 -17 75 -17 178 -66 54 -26 92 -56 166
-129 143 -143 193 -256 225 -507 11 -85 -28 -272 -81 -388 -78 -171 -218 -292
-418 -363 -62 -22 -90 -25 -202 -26 -111 -1 -140 3 -200 22 -247 83 -425 272
-485 516 -37 151 -34 346 5 464 78 230 269 411 500 473 78 21 226 23 312 4z"
                  />
                  <path
                    d="M6684 1361 c-2 -2 -4 -152 -4 -333 l0 -328 1260 0 1260 0 0 333 0
332 -1256 0 c-691 0 -1258 -2 -1260 -4z"
                  />
                </g>
              </svg>

              {isMatch ? (
                <>
                  {/* <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                Troo
              </Typography> */}

                  <DrawerComp />
                </>
              ) : (
                <>
                  <Stack direction="row" spacing={4}>
                    <StyledButton
                      component={NavLink}
                      to="/verificationLists"
                      activeClassName="active"
                    >
                      <Stack direction="row" alignItems="center">
                        <Typography variant="body2" color={"black"}>
                          Verification Requests
                        </Typography>
                      </Stack>
                    </StyledButton>

                    <StyledButton
                      component={NavLink}
                      to="/requestNewVerification"
                      activeClassName="active"
                    >
                      <Stack direction="row" alignItems="center">
                        <Typography variant="body2" color={"black"}>
                         New Verification
                        </Typography>
                      </Stack>
                    </StyledButton>

                    <StyledButton
                      component={NavLink}
                      to="/addressNew"
                      activeClassName="active"
                    >
                      <Stack direction="row" alignItems="center">
                        <Typography variant="body2" color={"black"}>
                          Add Address
                        </Typography>
                      </Stack>
                    </StyledButton>

                    <StyledButton
                      component={NavLink}
                      activeClassName="active"
                      to="/"
                      onClick={() => {
                        localStorage.removeItem("accessToken");
                        localStorage.removeItem("userid");
                      }}
                    >
                      <Stack direction="row" alignItems="center">
                        {/* <LogoutIcon style={{ marginRight: "6px" }} /> */}
                        <Typography variant="body2" color={"black"}>
                          Logout
                        </Typography>
                      </Stack>
                    </StyledButton>
                  </Stack>

                  <Box sx={{ flexGrow: 1 }}>
                    <Tooltip >
                      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar alt="Remy Sharp" src="src\assets\new1.jpg" />
                      </IconButton>
                    </Tooltip>
                    {/* <Menu
                      sx={{ mt: "45px", color: "red" }}
                      id="menu-appbar"
                      anchorEl={anchorElUser}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      open={Boolean(anchorElUser)}
                      onClose={handleCloseUserMenu}
                    >
                      `{" "}
                      {settings.map((setting) => (
                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                          <Typography textAlign="center">{setting}</Typography>
                        </MenuItem>
                      ))}
                      `
                    </Menu> */}
                  </Box>
                </>
              )}
            </Toolbar>
          </AppBar>
        )}
    </React.Fragment>
  );
};

export default Navbarnew;
