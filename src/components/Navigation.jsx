import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import logo from "../assets/logo.webp";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const navItems = [
  {
    title: "Resume Templates",
    path: "/",
  },
  {
    title: "My Resumes",
    path: "/resume",
  },
  {
    title: "About Us",
    path: "/about",
  },
];

function Navigation(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box py={1}>
        <Link to="/">
          <img src={logo} alt="Resume-builder" width={120} />
        </Link>
      </Box>
      <Divider />
      <List
        sx={{
          ml: "1rem",
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        {navItems.map((item) => (
          <ListItem key={item.title} disablePadding>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={item.path}
            >
              {item.title}
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }} component="header" marginBottom="8rem">
      <CssBaseline />
      <AppBar component="nav" style={{ backgroundColor: "white" }}>
        <Toolbar>
          <IconButton
            backgroundColor="primary"
            color="primary"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Box py={1} flexGrow={1} display={{ xs: "none", sm: "block" }}>
            <Link to="/">
              <img src={logo} alt="Resume-builder" width={120} />
            </Link>
          </Box>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Link
                style={{
                  marginLeft: "1.5rem",
                  textDecoration: "none",
                  color: "#000",
                }}
                to={item.path}
                key={item.title}
                sx={{ color: "#000" }}
              >
                {item.title}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
export default Navigation;
