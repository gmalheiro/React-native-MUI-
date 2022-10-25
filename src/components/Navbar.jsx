import PersonIcon from "@mui/icons-material/Person";
import {
  AppBar,
  InputBase,
  styled,
  Toolbar,
  Typography,
  Badge,
  Avatar,
  Box,
  Menu,
  MenuItem,
} from "@mui/material";
import React from "react";
import { Notifications, Mail } from "@mui/icons-material";
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled("box")(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));
const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));
const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Gabe Dev
        </Typography>
        <PersonIcon sx={{ display: { xs: "block", sm: "none"} }} />
        <Search>
          <InputBase placeholder="Search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar
             sx={{ width: 30, height: 30 }}
             src="https://avatars.githubusercontent.com/u/92603922?v=4"
             onClick={e => setOpen(true)
              
            }
           />
        </Icons>
        <UserBox sx={{cursor:'pointer'}} onClick={e => setOpen(true)} >
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://avatars.githubusercontent.com/u/92603922?v=4"
          />
          <Typography variant="spam">Gabe</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e => setOpen(false)}  
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
