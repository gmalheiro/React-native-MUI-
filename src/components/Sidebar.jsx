import { Box,List,ListItem,ListItemButton,ListItemIcon,ListItemText, Switch} from "@mui/material";
import { Home, Settings ,AccountBox,People, Storefront,Article, Person, ModeNight } from "@mui/icons-material";
import React from "react";

const Sidebar = () => {
  return (
    <Box
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <List>
          <ListItem disablePadding>
            <ListItemButton component="a"  href="#home" >
              <ListItemIcon >
                <Home/>
              </ListItemIcon> 
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a"  href="#pages" >
              <ListItemIcon >
                <Article/>
              </ListItemIcon> 
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a"  href="#pages" >
              <ListItemIcon >
                <People/>
              </ListItemIcon> 
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a"  href="#pages" >
              <ListItemIcon >
                <Storefront/>
              </ListItemIcon> 
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a"  href="#pages" >
              <ListItemIcon >
                <Person/>
              </ListItemIcon> 
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a"  href="#pages" >
              <ListItemIcon >
                <Settings/>
              </ListItemIcon> 
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a"  href="#pages" >
              <ListItemIcon >
                <AccountBox/>
              </ListItemIcon> 
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a"  href="#pages" >
              <ListItemIcon >
                <ModeNight/>
              </ListItemIcon> 
              <Switch/>
            </ListItemButton>
          </ListItem>
      </List>
  
    </Box>
  );
};

export default Sidebar;
